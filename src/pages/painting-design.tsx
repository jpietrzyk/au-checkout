import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import TransloaditUploader from "@/components/uploaders/transloadit-uploader";
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

  return (
    <main className="h-screen overflow-hidden bg-gray-50">
      <section aria-label="Upload Image" className="h-screen flex flex-col">
        <div className="home-brand">
          tuus<span className="home-brand-imago">imago</span>
        </div>

        <div className="w-full flex-1 grid grid-cols-2">
          {/* Left column - Uppy Dashboard */}
          <div className="flex flex-col items-center justify-center">
            <TransloaditUploader onFileUploaded={handleFileUploaded} />

            {fileUrl && (
              <div className="p-4 flex justify-end">
                <Button
                  onClick={handleContinueToCheckout}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Kontynuuj do kasy
                </Button>
              </div>
            )}
          </div>

          {/* Right column - Empty */}
          <div />
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
