import React from "react";
import styles from "./MissionAndVision.module.css";
import mission from "../../../data/mission";

const MissionAndVision = () => {
    return (
        <div>
            <div className="container  mx-auto p-10 lg:mt-[60px]">
                <div className="grid grid-cols-1 lg:gap-[70px] lg:grid-cols-3 justify-items-center justify-center items-center">
                    {mission?.map((mi) => (
                        <div className={`${styles.numContainer} w-full text-center`}>
                            <h1 className="font-bold text-[80px]">{mi.num}</h1>
                            <p className="font-medium text-[22px] -mt-[12px]">{mi.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`lg:mt-[60px] ${styles.mission}`}>
                <div className="container mx-auto p-10">
                    <div className="grid lg:grid-cols-2 gap-[70px]">
                        <div>
                            <h1 className="text-[40px] font-bold">Mission And Values</h1>
                            <p className="text-[20px] font-medium">
                                With us, you are in the driving seat. You decide everything from
                                price, packages, turnaround time to quality. Enjoy the drive!
                            </p>
                            <div>
                                <button className={`${styles.connectBtn}`}>
                                    Let's Connect With Us
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-[30px]">
                            <div>
                                <h1 className="text-[20px] font-bold">Perks & Benefits</h1>
                                <p className="text-[20px] font-medium mt-[12px]">
                                    Who doesn’t love nice things? We often offer discounts and it
                                    gets bigger & better every time you collaborate with us.
                                </p>
                            </div>
                            <div className="mt-[12px] lg:mt-[0px]">
                                <h1 className="text-[20px] font-bold">Collective Impact</h1>
                                <p className="text-[20px] font-medium mt-[12px]">
                                    Each payment we receive goes directly to our photo editor, who
                                    works 24/7 with the lowest of opportunities in life and the
                                    highest of skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[60px] mb-[60px] container mx-auto p-3 lg:p-0">
                <div className="flex flex-col lg:flex-row items-start gap-[60px]">
                    <div>
                        <h1 className="text-[30px] lg:text-[40px] font-medium leading-[40px] lg:leading-[50px] lg:w-[1000px]">Hey! As you have come this far, why don’t you take a chance on our team?</h1>
                    </div>
                    <div>
                        <button className={`${styles.tryBtn}`}>
                            Try Our Team For Free
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVision;
