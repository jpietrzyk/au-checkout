import { useFormContext } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
                <FormControl>
                  <div className="relative">
                    <svg
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4" />
                    </svg>
                    <Input className="pl-10" placeholder="Kraj" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <svg
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <Input className="pl-10" placeholder="Miasto" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="shippingAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <svg
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V4H2v16h5m10 0l-4-4m4 4l-4 4m4-4H7" />
                    </svg>
                    <Input className="pl-10" placeholder="Adres (ul. Przykładowa 123, 00-001)" {...field} />
                  </div>
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
