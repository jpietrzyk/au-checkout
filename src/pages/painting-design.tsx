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
    <main className="bg-gray-50">
      <section>
        <div className="home-brand">
          tuus<span className="home-brand-imago">imago</span>
        </div>

        <div className="grid grid-cols-2 min-h-screen">
          {/* Left column - Uppy Dashboard */}
          <div className="relative p-16">
            <div className="absolute inset-16">
              <TransloaditUploader onFileUploaded={handleFileUploaded} />

              {fileUrl && (
                <div className="mt-4">
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
          </div>

          {/* Right column - Image Preview */}
          <div className="bg-gray-100/50 p-16 flex items-center justify-center">
            {fileUrl ? (
              <div className="max-w-full max-h-full">
                <img
                  src={fileUrl}
                  alt="Uploaded preview"
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
