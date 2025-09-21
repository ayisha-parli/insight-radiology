import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const steps = [
    { number: 1, label: "Patient Overview", description: "Review patient information" },
    { number: 2, label: "Image Analysis", description: "Upload and analyze images" },
    { number: 3, label: "AI Findings", description: "Review detected anomalies" },
    { number: 4, label: "Detailed Analysis", description: "Clinical recommendations" },
    { number: 5, label: "Report Generation", description: "Generate final report" }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              {/* Step Circle */}
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200
                ${step.number < currentStep 
                  ? 'bg-success border-success text-success-foreground' 
                  : step.number === currentStep
                    ? 'bg-primary border-primary text-primary-foreground animate-pulse-glow'
                    : 'bg-muted border-muted-foreground text-muted-foreground'
                }
              `}>
                {step.number < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.number}</span>
                )}
              </div>
              
              {/* Step Label */}
              <div className="mt-2 text-center">
                <p className={`text-sm font-medium ${
                  step.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.label}
                </p>
                <p className="text-xs text-muted-foreground max-w-24">
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`
                w-16 h-0.5 mx-4 mt-[-24px] transition-all duration-200
                ${step.number < currentStep ? 'bg-success' : 'bg-muted'}
              `} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;