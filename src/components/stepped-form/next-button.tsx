import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { Button } from "../ui/button";

const NextButton = ({
  onClick,
  type,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isLastStep } = useMultiStepForm();

  return (
    <Button
      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      type={type ?? "button"}
      onClick={onClick}
      {...rest}
    >
      {isLastStep ? "Wyślij zamówienie" : "Kontynuuj"}
    </Button>
  );
};

export default NextButton;
