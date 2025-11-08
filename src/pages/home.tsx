import bgImage from "../assets/background_1.jpg";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
        color: "#111827",
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* Background image with subtle overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          filter: "saturate(0.9)",
        }}
      />

      {/* Centered hero section (full viewport) */}
      <section
        aria-label="Hero"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "3rem 1rem",
        }}
      >
        <div>
          <h1
            style={{
              color: "#111827",
              fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              margin: 0,
              fontWeight: 800,
            }}
          >
            Zamień swoje zdjęcie w obraz o jakości galerii
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#4b5563",
              maxWidth: 860,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Zamień każde ujęcie w obraz na płótnie w jakości muzealnej — z głęboką fakturą, ręcznym wykończeniem i wiernym odwzorowaniem kolorów. Profesjonalnie przygotowane w kilka minut.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
            <a
              href="/checkout/stepImage"
              style={{
                textDecoration: "none",
                padding: "10px 18px",
                borderRadius: 10,
                color: "#ffffff",
                background: "#6d28d9",
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              Rozpocznij za darmo
            </a>
            <a
              href="#learn-more"
              style={{
                textDecoration: "none",
                padding: "10px 18px",
                borderRadius: 10,
                color: "#374151",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </section>
    {/* Compliance/Legal footer bar */}
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(255,255,255,0.96)",
          borderTop: "1px solid #e5e7eb",
          backdropFilter: "saturate(120%) blur(6px)",
          zIndex: 10,
        }}
        aria-label="Legal and consent links"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0.5rem 1rem",
            color: "#4b5563",
            fontSize: 12,
          }}
        >
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/privacy" style={{ color: "#374151", textDecoration: "none" }}>Polityka prywatności</a>
            <a href="/terms" style={{ color: "#374151", textDecoration: "none" }}>Regulamin</a>
            <a href="/cookies" style={{ color: "#374151", textDecoration: "none" }}>Polityka plików cookie</a>
            <a href="/consents" style={{ color: "#374151", textDecoration: "none" }}>Zarządzanie zgodami</a>
            <a href="/returns" style={{ color: "#374151", textDecoration: "none" }}>Zwroty i reklamacje</a>
            <a href="/shipping" style={{ color: "#374151", textDecoration: "none" }}>Dostawa i płatności</a>
            <a href="/security" style={{ color: "#374151", textDecoration: "none" }}>Bezpieczeństwo i weryfikacja</a>
            <a href="/contact" style={{ color: "#374151", textDecoration: "none" }}>Kontakt</a>
          </div>
          <div style={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Tuus Imago. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </main>
  );
}
