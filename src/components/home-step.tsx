import React from "react";

interface HomeStepProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  title?: string;
  description?: string;
}

const HomeStep: React.FC<HomeStepProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  if (!Icon) {
    return null;
  }

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

export default HomeStep;
