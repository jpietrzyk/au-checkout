import bgImage from "../assets/background_1.jpg";
import "./home.css";

export default function Home() {
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
      <footer className="home-footer" aria-label="Legal and consent links">
        <div className="home-footer-content">
          <div className="home-footer-links">
            <a
              href="/privacy"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Polityka prywatności
            </a>
            <a
              href="/terms"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Regulamin
            </a>
            <a
              href="/cookies"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Polityka plików cookie
            </a>
            <a
              href="/consents"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Zarządzanie zgodami
            </a>
            <a
              href="/returns"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Zwroty i reklamacje
            </a>
            <a
              href="/shipping"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Dostawa i płatności
            </a>
            <a
              href="/security"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Bezpieczeństwo i weryfikacja
            </a>
            <a
              href="/contact"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Kontakt
            </a>
          </div>
          <div className="home-footer-copyright">
            © {new Date().getFullYear()} Tuus Imago. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </main>
  );
}
