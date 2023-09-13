import React, { useState } from "react";
import tickImg from "../../../Assets/PlanAndPricing/tick.png";
import { BsGlobeAmericas } from "react-icons/bs";
import { GiMoneyStack, GiPayMoney } from "react-icons/gi";

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
    <div className="mx-4 my-28">
      <div className="mb-10">
        <h2 className="font-bold text-4xl md:text-5xl text-center mb-6">
          Plans & Pricing
        </h2>
        <h2 className="text-[#595a5c] font-semibold text-lg text-center">
          Choose from our cumulative exclusive packages below or if you are open
          to discussion schedule a call with us.
        </h2>
      </div>

      <div className="flex justify-center mb-6">
        <div className="flex flex-col sm:flex-row justify-center gap-4 p-3 rounded-xl sm:rounded-full shadow-md shadow-sky-300">
          <h2 className="font-semibold border border-transparent rounded-full bg-sky-600 text-white px-4 py-2 text-center">
            Monthly
          </h2>
          <h2 className="font-semibold border border-transparent rounded-full px-4 py-2 text-center">
            Quarterly
          </h2>
          <h2 className="font-semibold border border-transparent rounded-full px-4 py-2 text-center">
            Annually
          </h2>
        </div>
      </div>

      <h2 className="font-bold text-center text-[#595a5c] mb-8">
        <span className="text-green-600">Save 20%</span> For Annual Plan
      </h2>

      {/* Plan Cards */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-20">
        <div className="flex flex-col border border-gray-300 hover:border-sky-600 duration-300 ease-in-out rounded-xl px-6 py-8 sm:w-[470px] shadow-2xl">
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
            Starting from only $3 per hour, this package entails the most basic
            of your retouching work. Best for retouching and photography
            agencies who require paths in bulk.
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

            <div className="flex items-center gap-3 mb-2">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Clipping Path
              </h2>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Background Removal
              </h2>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Shadow Creation
              </h2>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Image Resizing
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Web Optimization
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-xl px-2 py-2 sm:w-[480px] bg-gradient-to-r from-blue-200 from-10% via-blue-400 via-40% to-sky-600 to-90% shadow-2xl">
          <h2 className="text-white font-semibold text-xl text-center mb-2">
            Most Popular
          </h2>

          <div className="bg-white px-6 py-8 rounded-xl">
            <div className="flex justify-between items-center gap-6 mb-10">
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold">Pro</h2>
                <h2 className="text-[#595a5c] font-semibold">Full Time</h2>
              </div>

              <div className="flex flex-col items-end">
                <h2 className="text-4xl text-black font-bold">
                  $48
                  <span className="text-[#595a5c] text-lg font-semibold">
                    /Day
                  </span>
                </h2>

                <h2 className="text-[#595a5c] font-semibold">
                  Billed monthly{" "}
                  <span className="text-black text-lg font-bold">$960</span>
                </h2>
              </div>
            </div>

            <h2 className="text-[#595a5c] font-medium mb-16">
              This is for those editorial, fashion, and product photography
              agencies who care about the precise presentation of their products
              to increase buyers’ intent. Price starts from only $6 per hour.
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
              <h2 className="text-xl font-bold mb-6">
                Including Basic Skills+
              </h2>

              <div className="flex items-center gap-3 mb-2">
                <img src={tickImg} className="w-[25px]" alt="tick.png" />
                <h2 className="text-lg font-medium text-[#595a5c]">
                  Invisible Mannequin
                </h2>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <img src={tickImg} className="w-[25px]" alt="tick.png" />
                <h2 className="text-lg font-medium text-[#595a5c]">
                  Basic Dust Clean
                </h2>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <img src={tickImg} className="w-[25px]" alt="tick.png" />
                <h2 className="text-lg font-medium text-[#595a5c]">
                  Shaping Straightening
                </h2>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <img src={tickImg} className="w-[25px]" alt="tick.png" />
                <h2 className="text-lg font-medium text-[#595a5c]">
                  Removing Creases Wrinkles
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <img src={tickImg} className="w-[25px]" alt="tick.png" />
                <h2 className="text-lg font-medium text-[#595a5c]">
                  Retouching
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-gray-300 hover:border-sky-600 duration-300 ease-in-out rounded-xl px-6 py-8 sm:w-[470px] shadow-2xl">
          <div className="flex justify-between items-center gap-3 mb-10">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold">Advanced</h2>
              <h2 className="text-[#595a5c] font-semibold">Full Time</h2>
            </div>

            <div className="flex flex-col items-end">
              <h2 className="text-4xl text-black font-bold">
                $80
                <span className="text-[#595a5c] text-lg font-semibold">
                  /Day
                </span>
              </h2>

              <h2 className="text-[#595a5c] font-semibold">
                Billed monthly{" "}
                <span className="text-black text-lg font-bold">$1600</span>
              </h2>
            </div>
          </div>

          <h2 className="text-[#595a5c] font-medium mb-16">
            Highly skilled retouchers will take care of the simplest of your
            image editing tasks to the complex ones that require advanced
            retouching expertise for only $10 per hour. This package is for
            those who are known for their perfection.
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
            <h2 className="text-xl font-bold mb-6">Everything in Pro+</h2>

            <div className="flex items-center gap-3 mb-2">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                High-end Retouching
              </h2>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Image Manipulation
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <img src={tickImg} className="w-[25px]" alt="tick.png" />
              <h2 className="text-lg font-medium text-[#595a5c]">
                Industry-focused retouching expertise
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6">
        <div className="flex items-center justify-center gap-3 bg-red-100 rounded-lg py-8 px-6 border-l-4 border-transparent hover:border-red-300 duration-300 ease-in-out shadow-xl">
          <BsGlobeAmericas className="text-4xl" />
          <h2 className="text-xl font-medium">We work with your time zone</h2>
        </div>

        <div className="flex items-center justify-center gap-3 bg-green-100 rounded-lg py-8 px-6 border-l-4 border-transparent hover:border-green-300 duration-300 ease-in-out shadow-xl">
          <GiMoneyStack className="text-4xl" />
          <h2 className="text-xl font-medium">No setup or hidden fees</h2>
        </div>

        <div className="flex items-center justify-center gap-3 bg-yellow-100 rounded-lg py-8 px-6 border-l-4 border-transparent hover:border-yellow-300 duration-300 ease-in-out shadow-xl">
          <GiPayMoney className="text-4xl" />
          <h2 className="text-xl font-medium">Pay and start instantly</h2>
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
