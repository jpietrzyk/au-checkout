/** biome-ignore-all lint/nursery/useUniqueElementIds: it's fine */
import { useState } from "react";
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

const TransloaditUploader = () => {
  const [uppy] = useState(() => createUppy());

  return (
    <UppyContextProvider uppy={uppy}>
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
          <Dashboard
            uppy={uppy}
            plugins={["ImageEditor", "Webcam"]}
            height={500}
            width="100%"
            proudlyDisplayPoweredByUppy={false}
          />
        </div>

        <div className="img-gallery hidden">
          <p>Uploaded files</p>
        </div>
      </section>
    </UppyContextProvider>
  );
};

export default TransloaditUploader;
