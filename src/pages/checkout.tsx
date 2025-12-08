import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import { FormStep } from "@/types";
import StepContact from "./checkout/stepContact";
import StepAddress from "./checkout/stepAddress";
import {
  stepContactSchema,
  stepAddressSchema,
  stepPaymentSchema,
} from "@/validators/checkout-flow.validator";
import MultiStepForm from "@/components/stepped-form/stepped-form";
import StepPayment from "./checkout/stepPaymet";
import { HomeIcon, UserIcon, CreditCardIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LegalModal } from "@/components/legal-modal";

// eslint-disable-next-line react-refresh/only-export-components
export const checkoutSteps: FormStep[] = [
  {
    title: "Krok 1: Twoje dane",
    component: <StepContact />,
    icon: UserIcon,
    position: 1,
    validationSchema: stepContactSchema,
    fields: ["email", "firstName", "lastName"],
    label: "Twoje dane",
    description: "Podaj dane kontaktowe.",
  },
  {
    title: "Krok 2: Adres dostawy",
    component: <StepAddress />,
    icon: HomeIcon,
    position: 2,
    validationSchema: stepAddressSchema,
    fields: ["country", "city", "shippingAddress"],
    label: "Adres dostawy",
    description: "Wprowadź adres dostawy.",
  },
  {
    title: "Krok 3: Płatność",
    component: <StepPayment />,
    icon: CreditCardIcon,
    position: 3,
    validationSchema: stepPaymentSchema,
    fields: ["cardNumber", "cardholderName", "cvv"],
    label: "Płatność",
    description: "Dokonaj płatności.",
  },
];

export default function Checkout() {
  const [modalSlug, setModalSlug] = useState<string | null>(null);
  const location = useLocation();
  const [uploadedImageUrl, setUploadedImageUrl] = useLocalStorage<string>({
    key: "uploaded-image-url",
    defaultValue: "",
  });

  const hasRama =
    typeof window !== "undefined"
      ? window.localStorage.getItem("has-rama") === "true"
      : false;

  // On mount, check for ?image= param and save to localStorage if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const imageParam = params.get("image");
    if (imageParam) {
      setUploadedImageUrl(imageParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          "dane-kontaktowe",
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
    <main className="home-main">
      {/* No background image on checkout page */}
      <section aria-label="Hero" className="home-hero">
        <div className="home-brand">
          tuus<span className="home-brand-imago">imago</span>
        </div>

        {/* Split grid layout: left = form, right = empty */}
        <div
          className="grid h-full w-full"
          style={{ gridTemplateColumns: "33% 67%", minHeight: "100vh" }}
        >
          {/* Left column: Checkout step form */}
          <div className="relative p-16 flex flex-col justify-center">
            <MultiStepForm
              steps={checkoutSteps}
              localStorageKey="checkout-form"
              showProgress={true}
            />
          </div>
          {/* Right column: Image preview if available */}
          <div className="bg-gray-100/50 p-4 h-full flex items-center justify-center">
            {uploadedImageUrl ? (
              <img
                src={uploadedImageUrl}
                alt="Podgląd przesłanego zdjęcia"
                className={
                  `max-w-full max-h-[80vh] rounded-lg shadow-lg ` +
                  (hasRama
                    ? "border-8 border-yellow-400 drop-shadow-xl outline outline-4 outline-yellow-700"
                    : "border border-gray-300")
                }
              />
            ) : null}
          </div>
        </div>
        <Footer onLinkClick={handleLinkClick} />
        {modalSlug && (
          <LegalModal
            isOpen={true}
            onClose={handleCloseModal}
            slug={modalSlug}
          />
        )}
      </section>
    </main>
  );
}
