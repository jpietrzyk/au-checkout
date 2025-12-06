import { useState, useCallback } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { SplitUploader } from "@/components/uploaders/split-uploader";
import { Footer } from "@/components/Footer";
import { LegalModal } from "@/components/legal-modal";

export default function UploadImage() {
  const [, setFileUrl] = useLocalStorage<string>({
    key: "uploaded-image-url",
    defaultValue: "",
  });
  const [modalSlug, setModalSlug] = useState<string | null>(null);

  const handleFileUploaded = useCallback(
    (url: string) => {
      setFileUrl(url);
      console.log("File uploaded:", url);
    },
    [setFileUrl]
  );

  const handleLinkClick = (slug: string) => {
    setModalSlug(slug);
    window.location.hash = slug;
  };

  const handleCloseModal = () => {
    setModalSlug(null);
    window.location.hash = "";
  };

  const uploader = SplitUploader({ onFileUploaded: handleFileUploaded });
  const { Controls, Preview } = uploader;

  return (
    <main className="home-main">
      <section aria-label="Upload Image" className="home-hero">
        <div className="home-brand">
          tuus<span className="home-brand-imago">imago</span>
        </div>

        <div className="grid grid-cols-2 h-full w-full">
          {/* Left column: Upload controls */}
          <div className="relative p-16">
            <div className="absolute inset-16">
              <Controls />
            </div>
          </div>

          {/* Right column: Image preview */}
          <div className="bg-gray-100/50 p-16">
            <Preview />
          </div>
        </div>

        <Footer onLinkClick={handleLinkClick} />
        {modalSlug && (
          <LegalModal
            isOpen={true}
            onClose={handleCloseModal}
            slug={modalSlug}
          />
        )}
      </section>
    </main>
  );
}
