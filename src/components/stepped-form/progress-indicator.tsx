import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { checkoutSteps } from "@/pages/checkout";

export default function ProgressIndicator() {
  const { currentStep, goToStep, currentStepIndex } = useMultiStepForm();

  return (
    <div className="flex items-center w-full justify-center mb-10">
      <div className="w-full space-y-8 relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-12 h-0.5 w-full bg-gray-200">
          <motion.div
            className="h-full bg-black rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${
                (currentStepIndex / (checkoutSteps.length - 1)) * 100
              }%`,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
        <div className="flex justify-between w-full px-8">
          {/* Steps */}
          {checkoutSteps.map((step) => {
            const isCompleted = currentStepIndex > step.position - 1;
            const isCurrent = currentStepIndex === step.position - 1;

            return (
              <div
                key={step.position}
                className="relative z-10 flex flex-col items-center"
              >
                <motion.button
                  onClick={() => goToStep(step.position)}
                  className={`flex w-[70px] h-[70px] items-center justify-center rounded-[10px] border-[3px] border-gray-700 bg-white ${
                    isCompleted || isCurrent
                      ? "text-purple-700"
                      : "text-gray-400"
                  }`}
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.1 : 1,
                    transition: { type: "spring", stiffness: 500, damping: 30 },
                  }}
                >
                  {isCompleted ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </motion.button>
                <div
                  className={`mt-2 text-sm font-medium text-center ${
                    isCompleted || isCurrent ? "text-primary" : "text-gray-500"
                  }`}
                >
                  <div className="font-semibold">{step.label}</div>
                  {step.description && (
                    <div className="text-xs mt-1 text-gray-600 max-w-[150px]">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Screen reader progress */}
        <div className="sr-only" role="status" aria-live="polite">
          {`Step ${currentStep.position} of ${checkoutSteps.length}: ${currentStep.title}`}
        </div>
      </div>
    </div>
  );
}
