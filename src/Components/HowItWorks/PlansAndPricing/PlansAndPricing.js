import React, { useState } from "react";
import tickImg from "../../../Assets/PlanAndPricing/tick.png";

const PlansAndPricing = () => {
  // All states
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  // All Increment Function
  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };
  const handleIncrement3 = () => {
    setCount3(count3 + 1);
  };

  // All Decrement Function
  const handleDecrement1 = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
    }
  };
  const handleDecrement2 = () => {
    if (count2 > 1) {
      setCount2(count2 - 1);
    }
  };
  const handleDecrement3 = () => {
    if (count3 > 1) {
      setCount3(count3 - 1);
    }
  };

  return (
    <div className="mx-4 my-4">
      <div className="mb-10">
        <h2 className="font-bold text-5xl text-center mb-6">Plans & Pricing</h2>
        <h2 className="text-[#595a5c] font-semibold text-lg text-center">
          Choose from our cumulative exclusive packages below or if you are open
          to discussion schedule a call with us.
        </h2>
      </div>

      <div className="flex justify-center mb-6">
        <div className="flex justify-center gap-4 p-3 rounded-full shadow-md shadow-sky-300">
          <h2 className="font-semibold border border-transparent rounded-full bg-sky-600 text-white px-4 py-2">
            Monthly
          </h2>
          <h2 className="font-semibold border border-transparent rounded-full px-4 py-2">
            Quarterly
          </h2>
          <h2 className="font-semibold border border-transparent rounded-full px-4 py-2">
            Annually
          </h2>
        </div>
      </div>

      <h2 className="font-bold text-center text-[#595a5c] mb-8">
        <span className="text-green-600">Save 20%</span> For Annual Plan
      </h2>

      {/* Plan Cards */}
      <div className="flex justify-center items-center gap-6">
        <div className="flex flex-col border border-gray-300 rounded-xl px-8 py-8 w-[420px]">
          <div className="flex justify-between items-center gap-6 mb-10">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold">Basic</h2>
              <h2 className="text-[#595a5c] font-semibold">Full Time</h2>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-4xl text-black font-bold">
                $24
                <span className="text-[#595a5c] text-lg font-semibold">
                  /Day
                </span>
              </h2>

              <h2 className="text-[#595a5c] font-semibold">
                Billed monthly{" "}
                <span className="text-black text-lg font-bold">$480</span>
              </h2>
            </div>
          </div>

          <h2 className="text-[#595a5c] font-medium mb-16">
            This package entails the most basic of your work. Your assigned
            photo editor will do the primary work for your retouching needs.
          </h2>

          <div className="flex justify-center items-center gap-4 mb-10">
            <h2 className="text-[#595a5c] text-lg font-semibold">
              Add Team Member
            </h2>

            <div className="flex justify-center items-center gap-1">
              <h2
                onClick={handleDecrement1}
                className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
              >
                -
              </h2>

              <h2 className="text-[#595a5c] text-lg font-semibold text-center w-[30px]">
                {count1}
              </h2>

              <h2
                onClick={handleIncrement1}
                className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
              >
                +
              </h2>
            </div>
          </div>

          <h2 className="text-sky-600 font-semibold text-center py-4 mb-4 rounded-lg hover:bg-sky-200 hover:cursor-pointer duration-300 ease-in-out">
            Pay & Build Your Team Now!
          </h2>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-6">Skills in Basic</h2>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Clipping Path
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Background Removal
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Shadow Creation
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Image Resizing
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Web Optimization
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-gray-300 rounded-xl px-8 py-8 w-[420px]">
          <div className="flex justify-between items-center gap-6 mb-10">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold">Basic</h2>
              <h2 className="text-[#595a5c] font-semibold">Full Time</h2>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-4xl text-black font-bold">
                $24
                <span className="text-[#595a5c] text-lg font-semibold">
                  /Day
                </span>
              </h2>

              <h2 className="text-[#595a5c] font-semibold">
                Billed monthly{" "}
                <span className="text-black text-lg font-bold">$480</span>
              </h2>
            </div>
          </div>

          <h2 className="text-[#595a5c] font-medium mb-16">
            This package entails the most basic of your work. Your assigned
            photo editor will do the primary work for your retouching needs.
          </h2>

          <div className="flex justify-center items-center gap-4 mb-10">
            <h2 className="text-[#595a5c] text-lg font-semibold">
              Add Team Member
            </h2>

            <div className="flex justify-center items-center gap-1">
              <h2
                onClick={handleDecrement2}
                className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
              >
                -
              </h2>

              <h2 className="text-[#595a5c] text-lg font-semibold text-center w-[30px]">
                {count2}
              </h2>

              <h2
                onClick={handleIncrement2}
                className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
              >
                +
              </h2>
            </div>
          </div>

          <h2 className="text-sky-600 font-semibold text-center py-4 mb-4 rounded-lg hover:bg-sky-200 hover:cursor-pointer duration-300 ease-in-out">
            Pay & Build Your Team Now!
          </h2>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-6">Skills in Basic</h2>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Clipping Path
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Background Removal
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Shadow Creation
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Image Resizing
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Web Optimization
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-gray-300 rounded-xl px-8 py-8 w-[420px]">
          <div className="flex justify-between items-center gap-6 mb-10">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold">Basic</h2>
              <h2 className="text-[#595a5c] font-semibold">Full Time</h2>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-4xl text-black font-bold">
                $24
                <span className="text-[#595a5c] text-lg font-semibold">
                  /Day
                </span>
              </h2>

              <h2 className="text-[#595a5c] font-semibold">
                Billed monthly{" "}
                <span className="text-black text-lg font-bold">$480</span>
              </h2>
            </div>
          </div>

          <h2 className="text-[#595a5c] font-medium mb-16">
            This package entails the most basic of your work. Your assigned
            photo editor will do the primary work for your retouching needs.
          </h2>

          <div className="flex justify-center items-center gap-4 mb-10">
            <h2 className="text-[#595a5c] text-lg font-semibold">
              Add Team Member
            </h2>

            <div className="flex justify-center items-center gap-1">
              <h2
                onClick={handleDecrement3}
                className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
              >
                -
              </h2>

              <h2 className="text-[#595a5c] text-lg font-semibold text-center w-[30px]">
                {count3}
              </h2>

              <h2
                onClick={handleIncrement3}
                className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
              >
                +
              </h2>
            </div>
          </div>

          <h2 className="text-sky-600 font-semibold text-center py-4 mb-4 rounded-lg hover:bg-sky-200 hover:cursor-pointer duration-300 ease-in-out">
            Pay & Build Your Team Now!
          </h2>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-6">Skills in Basic</h2>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Clipping Path
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Background Removal
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Shadow Creation
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Image Resizing
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[40px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Web Optimization
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
