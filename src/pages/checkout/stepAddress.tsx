import { useFormContext } from "react-hook-form";
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
import NextButton from "@/components/stepped-form/next-button";

const StepAddress = () => {
  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Adres dostawy</h2>
        <p className="text-gray-600">
          Podaj adres, na który mamy wysłać Twoje zamówienie
        </p>
      </div>

      <Form {...useFormContext()}>
        <div className="space-y-4">
          <FormField
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kraj</FormLabel>
                <FormControl>
                  <Input placeholder="Polska" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Miasto</FormLabel>
                <FormControl>
                  <Input placeholder="Warszawa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="shippingAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adres wysyłki</FormLabel>
                <FormControl>
                  <Input placeholder="ul. Przykładowa 123, 00-001" {...field} />
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

export default StepAddress;
