import React from "react";
import backgroundLine from "../../../Assets/TrustedCompanies/Vector_1.png";
import comp1 from "../../../Assets/TrustedCompanies/Company_1.png";
import comp2 from "../../../Assets/TrustedCompanies/Company_2.png";
import comp3 from "../../../Assets/TrustedCompanies/Company_3.png";
import comp4 from "../../../Assets/TrustedCompanies/Company_4.png";
import comp5 from "../../../Assets/TrustedCompanies/Company_5.png";
import comp6 from "../../../Assets/TrustedCompanies/Company_6.png";
import comp7 from "../../../Assets/TrustedCompanies/Company_7.png";
import comp8 from "../../../Assets/TrustedCompanies/Company_8.png";
import comp9 from "../../../Assets/TrustedCompanies/Company_9.png";

const TrustedCompanies = () => {
  return (
    <div className="mb-16">
      <div className="mx-4 mb-6">
        <h2 className="text-center text-3xl font-medium">
          Trusted by <span className="text-sky-600 font-semibold">4,000+</span>{" "}
          Companies
        </h2>

        <div className="flex justify-center">
          <img src={backgroundLine} className="mr-8" alt="" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 mx-4 md:mx-10 lg:mx-24 xl:mx-48 2xl:mx-96">
        <img
          src={comp1}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp2}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp3}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp4}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp5}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp6}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp7}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp8}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
        <img
          src={comp9}
          className="hover:scale-110 duration-300 ease-in-out"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
