import { useState, useEffect } from "react";
import bgImage from "../assets/background_1.jpg";
import "./home.css";
import { Footer } from "../components/Footer";
import { LegalModal } from "../components/LegalModal";
import { Upload, Settings, ShoppingCart, Truck, Camera } from "lucide-react";
import StepItem from "../components/StepItem";

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
          <div className="home-brand">
            tuus<span className="home-brand-imago">imago</span>
          </div>
          <h1 className="home-title">Zamień zdjęcie w obraz na płótnie</h1>
          <p className="home-subtitle">
            Zamień zdjęcie w obraz na płótnie w jakości muzealnej. Wybierz
            rozmiar, ramkę i styl. Przygotowane w kilka minut i dostarczone do
            domu.
          </p>

          <div className="home-buttons">
            <a href="/checkout" className="home-btn-primary">
              Rozpocznij <Camera size={24} style={{ marginLeft: "16px" }} />
            </a>
          </div>

          {/* How it works section */}
          <div className="home-steps">
            <h2 className="home-steps-title">Jak to działa</h2>
            <div className="home-steps-grid">
              <StepItem
                icon={Upload}
                title="Prześlij zdjęcie"
                description="Wybierz swoje ulubione zdjęcie z galerii lub zrób nowe."
              />
              <StepItem
                icon={Settings}
                title="Dostosuj obraz"
                description="Wybierz rozmiar, styl ramki i inne opcje personalizacji."
              />
              <StepItem
                icon={ShoppingCart}
                title="Złóż zamówienie"
                description="Potwierdź szczegóły i dokonaj bezpiecznej płatności."
              />
              <StepItem
                icon={Truck}
                title="Otrzymaj obraz"
                description="Twój obraz na płótnie zostanie dostarczony prosto do domu."
              />
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
