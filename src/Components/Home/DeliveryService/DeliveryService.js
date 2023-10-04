import React from "react";
import styles from "./DeliverService.module.css";

const DeliveryService = () => {
  return (
    <div className={`${styles.serviceContentContainer}`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[100px]">
          <div className={`${styles.serviceContainer} p-4 lg:w-[512px] h-[537px]`}>
            <img
              src="https://i.ibb.co/Wt8BPXs/one.png"
              alt="Studio MetroDesk Service One"
              className={`${styles.serviceImage}`}
            />
            <div>
              <h2 className="text-[30px] font-bold mt-[8px] mb-[8px]">
                Fastest Express Service
              </h2>
              <p className="text-[22px]">
                Last 15 years’ data show’s 90% of customers love our one hour
                express delivery service.
              </p>
            </div>
          </div>
          <div className={`${styles.serviceContainer} p-4 lg:w-[512px] h-[537px]`}>
            <img
              src="https://i.ibb.co/F0c2K5C/two.png"
              alt="Studio MetroDesk Service One"
              className={`${styles.serviceImage}`}
            />
            <div>
              <h2 className="text-[30px] font-bold mt-[8px] mb-[8px]">
                Make Your Team With Us
              </h2>
              <p className="text-[22px]">
                Start as little as $3/per hour. Hire as many as photo edirotrs
                you need. Infrastructure and project management is our
                responsibilitys.
              </p>
              {/* <div className="mt-[20px]">
                <button className="buildTeamBtn">Build My Team</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryService;
