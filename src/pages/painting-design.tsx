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
    <main className="home-main">
      <div
        className="home-bg"
        style={{
          backgroundImage: `url('/src/assets/background_1.jpg')`,
        }}
      />
      <section aria-label="Upload Image" className="home-hero">
        <div className="home-brand">
          tuus<span className="home-brand-imago">imago</span>
        </div>

        <div className="w-full flex flex-col items-center justify-center px-4 min-h-screen">
          <div className="w-[80%] max-w-[1200px] backdrop-blur-sm rounded-xl p-4 sm:p-6 flex flex-col gap-4 min-h-[600px]">
            <div className="flex-1 min-h-0 w-full bg-white/50 overflow-hidden rounded-md">
              <TransloaditUploader onFileUploaded={handleFileUploaded} />
            </div>

            {fileUrl && (
              <div className="pt-2 flex justify-end">
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
