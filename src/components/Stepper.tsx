import React, { useState } from 'react';

// Define the steps
const steps = ['Order Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];

// ShippingTracker component
const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Function to move to the next step
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className={`flex items-center ${index < currentStep ? 'text-green-500' : 'text-gray-500'}`}>
            <div className={`h-2 w-2 rounded-full ${index < currentStep ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className="text-xs">{step}</span>
          </div>
        ))}
      </div>
      {/* <button
        className={`mt-8 px-4 py-2 bg-blue-500 text-white rounded-md ${currentStep === steps.length - 1 ? 'hidden' : ''}`}
        onClick={nextStep}
      >
        {currentStep === steps.length - 2 ? 'Out for Delivery' : 'Next Step'}
      </button> */}
    </div>
  );
};

export default Stepper;