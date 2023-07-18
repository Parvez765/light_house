import React, { useState, useEffect } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { MdPhoneCallback } from "react-icons/md";
import bag from "../../../../Assets/LetsGetStarted/bag.png";

import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import ClickToUpload from "./ClickToUpload";

const TryUsForFree = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [instructions, setInstructions] = useState("");
  const [dragFiles, setDragFiles] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();

    const files = dragFiles;

    console.log(name, email, number, service, instructions, files);
  };

  useEffect(() => {
    const isFormComplete =
      name.trim() !== "" &&
      email.trim() !== "" &&
      number !== "" &&
      service.trim() !== "" &&
      instructions.trim() !== "" &&
      dragFiles.length !== 0;

    setIsFormComplete(isFormComplete);
  }, [name, email, number, service, instructions, dragFiles]);

  const handlePhoneChange = (value) => {
    setNumber(value);
    setIsPhoneValid(value ? isValidPhoneNumber(value) : false);
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 xl:pl-4 py-10 xl:py-2">
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

      {/* Form */}
      <form
        onSubmit={handleTransfer}
        className="rounded-xl bg-gray-200 py-6 px-4"
      >
        {/* Input for name */}
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input border border-gray-400 focus:border-transparent input-info w-full mb-5"
        />

        {/* Input for email */}
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input border border-gray-400 focus:border-transparent input-info w-full mb-5"
        />

        {/* Phone Input */}
        <div className="mb-5">
          <div className="flex items-center gap-1">
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              placeholder="Phone Number*"
              defaultCountry="BD"
              name="number"
              value={number}
              onChange={handlePhoneChange}
              className="mb-3 border border-gray-400 py-3 px-2 rounded-lg w-full"
              error={!isPhoneValid && number !== "" && "Invalid phone number"}
            />

            <div className="mb-2">
              {isPhoneValid ? (
                <TiTick className="text-green-800 text-3xl" />
              ) : (
                number !== "" && <ImCross className="text-red-600 text-xl" />
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-2 duration-300 ease-in-out text-sky-600 hover:text-sky-800 hover:cursor-pointer">
              <MdPhoneCallback className="text-xl" />
              <h2 className="font-medium">I want to receive a call</h2>
            </div>
          </div>
        </div>

        {/* Services dropdown */}
        <div className="mb-5">
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="select border border-gray-400 focus:border-transparent select-info w-full text-gray-500 text-sm font-medium"
          >
            <option value="" disabled>
              Select Service
            </option>
            <option>Editorial Retouching</option>
            <option>Jewelry Retouching</option>
            <option>Apparel Retouching</option>
            <option>Furniture Retouching</option>
          </select>
        </div>

        {/* Instructions text-area */}
        <textarea
          name="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="textarea textarea-info border border-gray-400 focus:border-transparent min-h-[80px] w-full mb-5"
          placeholder="Instructions"
        ></textarea>

        {/* Drag and drop */}
        <ClickToUpload
          setDragFiles={setDragFiles}
          onChange={setIsFormComplete}
        />

        {/* Transfer button */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Transfer"
            disabled={!isFormComplete || !isPhoneValid}
            className={`duration-300 ease-in-out ${
              !isFormComplete || !isPhoneValid
                ? "btn"
                : "btn bg-sky-600 hover:bg-sky-500 text-white"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default TryUsForFree;
