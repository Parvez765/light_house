import React, { useState } from 'react';
import styles from "./Pricing.module.css"
import basicImage from "../../../Assets/pricing/basic.png"
import webSize from "../../../Assets/pricing/websize.png"
import margin from "../../../Assets/pricing/margin.png"
import adjustment from "../../../Assets/pricing/adjustment.png"
import retouch from "../../../Assets/pricing/retouch.png"
import flatRate from "../../../Assets/pricing/flatRate.png"
import medium from "../../../Assets/pricing/medium.png"
import superComplex from "../../../Assets/pricing/superComplex.png"
import complex from "../../../Assets/pricing/complex.png"
import { FaCheck, FaCheckSquare } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import Swal from 'sweetalert2';

const Pricing = () => {

    const [activeBtn, setActiveBtn] = useState("Clipping Path");
    const [add, setAdd] = useState(1)
    const [value, setValue] = useState(3)
    const [service, setService] = useState("Basic")
    const [right, setRight] = useState(true)
    const [rightTwo, setRightTwo] = useState(true)
    const [rightThree, setRightThree] = useState(true)
    const [rightFour, setRightFour] = useState(true)

    const [sum, setSum] = useState(0)
    // console.log(sum, setSum);

    const handleClick = (btn) => {
        // activeBtn === "Clipping Path" && setValue(3)
        // activeBtn === "Photo Retouching" && setValue(5)
        setActiveBtn(btn);
    };

    const handleServiceClick = (btn) => {
        setService(btn);
    };

    const handleMinus = () => {
        if (add < 2) {
            return Swal.fire(
                'Opps!',
                'Value Can Not Be Less Than One!',
                'Error'
            )
        } else {
            return setAdd(add - 1)
        }
    }

    const handleRight = () => {
        setRight(!right)
    }

    const handleRightTwo = () => {
        setRightTwo(!rightTwo)
    }
    const handleRightThree = () => {
        setRightThree(!rightThree)
    }

    const handleRightFour = () => {
        setRightFour(!rightFour)
    }
    
   const handleAddSum = () => {
      setSum(sum + 0.50)
    }
   
    const handleDeleteSum = ()=> {
        setSum(sum - 0.50)
    }

    const handleAddSumTwo = () => {
        setSum(sum + 0.50)
      }
     
      const handleDeleteSumTwo = ()=> {
          setSum(sum - 0.50)
      }

      const handleAddSumThree = () => {
        setSum(sum + 0.50)
      }
     
      const handleDeleteSumThree = ()=> {
          setSum(sum - 0.50)
      }
      const handleAddSumFour = () => {
        setSum(sum + 0.50)
      }
     
      const handleDeleteSumFour = ()=> {
          setSum(sum - 0.50)
      }
    // console.log(minusBtn);

    return (
        <div className={`${styles.pricingContainer}`}>
            <div className='container mx-auto'>
                <h1 className='text-center text-4xl font-bold p-4'>Check Our Pricing</h1>
                <p className='text-center -mt-[10px] font-medium'>Introducing a simpler and economical way to get the best photo editing solutions for Pro-photographers, Fashion, Apparel,</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center mt-6 gap-4'>
                <button onClick={() => handleClick('Clipping Path')} className={activeBtn === 'Clipping Path' ? styles.priceActiveBtn : styles.priceBtn} >Clipping Path</button>
                <button onClick={() => handleClick('Photo Retouching')} className={activeBtn === 'Photo Retouching' ? styles.priceActiveBtn : styles.priceBtn} >Photo Retouching</button>
                <button onClick={() => handleClick('Ghost Mannequin')} className={activeBtn === 'Ghost Mannequin' ? styles.priceActiveBtn : styles.priceBtn} >Ghost Mannequin</button>
                <button onClick={() => handleClick('Image Masking')} className={activeBtn === 'Image Masking' ? styles.priceActiveBtn : styles.priceBtn} >Image Masking</button>
            </div>
            <div className={`${styles.pricingContentContainer}  2xl:w-[1200px]`}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[50px]'>
                    <div>
                        {service === "Basic" && <img src={basicImage} alt="Light House Basic" />}
                        {service === "Flat Rate" && <img src={flatRate} alt="Light House Flat Rate" />}
                        {service === "Medium" && <img src={medium} alt="Light House Medium" />}
                        {service === "Complex" && <img src={complex} alt="Light House Complex" />}
                        {service === "Super Complex" && <img src={superComplex} alt="Light House Super Complex" />}


                        <div className='mt-[10px] flex flex-col lg:flex-row gap-[10px]'>
                            <button onClick={() => handleServiceClick('Basic')} className={service === 'Basic' ? styles.activeBtn : styles.defaultBtn}>Basic</button>
                            <button onClick={() => handleServiceClick('Flat Rate')} className={service === 'Flat Rate' ? styles.activeBtn : styles.defaultBtn}>Flat Rate</button>
                            <button onClick={() => handleServiceClick('Medium')} className={service === 'Medium' ? styles.activeBtn : styles.defaultBtn}>Medium</button>
                            <button onClick={() => handleServiceClick('Complex')} className={service === 'Complex' ? styles.activeBtn : styles.defaultBtn}>Complex</button>
                            <button onClick={() => handleServiceClick('Super Complex')} className={service === 'Super Complex' ? styles.activeBtn : styles.defaultBtn}>Super Complex</button>
                        </div>
                      
                        <div className='mt-[16px]'>
                            <h6>You Can Select One Or All</h6>
                            <div className='grid lg:grid-cols-2 mt-[10px] gap-[10px]'>
                                <div>
                                    <div className={`${styles.additionalServiceContainer}`}>
                                        <div className=''>
                                            <div className='flex items-center gap-[22px]'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={webSize} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Web Size</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRight}>
                                                    {
                                                        right ?  <button onClick={handleAddSum}><FaCheckSquare/></button> : <button onClick={handleDeleteSum}><FaCheck/></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.additionalServiceContainer}  mt-[12px]`}>
                                        <div className=''>
                                            <div className='flex items-center gap-[22px]'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={adjustment} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Adjustment</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRightTwo}>
                                                    {
                                                        rightTwo ? <button onClick={handleAddSumTwo}><FaCheckSquare/></button> : <button onClick={handleDeleteSumTwo}><FaCheck/></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`${styles.additionalServiceContainer}`}>
                                        <div className=''>
                                            <div className='flex items-center gap-[22px]'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={margin} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Margin</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRightThree}>
                                                    {
                                                        rightThree ? <button onClick={handleAddSumThree}><FaCheckSquare/></button> : <button onClick={handleDeleteSumThree}><FaCheck/></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.additionalServiceContainer}  mt-[12px]`}>
                                        <div className=''>
                                            <div className='flex items-center gap-[22px]'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={retouch} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Retouch</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <div onClick={handleRightFour}>
                                                    {
                                                        rightFour ?  <button onClick={handleAddSumFour}><FaCheckSquare/></button> : <button onClick={handleDeleteSumFour}><FaCheck/></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.pricingCalculator}`}>
                        <h6 className='font-medium text-[20px]'>{activeBtn}</h6>
                        <h3 className='font-bold text-sky-600 text-[40px] lg:text-[60px] -mt-[10px]'>${value * add}.00<span className='text-[20px] lg:text-[40px]'>/img</span></h3>
                        <h6 className='font-medium text-[20px] -mt-[10px]'>Complexity: <span className='font-bold text-sky-600'>{service}</span></h6>
                        {/* Pricing */}
                        <div className='mt-[30px]'>
                            <div className='flex justify-between font-medium'>
                                {/* <p>Drop Shadow</p>
                                <p>$0.50</p> */}
                            </div>
                            <div>
                               {
                                right ?  "" : <div  className='flex justify-between font-medium mt-[20px]'>
                                     <p>Web Size</p>
                                    <p>$0.50</p>
                                </div> 
                               }
                            </div>
                             <div>
                                {
                                    rightTwo ? "" :  <div className='flex justify-between font-medium mt-[20px]'>
                                    <p>Adjustment</p>
                                    <p>$0.50</p>
                                </div>
                                }
                             </div>
                             {
                                rightThree ? "" : <div className='flex justify-between font-medium mt-[20px]'><p>Margin</p> <p>$0.50</p></div>
                             }
                            
                            {
                                rightFour ? "" : <div className='flex justify-between font-medium mt-[20px]'><p>Retouch</p> <p>$0.50</p></div>
                             }
                            <div className='flex justify-between font-bold mt-[20px]'>
                                <p>Per Image Sub-Total</p>
                                <p>${sum}</p>
                            </div>
                        </div>
                        {/* Pricing Calculation */}
                        <div className='mt-[40px]'>
                            <p className='text-[18px] font-medium'>Image Calculator</p>
                            <p className='mt-[6px] font-medium'>Select How Many Images You Need</p>
                            <div className='flex items-center justify-center gap-[15px]'>
                                <button onClick={handleMinus}><FaMinus className='text-[30px]' /></button>
                                <p className='font-bold text-[60px]'>${add}</p>
                                <button onClick={() => setAdd(add + 1)}><FaPlus className='text-[30px]' /></button>
                            </div>
                        </div>
                        <div className='flex justify-between font-bold text-[30px]'>
                            <p>Total</p>
                            <p>${value * add + sum}</p>
                        </div>
                        <div className='mt-[30px]'>
                            <button className='bg-sky-600 lg:px-14 py-4 w-full border rounded-lg text-white font-bold text-[20px]'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;