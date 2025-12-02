import React from "react";
import { Modal } from "@/components/ui/modal";
import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { TermsContent } from "@/components/legal/TermsContent";
import { ConsentsContent } from "@/components/legal/ConsentsContent";
import { SecurityContent } from "@/components/legal/SecurityContent";
import { ContactContent } from "@/components/legal/ContactContent";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  slug: string;
}

const legalComponents: Record<string, React.ComponentType> = {
  terms: TermsContent,
  cookies: PrivacyContent,
  consents: ConsentsContent,
  security: SecurityContent,
  contact: ContactContent,
};

const titles: Record<string, string> = {
  terms: "Regulamin sklepu internetowego Tuus Imago",
  cookies: "Polityka prywatności",
  consents: "Zarządzaj swoimi zgodami",
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
      <div className="legal-content">
        <Component />
      </div>
    </Modal>
  );
}
