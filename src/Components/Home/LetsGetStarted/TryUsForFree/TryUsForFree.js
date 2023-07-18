import React, { useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import bag from "../../../../Assets/LetsGetStarted/bag.png";

import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import ClickToUpload from "./ClickToUpload";

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

        <div className="mb-5">
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            placeholder="Phone Number*"
            defaultCountry="BD"
            value={value}
            onChange={setValue}
            className="mb-5"
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
              <div className="flex items-center justify-center gap-1">
                <TiTick className="text-green-800 text-2xl" />
                <h2 className="text-green-600 font-medium">
                  Phone number is valid
                </h2>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1">
                <ImCross className="text-red-600 text-2xl" />
                <h2 className="text-red-600 font-medium">
                  Incorrect phone number
                </h2>
              </div>
            )}

            <h2 className="text-center text-sky-500 font-medium hover:text-sky-700 duration-300 ease-in-out hover:cursor-pointer">
              I want to receive a call
            </h2>
          </div>
        </div>

        <div className="mb-5">
          <select className="select border border-gray-400 focus:border-transparent select-info w-full text-gray-500 text-sm font-thin">
            <option disabled selected>
              Select Service
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <textarea
          className="textarea textarea-info border border-gray-400 focus:border-transparent min-h-[80px] w-full mb-5"
          placeholder="Instructions"
        ></textarea>

        <ClickToUpload />
      </div>
    </div>
  );
};

export default TryUsForFree;
