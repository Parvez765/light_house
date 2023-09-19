import React from 'react';
import styles from "./PricingHero.module.css"
import { FaCheckSquare} from "react-icons/fa";
const PricingHero = () => {
    return (
        <div className={`${styles.pricingContainer}`}>
            <div className='container mx-auto p-10'>
                <div>
                    <h1 className='text-[40px] lg:text-[55px] text-center leading-[70px] font-bold'>User-Friendly, Flexible <br />& Budget-Friendly</h1>
                    <p className='text-center lg:w-[600px] block mx-auto mt-[12px] font-medium'>Introducing a more convenient and affordable approach for e-commerce, retail, professional photographers, fashion, and apparel businesses to acquire the best photo editing solutions.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-[30px] mt-[50px]'>
                   <div className='flex items-center gap-[20px] border rounded-lg  p-3 justify-center cursor-pointer'>
                        <FaCheckSquare className='text-[40px]'/>
                        <p className='text-[25px]'>Reasonably Priced and Within Your Means</p>     
                    </div>
                    <div className='flex items-center gap-[20px] border rounded-lg  p-3 justify-center cursor-pointer'>
                        <FaCheckSquare className='text-[40px]'/>
                        <p className='text-[25px]'>Fastest Delivery With Editable Format</p>     
                    </div>   
                    <div className='flex items-center gap-[20px] border rounded-lg  p-3 justify-center cursor-pointer'>
                        <FaCheckSquare className='text-[40px]'/>
                        <p className='text-[25px]'>Unlimited Revision and Instant Changes</p>     
                    </div>           
                </div>
            </div>
        </div>
    );
};

export default PricingHero;