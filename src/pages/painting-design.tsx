import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import { SplitUploader } from "@/components/uploaders/split-uploader";
import { Footer } from "@/components/Footer";
import { LegalModal } from "@/components/legal-modal";
import { Button } from "@/components/ui/button";

export default function UploadImage() {
  const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useLocalStorage<string>({
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

  const handleContinueToCheckout = () => {
    if (!fileUrl || fileUrl.trim() === "") {
      alert("Proszę przesłać zdjęcie przed kontynuowaniem.");
      return;
    }
    navigate("/checkout");
  };

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

        {fileUrl && (
          <div className="absolute bottom-24 right-16 z-10">
            <Button
              onClick={handleContinueToCheckout}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Kontynuuj do kasy
            </Button>
          </div>
        )}

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
