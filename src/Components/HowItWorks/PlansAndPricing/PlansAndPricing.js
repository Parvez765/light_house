import React, { useState } from "react";

const PlansAndPricing = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mx-4">
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

      <h2 className="font-bold text-center text-[#595a5c]">
        <span className="text-green-600">Save 20%</span> For Annual Plan
      </h2>

      {/* Plan Cards */}
      <div>
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">Basic</h2>
            <h2 className="text-[#595a5c] font-semibold">Full Time</h2>
          </div>

          <div className="flex flex-col items-end">
            <h2 className="text-4xl text-black font-bold">
              $24
              <span className="text-[#595a5c] text-lg font-semibold">/Day</span>
            </h2>

            <h2 className="text-[#595a5c] font-semibold">
              Billed monthly{" "}
              <span className="text-black text-lg font-bold">$480</span>
            </h2>
          </div>
        </div>

        <h2 className="text-[#595a5c] font-medium mb-16">
          This package entails the most basic of your work. Your assigned photo
          editor will do the primary work for your retouching needs.
        </h2>

        <div className="flex justify-center items-center">
          <h2 className="text-[#595a5c] text-lg font-semibold">
            Add Team Member
          </h2>

          <div className="flex justify-center items-center gap-3">
            <h2
              onClick={handleDecrement}
              className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
            >
              -
            </h2>

            <h2 className="text-[#595a5c] text-lg font-semibold">{count}</h2>

            <h2
              onClick={handleIncrement}
              className="border border-gray-400 hover:border-sky-600 text-3xl text-black hover:text-sky-600 font-bold text-center rounded-lg w-[40px] h-[40px] duration-200 ease-in-out hover:cursor-pointer"
            >
              +
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
