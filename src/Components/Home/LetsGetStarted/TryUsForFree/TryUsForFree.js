import React, { useState } from "react";
import WeUnderstandYou from "./WeUnderstandYou";
import ConfirmYourEmail from "./ConfirmYourEmail";
import Payment from "./Payment";

const TryUsForFree = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [typedEmail, setTypedEmail] = useState("");

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepComponent = () => {
    switch (activeStep) {
      case 1:
        return (
          <WeUnderstandYou
            handleNext={handleNext}
            setTypedEmail={setTypedEmail}
          />
        );
      case 2:
        return (
          <ConfirmYourEmail
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            typedEmail={typedEmail}
          />
        );
      case 3:
        return (
          <Payment
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStepComponent()}</div>;
};

export default TryUsForFree;
