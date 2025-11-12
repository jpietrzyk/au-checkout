import React from "react";
import "../home.css";

const baseStyle: React.CSSProperties = {
  minHeight: "calc(100vh - 56px)",
  padding: "4rem 1.25rem 6rem",
  maxWidth: 920,
  margin: "0 auto",
  color: "#111827",
};

const titleStyle: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
  fontWeight: 800,
  margin: 0,
};

const backLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  marginTop: 24,
  padding: "10px 16px",
  borderRadius: 10,
  textDecoration: "none",
  color: "#374151",
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  fontWeight: 600,
};

export function Layout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main style={{ minHeight: "100vh" }}>
      <section style={baseStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <div style={{ marginTop: 16 }}>{children}</div>
        <div>
          <a href="/" style={backLinkStyle}>
            Wróć na stronę główną
          </a>
        </div>
      </section>
      <footer className="home-footer" aria-label="Legal and consent links">
        <div className="home-footer-content">
          <div className="home-footer-links">
            <a href="/privacy">Polityka prywatności</a>
            <a href="/terms">Regulamin</a>
            <a href="/cookies">Polityka plików cookie</a>
            <a href="/consents">Zarządzanie zgodami</a>
            <a href="/returns">Zwroty i reklamacje</a>
            <a href="/shipping">Dostawa i płatności</a>
            <a href="/security">Bezpieczeństwo i weryfikacja</a>
            <a href="/contact">Kontakt</a>
          </div>
          <div className="home-footer-copyright">
            © {new Date().getFullYear()} Tuus Imago. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </main>
  );
}
