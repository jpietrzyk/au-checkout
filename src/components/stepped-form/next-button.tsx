import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { Button } from "@/components/ui/button";

const NextButton = ({
  onClick,
  type,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isLastStep } = useMultiStepForm();

  return (
    <Button
      className="w-auto min-w-[200px] bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
      type={type ?? "button"}
      onClick={onClick}
      {...rest}
    >
      {isLastStep ? "Wyślij zamówienie" : "Kontynuuj"}
    </Button>
  );
};

export default NextButton;
