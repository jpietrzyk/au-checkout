import NextButton from "@/components/stepped-form/next-button";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import { useFormContext } from "react-hook-form";
import { useCallback } from "react";
import { z } from "zod";
import TransloaditUploader from "@/components/uploaders/transloadit-uploader";

const StepImage = () => {
  const {
    register,
    getValues,
    setError,
    setValue,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleFileUploaded = useCallback(
    (fileUrl: string) => {
      setValue("fileUrl", fileUrl);
      console.log("File uploaded and set in form:", fileUrl);
    },
    [setValue]
  );

  const handleStepSubmit = async () => {
    const { fileUrl } = getValues();

    if (!fileUrl || fileUrl.trim() === "") {
      setError("fileUrl", {
        type: "manual",
        message: "Nie wybrałeś obrazu. Dodaj obraz, aby kontynuować.",
      });
      return;
    }

    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="hidden">
        <Input
          {...register("fileUrl")}
          placeholder="Pliki URL"
          value={getValues().fileUrl ? getValues().fileUrl : undefined}
          readOnly
        />
        <ErrorMessage message={errors.fileUrl?.message} />
      </div>

      <div className="uc-light w-full bg-white/50 rounded-xl p-4">
        <TransloaditUploader onFileUploaded={handleFileUploaded} />
      </div>

      <div className="pt-4">
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default StepImage;
