import React from "react";
import { useMultiStepForm } from "@/hooks/use-stepped-form";

interface StepItemProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description?: string;
  position?: number;
  isActive?: boolean;
}

const StepItem: React.FC<StepItemProps> = ({
  icon: Icon,
  title,
  description,
  position,
  isActive,
}) => {
  // Always call the hook, but handle the case where provider is not available
  let stepIsActive = isActive ?? false;
  let currentStepIndex = 0;

  try {
    const context = useMultiStepForm();
    currentStepIndex = context.currentStepIndex;
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
};

export default StepItem;
