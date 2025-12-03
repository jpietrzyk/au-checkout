import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { useToast } from "@/hooks/use-toast";
import { checkoutSteps } from "@/pages/checkout";

interface ProgressIndicatorProps {
  steps?: Array<{
    position: number;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps = checkoutSteps,
}) => {
  const context = useMultiStepForm();
  const currentStepIndex = context.currentStepIndex;
  const goToStep = context.goToStep;

  const { toast } = useToast();
  const [shakenStep, setShakenStep] = React.useState<number | null>(null);
  const shakeTimeoutRef = React.useRef<number | null>(null);
  const [ariaMessage, setAriaMessage] = React.useState<string | null>(null);
  const ariaTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (shakeTimeoutRef.current) {
        window.clearTimeout(shakeTimeoutRef.current);
      }
      if (ariaTimeoutRef.current) {
        window.clearTimeout(ariaTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-8 mb-6">
      <div className="relative w-full max-w-[1200px] min-w-[900px] px-4">
        {/* Line below steps */}
        <div className="absolute top-[40px] left-0 right-0 h-0.5 bg-gray-300 z-0" />

        {/* Container for flex layout */}
        <div className="flex justify-between w-full px-4 sm:px-8 relative z-10">
          {/* Steps */}
          {steps.map((step) => {
            const isCompleted = currentStepIndex > step.position - 1;
            const isCurrent = currentStepIndex === step.position - 1;
            const canGo = isCompleted || isCurrent;

            return (
              <div
                key={step.position}
                className="relative z-10 flex flex-col items-center"
              >
                <motion.button
                  onClick={() => {
                    if (canGo) {
                      goToStep(step.position - 1);
                    } else {
                      // show toast and shake for affordance
                      const message =
                        "Dokończ wcześniejsze kroki przed przejściem dalej.";
                      toast({
                        title: "Wypełnij poprzedni krok",
                        description: message,
                      });
                      // ARIA announce for screen readers
                      setAriaMessage(message);
                      if (ariaTimeoutRef.current) {
                        window.clearTimeout(ariaTimeoutRef.current);
                      }
                      ariaTimeoutRef.current = window.setTimeout(() => {
                        setAriaMessage(null);
                        ariaTimeoutRef.current = null;
                      }, 3500) as unknown as number;

                      setShakenStep(step.position);
                      if (shakeTimeoutRef.current) {
                        window.clearTimeout(shakeTimeoutRef.current);
                      }
                      shakeTimeoutRef.current = window.setTimeout(() => {
                        setShakenStep(null);
                        shakeTimeoutRef.current = null;
                      }, 600) as unknown as number;
                    }
                  }}
                  aria-disabled={!canGo}
                  tabIndex={canGo ? 0 : -1}
                  aria-current={isCurrent ? "step" : undefined}
                  // NOTE: do not use native `disabled` here because disabled buttons
                  // don't fire click events and many browsers don't show `title` tooltips
                  // for disabled elements. We emulate disabled state via
                  // `aria-disabled` and by preventing action in the handler, so
                  // clicks still show the toast and shake animation.
                  title={
                    !canGo
                      ? "Dokończ wcześniejsze kroki przed przejściem dalej"
                      : undefined
                  }
                  className={`flex w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[80px] md:h-[80px] items-center justify-center rounded-full border-2 ${
                    isCurrent
                      ? "border-green-500 bg-green-100"
                      : isCompleted
                      ? "border-green-500 bg-white"
                      : "border-gray-300 bg-white"
                  } mb-2 ${
                    isCompleted || isCurrent
                      ? "text-green-700 cursor-pointer"
                      : "text-gray-400 cursor-not-allowed opacity-50"
                  }`}
                  initial={false}
                  animate={
                    shakenStep === step.position
                      ? {
                          x: [0, -8, 8, -6, 6, 0],
                          scale: isCurrent ? 1.05 : 1,
                        }
                      : {
                          scale: isCurrent ? 1.05 : 1,
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          },
                        }
                  }
                >
                  {isCompleted ? (
                    <Check className="h-10 w-10" />
                  ) : (
                    <step.icon className="h-10 w-10" />
                  )}
                </motion.button>
                <div
                  className={`mt-2 text-base font-medium text-center ${
                    isCompleted || isCurrent ? "text-primary" : "text-gray-500"
                  }`}
                >
                  <div className="font-semibold text-white text-[1rem]">
                    {step.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Screen reader progress */}
        <div className="sr-only" role="status" aria-live="polite">
          {`Step ${steps[currentStepIndex]?.position} of ${steps.length}: ${steps[currentStepIndex]?.label}`}
        </div>
        <div className="sr-only" role="status" aria-live="polite">
          {ariaMessage}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
