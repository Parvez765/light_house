import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./ConfirmYourEmail.module.css"; // Import the CSS Module

const ConfirmYourEmail = ({ handleNext, handleBack, typedEmail }) => {
  const [codes, setCodes] = useState(Array(6).fill(""));

  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;

      if (value && index < 5) {
        inputRefs[index + 1].focus();
      } else if (!value && index > 0) {
        inputRefs[index - 1].focus();
      }

      setCodes(newCodes);
    }
  };

  const inputRefs = [];

  const handleInputRef = (index, ref) => {
    inputRefs[index] = ref;
  };

  return (
    <div>
      <div className="border border-black rounded-xl bg-white">
        <div className="flex justify-center mb-6">
          <div className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-sky-200">
            <AiOutlineMail className="text-4xl text-sky-600" />
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-4 mx-2">
          Confirm your email
        </h2>

        <div className="flex justify-center items-center gap-2 mb-6 mx-2">
          <h2 className="text-xl font-semibold">Enter Verification Code:</h2>

          <div className="flex items-center justify-center gap-2">
            {codes.map((code, index) => (
              <input
                key={index}
                ref={(ref) => handleInputRef(index, ref)}
                type="number"
                className={`w-12 h-12 text-center border border-gray-400 rounded-lg focus:outline-none focus:border-sky-600 ${styles.inputStyles}`}
                maxLength="1"
                value={code}
                onChange={(event) =>
                  handleInputChange(index, event.target.value)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "e" ||
                    event.key === "-" ||
                    event.key === "+" ||
                    event.key === "."
                  ) {
                    event.preventDefault();
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mx-2 mb-4">
          <h2 className="text-[#595a5c] hover:text-sky-600 duration-300 ease-in-out text-xl underline underline-offset-2 font-medium hover:cursor-pointer">
            Didn't receive an email?
          </h2>
        </div>

        <h2 className="text-center text-[#595a5c] text-lg font-medium mx-16">
          We've sent a verification code to{" "}
          <span className="text-black font-bold">{typedEmail}</span> to make
          sure you're really you (Remember to check your Spam folder).
        </h2>

        <div className="flex justify-between mt-6">
          <button onClick={handleBack}>Go Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmYourEmail;
