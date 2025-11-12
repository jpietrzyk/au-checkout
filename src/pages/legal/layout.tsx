import React from "react";

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

const pStyle: React.CSSProperties = {
  marginTop: 12,
  lineHeight: 1.75,
  color: "#374151",
  fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
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

export { pStyle };

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
    </main>
  );
}
