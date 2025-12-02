import NextButton from "@/components/stepped-form/next-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const StepContact = () => {
  const { getValues, setError } =
    useFormContext<z.infer<typeof CombinedCheckoutSchema>>();
  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    const { email } = getValues();

    if (email === "test@test.com") {
      setError("email", {
        type: "manual",
        message:
          "Email already exists in the database. Please use a different email.",
      });
      return;
    }

    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Twoje dane kontaktowe
        </h2>
        <p className="text-gray-600">
          Podaj swoje dane, abyśmy mogli się z Tobą skontaktować
        </p>
      </div>

      <Form {...useFormContext()}>
        <div className="space-y-4">
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="twoj@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imię</FormLabel>
                <FormControl>
                  <Input placeholder="Jan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwisko</FormLabel>
                <FormControl>
                  <Input placeholder="Kowalski" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>

      <div className="pt-4">
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default StepContact;
