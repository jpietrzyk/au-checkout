interface FooterProps {
  copyright?: string;
}

export function Footer({
  copyright = `© ${new Date().getFullYear()} Tuus Imago. Wszelkie prawa zastrzeżone.`,
}: FooterProps) {
  return (
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
        <div className="home-footer-copyright">{copyright}</div>
      </div>
    </footer>
  );
}
