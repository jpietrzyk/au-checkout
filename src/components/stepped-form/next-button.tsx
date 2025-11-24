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
      className="text-white bg-[#6d28d9] hover:bg-[#5b21b6] transition-colors w-full py-6 font-bold text-xl rounded-lg"
      type={type ?? "button"}
      onClick={onClick}
      {...rest}
    >
      {isLastStep ? "Wyślij" : "Kontynuuj"}
    </Button>
  );
};

export default NextButton;
