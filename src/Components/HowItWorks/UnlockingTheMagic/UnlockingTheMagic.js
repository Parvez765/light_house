import React from 'react';
import styles from "./UnlockingTheMagic.module.css"
import { FaRegCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const UnlockingTheMagic = () => {
    return (
        <section className={`${styles.headingContainer}`}>
            <div className='container mx-auto p-10'>
                <div>
                    <div className={`text-center`} >
                        <h1 className='font-bold text-[40px] lg:text-[55px] leading-[40px] lg:leading-[70px]'>Unveiling Our Process:<br /> <span className='text-blue-900'>How It Works</span>
                        </h1>
                        <p className='mt-[12px] text-[16px] font-medium'>Our innovative approach, rooted in cutting-edge technology and strategic thinking, simplifies the complex. <br/>We've distilled our process into a seamless journey that ensures efficiency and effectiveness every step of the way. </p>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-[12px] mt-[12px]'>
                        <button className="tryUsFreeBtn flex items-center gap-[12px]">Book Appointment <FaRegCalendarAlt className='text-[20px]'/></button>
                        <button className="tryUsFreeBtn flex items-center gap-[12px]">Make Phone Call <FaPhoneAlt/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnlockingTheMagic;