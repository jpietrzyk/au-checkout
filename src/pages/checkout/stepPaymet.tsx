import { useFormContext } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import NextButton from "@/components/stepped-form/next-button";

const StepPayment = () => {
  const handleStepSubmit = async () => {
    return;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Dane płatności
        </h2>
        <p className="text-gray-600">Podaj dane swojej karty płatniczej</p>
      </div>

      <Form {...useFormContext()}>
        <div className="space-y-4">
          <FormField
            name="cardNumber"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 7h20M2 12h20M2 17h20" />
                    </svg>
                    <Input className="pl-10" placeholder="Numer karty (1234 5678 9012 3456)" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="cardholderName"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A8 8 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <Input className="pl-10" placeholder="Właściciel (Jan Kowalski)" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="cvv"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3m-6 0v6m6-6v6" />
                    </svg>
                    <Input className="pl-10" placeholder="CVV (123)" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>

      <div className="pt-4">
        <NextButton type="submit" onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default StepPayment;
