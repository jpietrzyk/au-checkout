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
              <FormItem className="flex items-center space-x-3">
                <FormLabel className="w-24 text-right">Numer karty:</FormLabel>
                <div className="flex-1">
                  <FormControl>
                    <Input placeholder="1234 5678 9012 3456" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            name="cardholderName"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3">
                <FormLabel className="w-24 text-right">Właściciel:</FormLabel>
                <div className="flex-1">
                  <FormControl>
                    <Input placeholder="Jan Kowalski" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            name="cvv"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3">
                <FormLabel className="w-24 text-right">CVV:</FormLabel>
                <div className="flex-1">
                  <FormControl>
                    <Input placeholder="123" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
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
