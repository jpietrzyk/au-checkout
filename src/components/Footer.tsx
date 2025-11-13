interface FooterProps {
  copyright?: string;
  onLinkClick?: (slug: string) => void;
}

export function Footer({
  copyright = `© ${new Date().getFullYear()} Tuus Imago. Wszelkie prawa zastrzeżone.`,
  onLinkClick,
}: FooterProps) {
  return (
    <footer className="home-footer" aria-label="Legal and consent links">
      <div className="home-footer-content">
        <div className="home-footer-links">
          {onLinkClick ? (
            <>
              <button onClick={() => onLinkClick("privacy")}>
                Polityka prywatności
              </button>
              <button onClick={() => onLinkClick("terms")}>Regulamin</button>
              <button onClick={() => onLinkClick("cookies")}>
                Polityka plików cookie
              </button>
              <button onClick={() => onLinkClick("consents")}>
                Zarządzanie zgodami
              </button>
              <button onClick={() => onLinkClick("returns")}>
                Zwroty i reklamacje
              </button>
              <button onClick={() => onLinkClick("shipping")}>
                Dostawa i płatności
              </button>
              <button onClick={() => onLinkClick("security")}>
                Bezpieczeństwo i weryfikacja
              </button>
              <button onClick={() => onLinkClick("contact")}>Kontakt</button>
            </>
          ) : (
            <>
              <a href="/privacy">Polityka prywatności</a>
              <a href="/terms">Regulamin</a>
              <a href="/cookies">Polityka plików cookie</a>
              <a href="/consents">Zarządzanie zgodami</a>
              <a href="/returns">Zwroty i reklamacje</a>
              <a href="/shipping">Dostawa i płatności</a>
              <a href="/security">Bezpieczeństwo i weryfikacja</a>
              <a href="/contact">Kontakt</a>
            </>
          )}
        </div>
        <div className="home-footer-copyright">{copyright}</div>
      </div>
    </footer>
  );
}
