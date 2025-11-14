import { Button } from "@/components/ui/button";

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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("privacy")}
              >
                Polityka prywatności
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("terms")}
              >
                Regulamin
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("cookies")}
              >
                Polityka plików cookie
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("consents")}
              >
                Zarządzanie zgodami
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("returns")}
              >
                Zwroty i reklamacje
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("shipping")}
              >
                Dostawa i płatności
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("security")}
              >
                Bezpieczeństwo i weryfikacja
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLinkClick("contact")}
              >
                Kontakt
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <a href="/privacy">Polityka prywatności</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="/terms">Regulamin</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="/cookies">Polityka plików cookie</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="/consents">Zarządzanie zgodami</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="/returns">Zwroty i reklamacje</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="/shipping">Dostawa i płatności</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="/security">Bezpieczeństwo i weryfikacja</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="/contact">Kontakt</a>
              </Button>
            </>
          )}
        </div>
        <div className="home-footer-copyright">{copyright}</div>
      </div>
    </footer>
  );
}
