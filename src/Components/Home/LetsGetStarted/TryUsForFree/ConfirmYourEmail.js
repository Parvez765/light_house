import React from "react";
import { Link } from "react-router-dom";

const ConfirmYourEmail = ({ handleNext, handleBack }) => {
  return (
    <div>
      <h2>hello</h2>
      <button onClick={handleBack}>Go Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ConfirmYourEmail;
