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
    <div className="flex flex-col flex-1 min-h-0 gap-4">
      <div>
        <Input
          {...register("fileUrl")}
          placeholder="Pliki URL"
          readOnly
          type="hidden"
        />
        <ErrorMessage message={errors.fileUrl?.message} />
      </div>

      <div className="flex-1 min-h-0 w-full bg-white/50 overflow-hidden rounded-md">
        <TransloaditUploader onFileUploaded={handleFileUploaded} />
      </div>

      <div className="pt-2">
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default StepImage;
