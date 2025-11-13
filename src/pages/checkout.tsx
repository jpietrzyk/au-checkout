import { useState, useEffect } from "react";
import { FormStep } from "@/types";
import StepImage from "./checkout/stepImage";
import StepContact from "./checkout/stepContact";
import StepAddress from "./checkout/stepAddress";
import {
  stepImageSchema,
  stepContactSchema,
  stepAddressSchema,
  stepPaymentSchema,
} from "@/validators/checkout-flow.validator";
import MultiStepForm from "@/components/stepped-form/stepped-form";
import StepPayment from "./checkout/stepPaymet";
import { CameraIcon, HomeIcon, UserIcon, CreditCardIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LegalModal } from "@/components/LegalModal";

// eslint-disable-next-line react-refresh/only-export-components
export const checkoutSteps: FormStep[] = [
  {
    title: "Krok 1: Projekt obrazu",
    component: <StepImage />,
    validationSchema: stepImageSchema,
    icon: CameraIcon,
    position: 1,
    fields: ["fileUrl"],
  },
  {
    title: "Krok 2: Twoje dane",
    component: <StepContact />,
    icon: UserIcon,
    position: 2,
    validationSchema: stepContactSchema,
    fields: ["email", "firstName", "lastName"],
  },
  {
    title: "Krok 3: Adres dostawy",
    component: <StepAddress />,
    icon: HomeIcon,
    position: 3,
    validationSchema: stepAddressSchema,
    fields: ["country", "city", "shippingAddress"],
  },
  {
    title: "Krok 4: Płatność",
    component: <StepPayment />,
    icon: CreditCardIcon,
    position: 4,
    validationSchema: stepPaymentSchema,
    fields: ["cardNumber", "cardholderName", "cvv"],
  },
];

export default function Checkout() {
  const [modalSlug, setModalSlug] = useState<string | null>(null);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash &&
        [
          "privacy",
          "terms",
          "cookies",
          "consents",
          "returns",
          "shipping",
          "security",
          "contact",
        ].includes(hash)
      ) {
        setModalSlug(hash);
      } else {
        setModalSlug(null);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const handleLinkClick = (slug: string) => {
    setModalSlug(slug);
    window.location.hash = slug;
  };

  const handleCloseModal = () => {
    setModalSlug(null);
    window.location.hash = "";
  };

  return (
    <div>
      <MultiStepForm steps={checkoutSteps} localStorageKey="checkout-form" />
      <Footer onLinkClick={handleLinkClick} />
      {modalSlug && (
        <LegalModal isOpen={true} onClose={handleCloseModal} slug={modalSlug} />
      )}
    </div>
  );
}
