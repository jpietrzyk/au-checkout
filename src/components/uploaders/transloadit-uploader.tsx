import { useState } from "react";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";
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
    .use(ImageEditor, {});
}

const TransloaditUploader = () => {
  const [uppy] = useState(() => createUppy());

  uppy.on("complete", (result) => {
    console.log(
      "Upload complete! We’ve uploaded these files:",
      result.successful
    );
  });

  return (
    <section>
      <Dashboard uppy={uppy} plugins={["ImageEditor", "Webcam"]} />
      <div className="img-gallery">
        <p>Uploaded files</p>
      </div>
    </section>
  );
};

export default TransloaditUploader;
