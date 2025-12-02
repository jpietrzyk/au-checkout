import NextButton from "@/components/stepped-form/next-button";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import { useFormContext } from "react-hook-form";
import { useCallback } from "react";
import { z } from "zod";
import TransloaditUploader from "@/components/uploaders/transloadit-uploader";
import StepItem from "@/components/StepItem";
import { checkoutSteps } from "../checkout";

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

  // const handleFileApply = (event: { successEntries?: OutputFileEntry[] }) => {
  //   const filesToAdd = event?.successEntries ?? [];
  //   if (filesToAdd.length > 0) {
  //     const fileUrl = filesToAdd[0]?.cdnUrl;
  //     if (fileUrl) {
  //       console.log("Uploaded file URL:", fileUrl);
  //       setValue("fileUrl", fileUrl);
  //     }
  //   }
  // };

  return (
    <div className="flex flex-col gap-3">
      <div className="home-steps">
        <h2 className="home-steps-title">Proces zamówienia</h2>
        <div className="home-steps-grid">
          {checkoutSteps.map((step) => (
            <StepItem
              key={step.position}
              icon={step.icon}
              title={step.label}
              description={step.description}
            />
          ))}
        </div>
      </div>
      <div className="hidden">
        <Input
          {...register("fileUrl")}
          placeholder="Pliki URL"
          value={getValues().fileUrl ? getValues().fileUrl : undefined}
          readOnly
        />
        <ErrorMessage message={errors.fileUrl?.message} />
      </div>
      <div className="uc-light w-full">
        <TransloaditUploader onFileUploaded={handleFileUploaded} />
      </div>
      <NextButton onClick={handleStepSubmit} />
    </div>
  );
};

export default StepImage;
