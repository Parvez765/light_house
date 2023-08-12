import React from "react";
import tickImg from "../../../../Assets/LetsGetStarted/tick.gif";

const Payment = () => {
  return (
    <div className="h-full flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-6">
      <div>
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Congratulations!
        </h2>
        <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">
          You're done.
        </h2>

        <h2 className="text-[#595a5c] text-lg font-medium mb-10 text-center lg:text-left">
          We received your images.{" "}
          <span className="font-bold text-black">
            This is your order number #HG767.
          </span>{" "}
          Your images will be delivered to you within two hours!
          <br />
          Thank you!
        </h2>

        <div className="flex justify-center lg:justify-start">
          <button className="btn normal-case text-lg font-semibold text-sky-600 hover:text-white bg-white hover:bg-sky-600 duration-300 ease-in-out border border-sky-600 hover:border-transparent">
            Check Our Pricing
          </button>
        </div>
      </div>

      <div>
        <img
          src={tickImg}
          className="rounded-xl h-[300px] xl:h-[600px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Payment;
