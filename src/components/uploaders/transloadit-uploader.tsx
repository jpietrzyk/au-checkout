/** biome-ignore-all lint/nursery/useUniqueElementIds: it's fine */
import { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import { UppyContextProvider } from "@uppy/react";
import Dashboard from "@uppy/react/dashboard";
import Webcam from "@uppy/webcam";
import ImageEditor from "@uppy/image-editor";
import Transloadit from "@uppy/transloadit";

import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";
import "@uppy/image-editor/css/style.min.css";

function createUppy() {
  return new Uppy({
    restrictions: { maxNumberOfFiles: 1, allowedFileTypes: ["image/*"] },
    autoProceed: true,
  })
    .use(Transloadit, {
      assemblyOptions: {
        params: {
          auth: { key: import.meta.env.VITE_TRANSLOADIT_PUBLIC_KEY },
          template_id: import.meta.env.VITE_TRANSLOADIT_TEMPLATE_ID,
        },
      },
      waitForEncoding: true,
    })
    .use(Webcam, {
      showVideoSourceDropdown: true,
      showRecordingLength: true,
    })
    .use(ImageEditor, {
      quality: 0.8,
      // Image editor locale configuration
      locale: {
        strings: {
          revert: "Revert",
          rotate: "Rotate",
          zoomIn: "Zoom in",
          zoomOut: "Zoom out",
          flipHorizontal: "Flip horizontally",
          aspectRatioSquare: "Square",
          aspectRatioLandscape: "Landscape",
          aspectRatioPortrait: "Portrait",
        },
      },
    });
}

interface TransloaditUploaderProps {
  onFileUploaded?: (fileUrl: string) => void;
}

const TransloaditUploader: React.FC<TransloaditUploaderProps> = ({
  onFileUploaded,
}) => {
  const [uppy] = useState(() => createUppy());
  const [uploadedFile, setUploadedFile] = useState<{
    id: string;
    name: string;
    uploadURL: string;
  } | null>(null);

  useEffect(() => {
    const handleComplete = (result: {
      successful?: { id: string; name: string; uploadURL?: string }[];
    }) => {
      if (result.successful && result.successful.length > 0) {
        // Only store the latest uploaded file (single file upload)
        const file = result.successful[0];
        const fileData = {
          id: file.id,
          name: file.name,
          uploadURL: file.uploadURL || "",
        };
        setUploadedFile(fileData);
        console.log("Upload complete! File:", fileData);

        // Call the callback with the file URL if provided
        if (onFileUploaded && fileData.uploadURL) {
          onFileUploaded(fileData.uploadURL);
        }
      }
    };

    uppy.on("complete", handleComplete);

    return () => {
      uppy.off("complete", handleComplete);
    };
  }, [uppy]);

  return (
    <UppyContextProvider uppy={uppy}>
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Upload & Edit Image</h2>
          <p className="text-gray-600 mb-4">
            Upload an image and use the built-in editor to crop, rotate, and
            adjust your photo before uploading.
          </p>
          <Dashboard
            uppy={uppy}
            plugins={["ImageEditor", "Webcam"]}
            height={500}
            width="100%"
            proudlyDisplayPoweredByUppy={false}
          />
        </div>

        {/* Hidden file data for programmatic access - not displayed to user */}
        {uploadedFile && (
          <div
            className="hidden"
            data-uploaded-file={JSON.stringify(uploadedFile)}
          >
            {/* File data is stored for backend integration or further processing */}
          </div>
        )}
      </section>
    </UppyContextProvider>
  );
};

export default TransloaditUploader;
