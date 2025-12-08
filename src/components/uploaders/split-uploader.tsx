/** biome-ignore-all lint/nursery/useUniqueElementIds: it's fine */
import { useState, useEffect, useRef } from "react";
import Uppy from "@uppy/core";
import type { UppyFile, UploadResult } from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import ImageEditor from "@uppy/image-editor";
import Transloadit from "@uppy/transloadit";
import Webcam from "@uppy/webcam";
import GoogleDrive from "@uppy/google-drive";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";

import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";
import "@uppy/image-editor/css/style.min.css";
import "@uppy/webcam/css/style.min.css";

interface SplitUploaderProps {
  onFileUploaded?: (fileUrl: string) => void;
}

export const SplitUploader = ({ onFileUploaded }: SplitUploaderProps) => {
  const navigate = useNavigate();
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [selectedFile, setSelectedFile] = useState<UppyFile<
    Record<string, unknown>,
    Record<string, unknown>
  > | null>(null);
  const [isEditingComplete, setIsEditingComplete] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<1 | 2>(1);
  const [hasRama, setHasRama] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
  const [, setFileUrl] = useLocalStorage<string>({
    key: "uploaded-image-url",
    defaultValue: "",
  });
  const [uppy] = useState(() => {
    return new Uppy({
      restrictions: { maxNumberOfFiles: 1, allowedFileTypes: ["image/*"] },
      autoProceed: false,
    })
      .use(Webcam, {
        modes: ["picture"],
      })
      .use(GoogleDrive, {
        companionUrl: "https://companion.uppy.io",
      })
      .use(ImageEditor, {
        quality: 0.8,
        actions: {
          revert: true,
          rotate: true,
          granularRotate: true,
          flip: true,
          zoomIn: true,
          zoomOut: true,
          cropSquare: true,
          cropWidescreen: true,
          cropWidescreenVertical: true,
        },
        cropperOptions: {
          viewMode: 1,
          background: false,
          autoCropArea: 1,
          responsive: true,
          croppedCanvasOptions: {},
        },
      })
      .use(Transloadit, {
        assemblyOptions: {
          params: {
            auth: { key: import.meta.env.VITE_TRANSLOADIT_PUBLIC_KEY },
            template_id: import.meta.env.VITE_TRANSLOADIT_TEMPLATE_ID,
          },
        },
        waitForEncoding: true,
      });
  });

  // Install Dashboard after component mounts
  useEffect(() => {
    const dashboardPlugin = uppy.getPlugin("Dashboard");

    if (!dashboardPlugin && dashboardRef.current) {
      console.log("Installing Dashboard plugin to ref...");
      console.log("Ref element:", dashboardRef.current);
      try {
        uppy.use(Dashboard, {
          inline: true,
          target: dashboardRef.current,
          proudlyDisplayPoweredByUppy: false,
          hideUploadButton: true,
          hideCancelButton: true,
          hideProgressAfterFinish: false,
          showSelectedFiles: true,
          disableStatusBar: false,
          autoOpen: "imageEditor",
          note: null,
          width: "100%",
          height: "100%",
        });
        console.log("Dashboard installed successfully to ref");

        // Check what was rendered
        setTimeout(() => {
          console.log(
            "Ref children after install:",
            dashboardRef.current?.children.length
          );
          console.log(
            "Ref innerHTML:",
            dashboardRef.current?.innerHTML.substring(0, 300)
          );

          // Try to find the Dashboard element
          const dashboardEl = document.querySelector(".uppy-Dashboard");
          console.log("Dashboard element found in DOM:", dashboardEl);
          if (dashboardEl) {
            console.log(
              "Dashboard computed display:",
              window.getComputedStyle(dashboardEl).display
            );
            console.log(
              "Dashboard computed height:",
              window.getComputedStyle(dashboardEl).height
            );
            console.log(
              "Dashboard computed width:",
              window.getComputedStyle(dashboardEl).width
            );
          }
        }, 200);
      } catch (error) {
        console.error("Error installing Dashboard:", error);
      }
    } else if (dashboardPlugin) {
      console.log("Dashboard already exists, skipping installation");
    } else {
      console.log("Dashboard ref not ready yet");
    }
  }, [uppy]);

  useEffect(() => {
    const handleFileAdded = (
      file: UppyFile<Record<string, unknown>, Record<string, unknown>>
    ) => {
      console.log("File added:", file);
      setSelectedFile(file);
      setIsEditingComplete(false); // Reset when new file is added
      setIsEditorOpen(true); // Editor opens automatically with autoOpen
    };

    const handleFileEditorStart = (
      file: UppyFile<Record<string, unknown>, Record<string, unknown>>
    ) => {
      console.log("file-editor:start - Editor starting:", file);
      setIsEditorOpen(true); // Editor opened - hide button
    };

    const handleEditorComplete = (
      file: UppyFile<Record<string, unknown>, Record<string, unknown>>
    ) => {
      console.log("Editor complete:", file);
      setSelectedFile(file);
      setIsEditingComplete(true); // Mark editing as complete
      setIsEditorOpen(false); // Editor closed - show button
    };

    const handleEditorCancel = () => {
      console.log("Editor cancelled");
      setIsEditorOpen(false); // Editor closed - show button
    };

    const handleDashboardFileEditStart = (
      file?: UppyFile<Record<string, unknown>, Record<string, unknown>>
    ) => {
      console.log(
        "dashboard:file-edit-start - User clicked edit button:",
        file
      );
      setIsEditorOpen(true); // Hide button when edit clicked
    };

    const handleComplete = (
      result: UploadResult<Record<string, unknown>, Record<string, unknown>>
    ) => {
      if (result.successful && result.successful.length > 0) {
        const file = result.successful[0];
        if (onFileUploaded && file.uploadURL) {
          onFileUploaded(file.uploadURL);
        }
        setUploadedImageUrl(file.uploadURL || "");
        setActiveSection(2); // Switch to section 2 after upload
      }
    };

    uppy.on("file-added", handleFileAdded);
    uppy.on("file-editor:start", handleFileEditorStart);
    uppy.on("file-editor:complete", handleEditorComplete);
    uppy.on("file-editor:cancel", handleEditorCancel);
    uppy.on("dashboard:file-edit-start", handleDashboardFileEditStart);
    uppy.on("complete", handleComplete);
    uppy.on("file-added", handleFileAdded);
    uppy.on("file-editor:start", handleFileEditorStart);
    uppy.on("file-editor:complete", handleEditorComplete);
    uppy.on("file-editor:cancel", handleEditorCancel);
    uppy.on("dashboard:file-edit-start", handleDashboardFileEditStart);
    uppy.on("complete", handleComplete);

    return () => {
      uppy.off("file-added", handleFileAdded);
      uppy.off("file-editor:start", handleFileEditorStart);
      uppy.off("file-editor:complete", handleEditorComplete);
      uppy.off("file-editor:cancel", handleEditorCancel);
      uppy.off("dashboard:file-edit-start", handleDashboardFileEditStart);
      uppy.off("complete", handleComplete);
    };
  }, [uppy, onFileUploaded]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Remove existing files first
      uppy.getFiles().forEach((file) => uppy.removeFile(file.id));

      uppy.addFile({
        name: files[0].name,
        type: files[0].type,
        data: files[0],
      });
    }
  };

  return (
    <div
      className="grid h-full w-full"
      style={{ gridTemplateColumns: "33% 67%" }}
    >
      {/* Left column: Upload controls */}
      <div className="relative p-16">
        <div className="absolute inset-x-16 top-32">
          <div className="space-y-6">
            {/* Section 1: Upload Image */}
            <div
              className={
                activeSection === 1
                  ? "bg-purple-50 border-2 border-purple-200 rounded-lg p-6"
                  : "bg-gray-100 border-2 border-gray-300 rounded-lg p-6 opacity-50"
              }
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Prześlij swoje zdjęcie
                </h2>
                <span
                  className={
                    activeSection === 1
                      ? "text-2xl font-bold text-purple-600"
                      : "text-2xl font-bold text-gray-400"
                  }
                >
                  1
                </span>
              </div>
              <p
                className={
                  activeSection === 1
                    ? "text-gray-600 mb-6"
                    : "text-gray-500 mb-6"
                }
              >
                Wybierz zdjęcie, które chcesz zamienić w obraz
              </p>

              <div className="border-2 border-dashed border-gray-300 hover:border-gray-400 rounded-lg p-12 text-center cursor-pointer transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-input"
                  disabled={activeSection === 2}
                />
                <label htmlFor="file-input" className="cursor-pointer">
                  <p
                    className={
                      activeSection === 1 ? "text-gray-600" : "text-gray-400"
                    }
                  >
                    Upuść zdjęcie tutaj lub kliknij, aby wybrać z dysku
                  </p>
                </label>
              </div>

              {selectedFile && isEditingComplete && !isEditorOpen && (
                <Button
                  onClick={() => uppy.upload()}
                  className="w-full bg-green-600 hover:bg-green-700 mt-6"
                  size="lg"
                  disabled={activeSection === 2}
                >
                  Prześlij zdjęcie
                </Button>
              )}
            </div>
            {/* Section 2: Accessories + Order */}
            <div
              className={
                activeSection === 2
                  ? "mt-8 pt-8 border-t bg-purple-50 border-2 border-purple-200 rounded-lg p-6"
                  : "mt-8 pt-8 border-t border-gray-300 opacity-50"
              }
            >
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={
                    activeSection === 2
                      ? "text-2xl font-bold text-gray-800"
                      : "text-2xl font-bold text-gray-600"
                  }
                >
                  Wybierz dodatki
                </h3>
                <span
                  className={
                    activeSection === 2
                      ? "text-2xl font-bold text-purple-600"
                      : "text-2xl font-bold text-gray-400"
                  }
                >
                  2
                </span>
              </div>
              <p
                className={
                  activeSection === 2 ? "text-gray-600" : "text-gray-500"
                }
              >
                Możesz dobrać do swojego obrazu następujące dodatki
              </p>
              {activeSection === 2 && (
                <div className="flex items-center mt-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-purple-600"
                      checked={hasRama}
                      onChange={(e) => {
                        setHasRama(e.target.checked);
                        window.localStorage.setItem("has-rama", e.target.checked ? "true" : "false");
                      }}
                    />
                    <span className="ml-3 text-lg text-gray-800 font-medium">
                      Rama drewniana
                    </span>
                  </label>
                  <span className="ml-4 text-gray-500 text-sm">
                    Solidna rama z naturalnego drewna, podkreślająca charakter
                    obrazu.
                  </span>
                </div>
              )}
              {/* Order button and price */}
              {activeSection === 2 && (
                <div className="flex items-center justify-between mt-8">
                  <span className="text-xl font-bold text-gray-800">
                    Cena: {hasRama ? "250 zł" : "200 zł"}
                  </span>
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-3 rounded-lg"
                    size="lg"
                    disabled={activeSection !== 2}
                    onClick={() => {
                      setFileUrl(uploadedImageUrl);
                      navigate(`/checkout`);
                    }}
                  >
                    Zamów -&gt;
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right column: Image preview or Dashboard */}
      <div className="bg-gray-100/50 p-4 h-full flex items-center justify-center">
        {activeSection === 1 ? (
          <div ref={dashboardRef} className="w-full h-full" />
        ) : uploadedImageUrl ? (
          <img
            src={uploadedImageUrl}
            alt="Podgląd przesłanego zdjęcia"
            className={
              `max-w-full max-h-[80vh] rounded-lg shadow-lg ` +
              (hasRama
                ? "border-8 border-yellow-400 drop-shadow-xl outline outline-4 outline-yellow-700"
                : "border border-gray-300")
            }
          />
        ) : null}
      </div>
    </div>
  );
};
