import React from "react";

interface StepItemProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description?: string;
}

const StepItem: React.FC<StepItemProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="home-step">
      <div className="home-step-number">
        <Icon size={24} />
      </div>
      <h3 className="home-step-title">{title}</h3>
      {description && <p className="home-step-description">{description}</p>}
    </div>
  );
};

export default StepItem;
