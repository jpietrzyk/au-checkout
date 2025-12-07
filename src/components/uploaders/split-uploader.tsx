/** biome-ignore-all lint/nursery/useUniqueElementIds: it's fine */
import { useState, useEffect, useRef } from "react";
import Uppy from "@uppy/core";
import type { UppyFile, UploadResult } from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import ImageEditor from "@uppy/image-editor";
import Transloadit from "@uppy/transloadit";
import Webcam from "@uppy/webcam";
import GoogleDrive from "@uppy/google-drive";
import { ProviderIcon } from "@uppy/react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Upload } from "lucide-react";

import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";
import "@uppy/image-editor/css/style.min.css";
import "@uppy/webcam/css/style.min.css";

interface SplitUploaderProps {
  onFileUploaded?: (fileUrl: string) => void;
}

export const SplitUploader = ({ onFileUploaded }: SplitUploaderProps) => {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [selectedFile, setSelectedFile] = useState<UppyFile<
    Record<string, unknown>,
    Record<string, unknown>
  > | null>(null);
  const [isEditingComplete, setIsEditingComplete] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [uppy] = useState(() => {
    return new Uppy({
      restrictions: { maxNumberOfFiles: 1, allowedFileTypes: ["image/*"] },
      autoProceed: false,
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
          disableLocalFiles: true,
          plugins: [],
          // Hide the "Add more files" area in Dashboard
          note: null,
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

    const handleEditorOpen = (
      file: UppyFile<Record<string, unknown>, Record<string, unknown>>
    ) => {
      console.log("file-editor:open - Editor opened:", file);
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

    const handleDashboardFileEditStart = (file: any) => {
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
      }
    };

    uppy.on("file-added", handleFileAdded);
    uppy.on("file-editor:start", handleFileEditorStart);
    uppy.on("file-editor:open", handleEditorOpen);
    uppy.on("file-editor:complete", handleEditorComplete);
    uppy.on("file-editor:cancel", handleEditorCancel);
    uppy.on("dashboard:file-edit-start", handleDashboardFileEditStart);
    uppy.on("complete", handleComplete);

    return () => {
      uppy.off("file-added", handleFileAdded);
      uppy.off("file-editor:start", handleFileEditorStart);
      uppy.off("file-editor:open", handleEditorOpen);
      uppy.off("file-editor:complete", handleEditorComplete);
      uppy.off("file-editor:cancel", handleEditorCancel);
      uppy.off("dashboard:file-edit-start", handleDashboardFileEditStart);
      uppy.off("complete", handleComplete);
    };
  }, [uppy, onFileUploaded]);

  const handleWebcamCapture = () => {
    let webcamPlugin = uppy.getPlugin("Webcam");

    // Install plugin if not already installed
    if (!webcamPlugin) {
      uppy.use(Webcam, {
        modes: ["picture"],
      });
      webcamPlugin = uppy.getPlugin("Webcam");
    }

    // Open webcam modal
    if (webcamPlugin && typeof (webcamPlugin as any).openModal === "function") {
      (webcamPlugin as any).openModal();
    }
  };

  const handleGoogleDrive = () => {
    let drivePlugin = uppy.getPlugin("GoogleDrive");

    // Install plugin if not already installed
    if (!drivePlugin) {
      uppy.use(GoogleDrive, {
        companionUrl: "https://companion.uppy.io",
      });
      drivePlugin = uppy.getPlugin("GoogleDrive");
    }

    // Open Google Drive modal
    if (drivePlugin && typeof (drivePlugin as any).openModal === "function") {
      (drivePlugin as any).openModal();
    }
  };

  const handleEditImage = () => {
    if (selectedFile) {
      const editorPlugin = uppy.getPlugin("ImageEditor");
      if (
        editorPlugin &&
        "selectFile" in editorPlugin &&
        typeof editorPlugin.selectFile === "function"
      ) {
        editorPlugin.selectFile(selectedFile);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
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
    <div className="grid grid-cols-2 h-full w-full">
      {/* Left column: Upload controls */}
      <div className="relative p-16">
        <div className="absolute inset-16">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Prześlij swoje zdjęcie
              </h2>
              <p className="text-gray-600">
                Wybierz zdjęcie, które chcesz zamienić w obraz
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 hover:border-gray-400 rounded-lg p-12 text-center cursor-pointer transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <p className="text-gray-600">
                  Upuść zdjęcie tutaj lub kliknij, aby wybrać z dysku
                </p>
              </label>
            </div>

            <ButtonGroup>
              <Button
                onClick={handleWebcamCapture}
                variant="outline"
                size="icon"
                aria-label="Zrób zdjęcie kamerą"
              >
                <ProviderIcon provider="camera" fill="currentColor" />
              </Button>

              <Button
                onClick={handleGoogleDrive}
                variant="outline"
                size="icon"
                aria-label="Importuj z Google Drive"
              >
                <ProviderIcon provider="googledrive" fill="currentColor" />
              </Button>
            </ButtonGroup>

            {selectedFile && isEditingComplete && !isEditorOpen && (
              <Button
                onClick={() => uppy.upload()}
                className="w-full bg-green-600 hover:bg-green-700 mt-3"
                size="lg"
              >
                Prześlij zdjęcie
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Right column: Image preview with Dashboard */}
      <div className="bg-gray-100/50 p-16">
        <div ref={dashboardRef} className="w-full h-full min-h-[600px]" />
      </div>
    </div>
  );
};
