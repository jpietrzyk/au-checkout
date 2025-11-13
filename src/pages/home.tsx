import { useState, useEffect } from "react";
import bgImage from "../assets/background_1.jpg";
import "./home.css";
import { Footer } from "../components/Footer";
import { LegalModal } from "../components/LegalModal";

export default function Home() {
  const [modalSlug, setModalSlug] = useState<string | null>(null);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash &&
        [
          "privacy",
          "terms",
          "cookies",
          "consents",
          "returns",
          "shipping",
          "security",
          "contact",
        ].includes(hash)
      ) {
        setModalSlug(hash);
      } else {
        setModalSlug(null);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

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
      {/* Background image with subtle overlay */}
      <div
        className="home-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Centered hero section (full viewport) */}
      <section aria-label="Hero" className="home-hero">
        <div>
          <h1 className="home-title">
            Zamień swoje zdjęcie w obraz o jakości galerii
          </h1>
          <p className="home-subtitle">
            Zamień każde ujęcie w obraz na płótnie w jakości muzealnej — z
            głęboką fakturą, ręcznym wykończeniem i wiernym odwzorowaniem
            kolorów. Profesjonalnie przygotowane w kilka minut.
          </p>

          <div className="home-buttons">
            <a href="/checkout/stepImage" className="home-btn-primary">
              Rozpocznij za darmo
            </a>
            <a href="#learn-more" className="home-btn-secondary">
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </section>
      {/* Compliance/Legal footer bar */}
      <Footer
        copyright={`© ${new Date().getFullYear()} Tuus Imago. Wszelkie prawa zastrzeżone. NIP: 6811882876`}
        onLinkClick={handleLinkClick}
      />
      {modalSlug && (
        <LegalModal isOpen={true} onClose={handleCloseModal} slug={modalSlug} />
      )}
    </main>
  );
}
