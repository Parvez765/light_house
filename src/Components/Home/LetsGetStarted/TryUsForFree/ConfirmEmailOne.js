import React, { useState } from "react";
import { AiOutlineMail, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./ConfirmEmailOne.module.css"; // Import the CSS Module
import emailGIF from "../../../../Assets/LetsGetStarted/email.gif";

const ConfirmEmailOne = ({ handleNext, handleBack, typedEmail }) => {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const [loader, setLoader] = useState(false);

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

  const allCodesFilled = codes.every((code) => code !== "");

  const handleVerify = () => {
    setLoader(true);

    setTimeout(() => {
      handleNext(); // Navigate to the next step after 2 seconds
    }, 2000);
  };

  return (
    <div className="h-full sm:w-[400px] xl:w-full flex flex-col items-center xl:grid xl:grid-cols-2 gap-4">
      <img
        src={emailGIF}
        className="h-[200px] xl:h-[400px] rounded-lg object-cover"
        alt=""
        srcset=""
      />

      <div className="py-4 rounded-xl bg-white drop-shadow-2xl shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-sky-200">
            <AiOutlineMail className="text-4xl text-sky-600" />
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-10 mx-2">
          Confirm your email
        </h2>

        <div className="flex flex-col items-center gap-2 mb-6 mx-2">
          <h2 className="text-xl font-semibold">Enter Verification Code:</h2>

          <div className="flex items-center justify-center gap-1 sm:gap-2">
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
          <h2 className="text-[#595a5c] hover:text-sky-600 duration-300 ease-in-out text-xl font-medium hover:cursor-pointer">
            Didn't receive an email?
          </h2>
        </div>

        <h2 className="text-center text-[#595a5c] text-lg font-medium mx-10">
          We've sent a verification code to{" "}
          <span className="text-black font-bold">{typedEmail}</span> to make
          sure you're really you (Remember to check your Spam folder).
        </h2>

        <div className="flex justify-between items-center mt-10 mx-4">
          <div
            onClick={handleBack}
            className="border border-gray-400 hover:border-transparent p-4 rounded-xl hover:bg-sky-600 text-black hover:text-white duration-300 ease-in-out hover:cursor-pointer"
          >
            <AiOutlineArrowLeft className="text-xl" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleVerify}
              className="btn bg-sky-600 hover:bg-sky-500 hover:cursor-pointer rounded-lg font-semibold text-white text-lg normal-case"
              disabled={!allCodesFilled}
            >
              Verify
            </button>

            {/* Loader for transfer button */}
            <h2>
              {loader ? (
                <div class="flex flex-col">
                  <div
                    class="w-6 h-6 rounded-full animate-spin
                            border-4 border-solid border-blue-900 border-t-transparent shadow-md"
                  ></div>
                </div>
              ) : (
                ""
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailOne;
