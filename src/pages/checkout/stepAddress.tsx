import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import ErrorMessage from "@/components/ui/error-message";
import NextButton from "@/components/stepped-form/next-button";

const StepAddress = () => {
  const {
    register,
    // trigger,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    nextStep();
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <Input {...register("country")} placeholder="Kraj" />
        <ErrorMessage message={errors.country?.message} />
      </div>
      <div>
        <Input {...register("city")} placeholder="Miasto" />
        <ErrorMessage message={errors.city?.message} />
      </div>
      <div>
        <Input {...register("shippingAddress")} placeholder="Adres wysyłki" />
        <ErrorMessage message={errors.shippingAddress?.message} />
      </div>
      <NextButton onClick={handleStepSubmit} />
    </div>
  );
};

export default StepAddress;
