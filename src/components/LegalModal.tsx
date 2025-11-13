import React from "react";
import { Modal } from "./ui/modal";
import { PrivacyContent } from "./legal/PrivacyContent";
import { TermsContent } from "./legal/TermsContent";
import { CookiesContent } from "./legal/CookiesContent";
import { ConsentsContent } from "./legal/ConsentsContent";
import { ReturnsContent } from "./legal/ReturnsContent";
import { ShippingContent } from "./legal/ShippingContent";
import { SecurityContent } from "./legal/SecurityContent";
import { ContactContent } from "./legal/ContactContent";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  slug: string;
}

const legalComponents: Record<string, React.ComponentType> = {
  privacy: PrivacyContent,
  terms: TermsContent,
  cookies: CookiesContent,
  consents: ConsentsContent,
  returns: ReturnsContent,
  shipping: ShippingContent,
  security: SecurityContent,
  contact: ContactContent,
};

const titles: Record<string, string> = {
  privacy: "Polityka prywatności",
  terms: "Regulamin",
  cookies: "Polityka plików cookie",
  consents: "Zarządzanie zgodami",
  returns: "Zwroty i reklamacje",
  shipping: "Dostawa i płatności",
  security: "Bezpieczeństwo i weryfikacja",
  contact: "Kontakt",
};

export function LegalModal({ isOpen, onClose, slug }: LegalModalProps) {
  const Component = legalComponents[slug];
  const title = titles[slug];

  if (!Component || !title) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <Component />
    </Modal>
  );
}
