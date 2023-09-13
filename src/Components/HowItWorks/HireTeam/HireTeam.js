import React from 'react';
import styles from "./HireTeam.module.css"

const HireTeam = () => {
    return (
        <div className='container mx-auto p-3 lg:p-0 lg:mt-[120px] mb-[40px] lg:mb-[120px]'>
           <div>
            <div className={`grid lg:grid-cols-2 gap-[70px] px-10 py-10 items-center ${styles.hireContainer}`}>
                    <div className=''>
                        <h1 className='text-[40px] text-center lg:text-left lg:text-[60px] font-bold leading-[55px] lg:leading-[70px]'>Want to Hire Our Team For Your Project?</h1>
                        <p className='font-medium  text-center lg:text-left text-[22px] mt-[12px]'>Hire Our Team For The Best Project Output</p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className={`${styles.hireBtn} text-white`}>Hire Team</button>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <img src="https://i.ibb.co/MszLPG3/image.png" alt="Light House Hire Team" className='rounded-lg w-full'/>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default HireTeam;