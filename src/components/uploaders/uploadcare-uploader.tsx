import { useRef, useState } from "react";
import {
  FileUploaderInline,
  OutputFileEntry,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

type UploadcareUploaderProps = {
  onFileUpload?: (file: OutputFileEntry) => void;
  onDoneClick?: (event: { successEntries?: OutputFileEntry[] }) => void;
};

const UploadcareUploader = ({
  onFileUpload,
  onDoneClick,
}: UploadcareUploaderProps) => {
  const [files, setFiles] = useState<OutputFileEntry[]>([]);
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null);

  const handleFileUpload = (file: OutputFileEntry) => {
    setFiles((prevFiles) => [...prevFiles, file]);
    onFileUpload?.(file);
  };

  const handleFileApply = (event: { successEntries?: OutputFileEntry[] }) => {
    const filesToAdd = event?.successEntries ?? [];
    if (filesToAdd.length > 0) {
      setFiles(() => [...filesToAdd]);
    }
    onDoneClick?.(event);
  };

  return (
    <section>
      <FileUploaderInline
        classNameUploader="uc-light"
        className="fileUploaderWrapper"
        pubkey={`${import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}`}
        apiRef={uploaderRef}
        imgOnly={true}
        multiple={false}
        useCloudImageEditor={true}
        onFileUploadSuccess={handleFileUpload}
        onDoneClick={handleFileApply}
      />
      <div className="img-gallery">
        {files.map((file) => (
          <img
            key={file.uuid}
            src={file.cdnUrl as string}
            alt="Preview"
            className="img-preview"
          />
        ))}
      </div>
    </section>
  );
};

export default UploadcareUploader;
