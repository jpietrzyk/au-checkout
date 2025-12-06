/** biome-ignore-all lint/nursery/useUniqueElementIds: it's fine */
import { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import type { UppyFile, UploadResult } from "@uppy/core";
import ImageEditor from "@uppy/image-editor";
import Transloadit from "@uppy/transloadit";
import Webcam from "@uppy/webcam";
import GoogleDrive from "@uppy/google-drive";
import { Button } from "@/components/ui/button";
import { Camera, HardDrive, Upload } from "lucide-react";

import "@uppy/core/css/style.min.css";
import "@uppy/drag-drop/css/style.min.css";
import "@uppy/image-editor/css/style.min.css";
import "@uppy/webcam/css/style.min.css";

interface SplitUploaderProps {
  onFileUploaded?: (fileUrl: string) => void;
}

export const SplitUploader = ({ onFileUploaded }: SplitUploaderProps) => {
  const [selectedFile, setSelectedFile] = useState<UppyFile<
    Record<string, unknown>,
    Record<string, unknown>
  > | null>(null);
  const [showEditor, setShowEditor] = useState(false);
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
        target: "body",
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

  useEffect(() => {
    const handleFileAdded = (
      file: UppyFile<Record<string, unknown>, Record<string, unknown>>
    ) => {
      console.log("File added:", file);
      setSelectedFile(file);
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
    uppy.on("complete", handleComplete);

    return () => {
      uppy.off("file-added", handleFileAdded);
      uppy.off("complete", handleComplete);
    };
  }, [uppy, onFileUploaded]);

  const handleWebcamCapture = () => {
    const webcamPlugin = uppy.getPlugin("Webcam");
    if (
      webcamPlugin &&
      "openModal" in webcamPlugin &&
      typeof webcamPlugin.openModal === "function"
    ) {
      webcamPlugin.openModal();
    }
  };

  const handleGoogleDrive = () => {
    const drivePlugin = uppy.getPlugin("GoogleDrive");
    if (
      drivePlugin &&
      "openModal" in drivePlugin &&
      typeof drivePlugin.openModal === "function"
    ) {
      drivePlugin.openModal();
    }
  };

  const handleEditImage = () => {
    if (selectedFile) {
      console.log("Edit button clicked, selectedFile:", selectedFile);
      setShowEditor(true);
      const editorPlugin = uppy.getPlugin("ImageEditor");
      console.log("ImageEditor plugin:", editorPlugin);
      if (
        editorPlugin &&
        "selectFile" in editorPlugin &&
        typeof editorPlugin.selectFile === "function"
      ) {
        console.log("Calling selectFile...");
        try {
          editorPlugin.selectFile(selectedFile);
          // Force the editor to open by dispatching an event
          uppy.emit("file-editor:start", selectedFile);
        } catch (error) {
          console.error("Error opening editor:", error);
        }
      } else {
        console.error(
          "ImageEditor plugin not found or selectFile not available"
        );
      }
    }
  };

  return {
    // Controls component for left side
    Controls: () => {
      const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
          uppy.addFile({
            name: files[0].name,
            type: files[0].type,
            data: files[0],
          });
        }
      };

      return (
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

          <div className="space-y-3">
            <Button
              onClick={handleWebcamCapture}
              className="w-full"
              variant="outline"
              size="lg"
            >
              <Camera className="mr-2 h-5 w-5" />
              Zrób zdjęcie kamerą
            </Button>

            <Button
              onClick={handleGoogleDrive}
              className="w-full"
              variant="outline"
              size="lg"
            >
              <HardDrive className="mr-2 h-5 w-5" />
              Importuj z Google Drive
            </Button>

            {selectedFile && (
              <Button
                onClick={handleEditImage}
                className="w-full"
                variant="default"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                Edytuj zdjęcie
              </Button>
            )}

            {selectedFile && !showEditor && (
              <Button
                onClick={() => uppy.upload()}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                Prześlij zdjęcie
              </Button>
            )}
          </div>
        </div>
      );
    },

    // Preview component for right side
    Preview: () => (
      <div className="w-full h-full">
        {selectedFile && selectedFile.data instanceof Blob ? (
          <div>
            <img
              src={URL.createObjectURL(selectedFile.data)}
              alt="Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        ) : (
          <div className="text-gray-400 text-center">
            <p className="text-xl">Podgląd zdjęcia</p>
            <p className="text-sm mt-2">Twoje zdjęcie pojawi się tutaj</p>
          </div>
        )}
      </div>
    ),
  };
};
