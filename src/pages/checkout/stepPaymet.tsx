import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import ErrorMessage from "@/components/ui/error-message";
import NextButton from "@/components/stepped-form/next-button";

const StepPayment = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const handleStepSubmit = async () => {
    return;
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <Input {...register("cardNumber")} placeholder="Numer karty" />
        <ErrorMessage message={errors.cardNumber?.message} />
      </div>
      <div>
        <Input {...register("cardholderName")} placeholder="Wydawca" />
        <ErrorMessage message={errors.cardholderName?.message} />
      </div>
      <div>
        <Input {...register("cvv")} placeholder="CVV" />
        <ErrorMessage message={errors.cvv?.message} />
      </div>
      <NextButton type="submit" onClick={handleStepSubmit} />
    </div>
  );
};

export default StepPayment;
