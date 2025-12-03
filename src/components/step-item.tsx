import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { useToast } from "@/hooks/use-toast";
import { checkoutSteps } from "@/pages/checkout";

interface StepItemProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  title?: string;
  description?: string;
  position?: number;
  isActive?: boolean;
  // New props for progress indicator mode
  showProgress?: boolean;
  steps?: Array<{
    position: number;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}

const StepItem: React.FC<StepItemProps> = ({
  icon: Icon,
  title,
  description,
  position,
  isActive,
  showProgress = false,
  steps = checkoutSteps,
}) => {
  // Always call the hook, but handle the case where provider is not available
  let stepIsActive = isActive ?? false;
  let currentStepIndex = 0;
  let goToStep: ((position: number) => void) | null = null;

  try {
    const context = useMultiStepForm();
    currentStepIndex = context.currentStepIndex;
    goToStep = context.goToStep;
  } catch {
    // If MultiStepForm.Provider is not available (like on home page), context will be null
    currentStepIndex = -1;
  }

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

  // If no explicit isActive prop and we have a position, determine from current step
  if (
    isActive === undefined &&
    position !== undefined &&
    currentStepIndex >= 0
  ) {
    stepIsActive = position - 1 === currentStepIndex;
  }

  // Debug - let's log to see what's happening
  if (position !== undefined) {
    console.log(
      `[StepItem] ${title}: position=${position}, currentStepIndex=${currentStepIndex}, stepIsActive=${stepIsActive}, className should be: ${
        stepIsActive ? "active" : ""
      }`
    );
  }

  // Simple mode (original StepItem functionality)
  if (!showProgress) {
    if (!Icon) {
      console.error("StepItem: Icon is required when showProgress is false");
      return null;
    }
    return (
      <div className="flex flex-col items-center text-center relative w-[60%] min-w-[600px] max-w-[1200px]">
        <div
          className={`w-[70px] h-[70px] rounded-lg flex items-center justify-center mb-3 ${
            stepIsActive
              ? "border-[3px] border-green-500 bg-green-100 text-white"
              : "border-[3px] border-purple-600 bg-white text-purple-600"
          }`}
        >
          <Icon size={stepIsActive ? 32 : 24} />
        </div>
        <h3
          className={`text-base font-semibold mb-1 ${
            stepIsActive ? "text-green-700" : "text-gray-700"
          }`}
        >
          {title}
        </h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    );
  }

  // Progress indicator mode (enhanced functionality)
  if (!goToStep) {
    console.warn("StepItem: goToStep function not available in progress mode");
    return null;
  }

  return (
    <div className="w-full flex justify-center mb-10">
      <div className="relative w-[60%] min-w-[600px] max-w-[1200px]">
        {/* Container for flex layout */}
        <div className="flex justify-between w-full px-8 relative z-10">
          {/* Progress Line - always visible, extends from first to current step */}
          <motion.div
            className="absolute top-[28px] h-0.5 bg-black z-0 rounded-full"
            initial={false}
            style={
              {
                left: `calc(2rem + 25px)`,
                width: `calc(${
                  currentStepIndex === 0
                    ? 0
                    : (currentStepIndex / (steps.length - 1)) * 100
                }% * (100% - 4rem - 50px) / 100)`,
              } as React.CSSProperties
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
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
                  className={`flex w-[50px] h-[50px] items-center justify-center rounded-full border-2 ${
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
                    <Check className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
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

export default StepItem;
