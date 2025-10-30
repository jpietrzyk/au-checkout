import NextButton from "@/components/stepped-form/next-button";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
// import UploadcareUploader from "@/components/uploaders/uploadcare-uploader";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
// import { OutputFileEntry } from "@uploadcare/react-uploader";
import TransloaditUploader from "@/components/uploaders/transloadit-uploader";

const StepImage = () => {
  const {
    register,
    getValues,
    setError,
    // setValue,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    const { fileUrl } = getValues();

    if (fileUrl === "xxx") {
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
      <div>
        <Input
          {...register("fileUrl")}
          placeholder="Pliki URL"
          value={getValues().fileUrl ? getValues().fileUrl : undefined}
          readOnly
        />
        <ErrorMessage message={errors.fileUrl?.message} />
      </div>
      <div className="uc-light">
        <TransloaditUploader />
        {/* <UploadcareUploader onDoneClick={handleFileApply} /> */}
      </div>
      <NextButton onClick={handleStepSubmit} />
    </div>
  );
};

export default StepImage;
