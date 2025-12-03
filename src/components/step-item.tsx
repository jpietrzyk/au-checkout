import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
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
      <div className="home-step">
        <div className={`home-step-number ${stepIsActive ? "active" : ""}`}>
          <Icon size={stepIsActive ? 32 : 24} />
        </div>
        <h3 className={`home-step-title ${stepIsActive ? "active" : ""}`}>
          {title}
        </h3>
        {description && <p className="home-step-description">{description}</p>}
      </div>
    );
  }

  // Progress indicator mode (enhanced functionality)
  if (!goToStep) {
    console.warn("StepItem: goToStep function not available in progress mode");
    return null;
  }

  return (
    <div className="w-full min-w-[80%] justify-center mb-10">
      <div className="w-full space-y-8 relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-[28px] h-0.5 w-full bg-gray-200">
          <motion.div
            className="h-full bg-black rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
        <div className="flex justify-between w-full px-8">
          {/* Steps */}
          {steps.map((step) => {
            const isCompleted = currentStepIndex > step.position - 1;
            const isCurrent = currentStepIndex === step.position - 1;

            return (
              <div
                key={step.position}
                className="relative z-10 flex flex-col items-center"
              >
                <motion.button
                  onClick={() => goToStep(step.position)}
                  className={`flex w-[50px] h-[50px] items-center justify-center rounded-full border-2 ${
                    isCurrent
                      ? "border-green-500 bg-green-100"
                      : isCompleted
                      ? "border-green-500 bg-white"
                      : "border-gray-300 bg-white"
                  } mb-2 ${
                    isCompleted || isCurrent
                      ? "text-green-700"
                      : "text-gray-400"
                  }`}
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.05 : 1,
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
      </div>
    </div>
  );
};

export default StepItem;
