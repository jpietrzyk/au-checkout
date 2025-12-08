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

  return (
    <main className="home-main">
      <section
        aria-label="Upload Image"
        className="home-hero painting-design-hero"
      >
        <div className="home-brand">
          tuus<span className="home-brand-imago">imago</span>
        </div>

        {/* Główny uploader obrazu */}
        <SplitUploader onFileUploaded={handleFileUploaded} />

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
