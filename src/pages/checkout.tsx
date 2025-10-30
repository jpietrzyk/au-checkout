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
  return (
    <div>
      <MultiStepForm steps={checkoutSteps} localStorageKey="checkout-form" />
    </div>
  );
}
