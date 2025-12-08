/** biome-ignore-all lint/nursery/useUniqueElementIds: it's fine */
import { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import { UppyContextProvider } from "@uppy/react";
import Dashboard from "@uppy/react/dashboard";
import ImageEditor from "@uppy/image-editor";
import Transloadit from "@uppy/transloadit";
import Webcam from "@uppy/webcam";
import GoogleDrive from "@uppy/google-drive";

import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";
import "@uppy/image-editor/css/style.min.css";
import "@uppy/webcam/css/style.min.css";

function createUppy() {
  return new Uppy({
    restrictions: { maxNumberOfFiles: 1, allowedFileTypes: ["image/*"] },
    autoProceed: false, // Changed to false to prevent automatic upload
    locale: {
      pluralize: (n: number) => (n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2),
      strings: {
        dropPasteImportBoth: "Prześlij swoje zdjęcie",
        dropPasteImportFiles: "Upuść zdjęcie tutaj lub %{browse}",
        dropPasteBoth: "Upuść zdjęcie tutaj, wklej lub %{browse}",
        dropPasteFiles: "Upuść zdjęcie tutaj, wklej lub %{browse}",
        dropHint: "Upuść zdjęcie tutaj",
        browseFiles: "wybierz z dysku",
        addMore: "Dodaj więcej",
        addMoreFiles: "Dodaj więcej zdjęć",
        addingMoreFiles: "Dodawanie kolejnych zdjęć",
        importFrom: "Importuj z %{name}",
        xFilesSelected: {
          0: "%{smart_count} zdjęcie wybrane",
          1: "%{smart_count} zdjęcia wybrane",
          2: "%{smart_count} zdjęć wybranych",
        },
        uploadXFiles: {
          0: "Prześlij %{smart_count} zdjęcie",
          1: "Prześlij %{smart_count} zdjęcia",
          2: "Prześlij %{smart_count} zdjęć",
        },
        uploadXNewFiles: {
          0: "Prześlij +%{smart_count} zdjęcie",
          1: "Prześlij +%{smart_count} zdjęcia",
          2: "Prześlij +%{smart_count} zdjęć",
        },
        upload: "Prześlij",
        retryUpload: "Spróbuj ponownie",
        cancelUpload: "Anuluj przesyłanie",
        xTimeLeft: "%{time} pozostało",
        uploadingXFiles: {
          0: "Przesyłanie %{smart_count} zdjęcia",
          1: "Przesyłanie %{smart_count} zdjęć",
          2: "Przesyłanie %{smart_count} zdjęć",
        },
        processingXFiles: {
          0: "Przetwarzanie %{smart_count} zdjęcia",
          1: "Przetwarzanie %{smart_count} zdjęć",
          2: "Przetwarzanie %{smart_count} zdjęć",
        },
        uploading: "Przesyłanie",
        complete: "Zakończono",
        uploadFailed: "Przesyłanie nie powiodło się",
        paused: "Wstrzymano",
        retry: "Spróbuj ponownie",
        cancel: "Anuluj",
        done: "Gotowe",
        removeFile: "Usuń zdjęcie",
        editFile: "Edytuj zdjęcie",
        editImage: "Edytuj obraz",
        edit: "Edytuj",
        finishEditingFile: "Zakończ edycję",
        save: "Zapisz",
        saveChanges: "Zapisz zmiany",
      },
    },
  })
    .use(Webcam, {
      locale: {
        strings: {
          smile: "Uśmiechnij się!",
          takePicture: "Zrób zdjęcie",
          startRecording: "Rozpocznij nagrywanie",
          stopRecording: "Zatrzymaj nagrywanie",
          allowAccessTitle: "Pozwól na dostęp do kamery",
          allowAccessDescription:
            "Aby robić zdjęcia, musisz zezwolić na dostęp do kamery.",
        },
      },
    })
    .use(GoogleDrive, {
      companionUrl: "https://companion.uppy.io",
    })
    .use(ImageEditor, {
      quality: 0.8,
      // Image editor locale configuration
      locale: {
        strings: {
          revert: "Cofnij",
          rotate: "Obróć",
          zoomIn: "Przybliż",
          zoomOut: "Oddal",
          flipHorizontal: "Odbij poziomo",
          aspectRatioSquare: "Kwadrat",
          aspectRatioLandscape: "Poziomy",
          aspectRatioPortrait: "Pionowy",
        },
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
  }, [uppy, onFileUploaded]);

  return (
    <UppyContextProvider uppy={uppy}>
      <section className="w-full">
        <Dashboard
          uppy={uppy}
          plugins={["ImageEditor", "Webcam", "GoogleDrive"]}
          height="100"
          width="100%"
          proudlyDisplayPoweredByUppy={true}
        />

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
