import React, { useState } from "react";
import WeUnderstandYou from "./WeUnderstandYou";
import ConfirmEmailOne from "./ConfirmEmailOne";
import Payment from "./Payment";
import { useEffect } from "react";

const TryUsForFree = ({ changeBgColor }) => {
  useEffect(() => {
    // Change the background color when this component is active
    changeBgColor(
      "bg-gradient-to-br from-cyan-200 from-20% via-white via-60% to-cyan-200 to-80%"
    );
  }, [changeBgColor]);

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
          <ConfirmEmailOne
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
