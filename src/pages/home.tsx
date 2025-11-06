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
        color: "#f8fafc",
        backgroundColor: "#0b1220",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.65)",
          zIndex: 0,
        }}
      />

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
          padding: "0 1rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              fontWeight: 800,
              textShadow: "0 4px 24px rgba(0,0,0,0.45)",
            }}
          >
            Tuus imago
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              color: "#e2e8f0",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
              maxWidth: 960,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Prepare your image for stunning canvas prints. Simple. Guided. Beautiful.
          </p>
        </div>
      </section>
    </main>
  );
}
