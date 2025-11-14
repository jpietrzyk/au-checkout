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

          {/* How it works section */}
          <div className="home-steps">
            <h2 className="home-steps-title">Jak to działa</h2>
            <div className="home-steps-grid">
              <div className="home-step">
                <div className="home-step-number">1</div>
                <h3 className="home-step-title">Prześlij zdjęcie</h3>
                <p className="home-step-description">
                  Wybierz swoje ulubione zdjęcie z galerii lub zrób nowe.
                </p>
              </div>
              <div className="home-step">
                <div className="home-step-number">2</div>
                <h3 className="home-step-title">Dostosuj obraz</h3>
                <p className="home-step-description">
                  Wybierz rozmiar, styl ramki i inne opcje personalizacji.
                </p>
              </div>
              <div className="home-step">
                <div className="home-step-number">3</div>
                <h3 className="home-step-title">Złóż zamówienie</h3>
                <p className="home-step-description">
                  Potwierdź szczegóły i dokonaj bezpiecznej płatności.
                </p>
              </div>
              <div className="home-step">
                <div className="home-step-number">4</div>
                <h3 className="home-step-title">Otrzymaj obraz</h3>
                <p className="home-step-description">
                  Twój obraz na płótnie zostanie dostarczony prosto do domu.
                </p>
              </div>
            </div>
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
