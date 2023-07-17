import React, { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import bag from "../../../Assets/LetsGetStarted/bag.png";

import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";

const TryUsForFree = () => {
  const [value, setValue] = useState();

  return (
    <div className="border border-black grid grid-cols-2">
      <div>
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-3">We understand you!</h2>
          <h2 className="text-[#595a5c] text-lg font-medium">
            We value your doubts! That’s why we offer free edits of three of
            your images which you will get back to within an hour!
          </h2>
        </div>

        <div className="flex items-center gap-2 text-sky-700 text-lg font-medium mb-6">
          <h2>How Try Us for Free Works</h2>
          <FiPlayCircle className="text-xl" />
        </div>

        <img src={bag} alt="" />
      </div>

      <div className="bg-gray-200 py-6 px-4">
        <input
          type="text"
          placeholder="Name*"
          className="input border border-gray-400 focus:border-transparent input-info w-full mb-5"
        />

        <input
          type="email"
          placeholder="Email*"
          className="input border border-gray-400 focus:border-transparent input-info w-full mb-5"
        />

        <PhoneInput
          international
          countryCallingCodeEditable={false}
          placeholder="Phone Number*"
          defaultCountry="BD"
          value={value}
          onChange={setValue}
          error={
            value
              ? isValidPhoneNumber(value)
                ? undefined
                : "Invalid phone number"
              : "Phone number required"
          }
        />

        <div>
          {value && isValidPhoneNumber(value) ? (
            <div className="flex items-center gap-1">
              <TiTick className="text-green-800 text-2xl" />
              <h2 className="text-green-600 font-medium">
                Phone number is valid
              </h2>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <ImCross className="text-red-600 text-2xl" />
              <h2 className="text-red-600 font-medium">
                Incorrect phone number
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TryUsForFree;
