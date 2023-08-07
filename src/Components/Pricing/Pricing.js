import React, { useState } from 'react';
import "./Pricing.css"
import basicImage from "../../Assets/pricing/basic.png"
import dropShadow from "../../Assets/pricing/dropShadow.png"
import checkBox from "../../Assets/pricing/checkbox_base.png"
import customShadow from "../../Assets/pricing/customShadow.png"
import reflection from "../../Assets/pricing/reflection.png"
import keepShdow from "../../Assets/pricing/custom.png"
import webSize from "../../Assets/pricing/websize.png"
import margin from "../../Assets/pricing/margin.png"
import adjustment from "../../Assets/pricing/adjustment.png"
import retouch from "../../Assets/pricing/retouch.png"
import checkMark from "../../Assets/pricing/checkbox.png"
import minus from "../../Assets/pricing/minus.png"
import plus from "../../Assets/pricing/plus.png"

const Pricing = () => {

    const [activeBtn, setActiveBtn] = useState("clippingPath");
    const [active, setActive] = useState(false)

    const handleClick = (btn) => {
        setActiveBtn(btn);
    };


    return (
        <div className='pricingContainer'>
            <div className='container mx-auto'>
                <h1 className='text-center text-4xl font-bold p-4'>Check Our Pricing</h1>
                <p className='text-center -mt-[10px] font-medium'>Introducing a simpler and economical way to get <br /> the best photo editing solutions for Pro-photographers, Fashion, Apparel,</p>
            </div>
            <div className='flex items-center justify-center mt-6 gap-4'>
                <button onClick={() => handleClick('clippingPath')} className={activeBtn === 'clippingPath' ? "priceActiveBtn" : "priceBtn"} >Clipping Path</button>
                <button onClick={() => handleClick('photoRetouching')} className={activeBtn === 'photoRetouching' ? "priceActiveBtn" : "priceBtn"} >Photo Retouching</button>
                <button onClick={() => handleClick('ghostMannequin')} className={activeBtn === 'ghostMannequin' ? "priceActiveBtn" : "priceBtn"} >Ghost Mannequin</button>
                <button onClick={() => handleClick('imageMasking')} className={activeBtn === 'imageMasking' ? "priceActiveBtn" : "priceBtn"} >Image Masking</button>
            </div>
            <div className='pricingContentContainer 2xl:w-[1200px]'>
                <div className='grid lg:grid-cols-2 gap-[50px]'>
                    <div>
                        <img src={basicImage} alt="Light House Basic" />
                        <div className='mt-[10px] flex gap-4'>
                            <button className='activeBtn'>Basic</button>
                            <button className='defaultBtn'>Flat Rate</button>
                            <button className='defaultBtn'>Medium</button>
                            <button className='defaultBtn'>Complex</button>
                            <button className='defaultBtn'>Super Complex</button>
                        </div>
                        <div className='mt-[16px]'>
                            <h6>Select Any of Four Services</h6>
                            <div className='grid lg:grid-cols-2 mt-[10px] gap-[10px]'>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={dropShadow} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Drop Shadow</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <img src={checkBox} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={reflection} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Drop Shadow</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <img src={checkBox} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={customShadow} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Drop Shadow</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <img src={checkBox} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
                                                <div className='flex gap-[10px] items-center'>
                                                    <div>
                                                        <figure>
                                                            <img src={keepShdow} alt="Light House Service" />
                                                        </figure>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Drop Shadow</p>
                                                        <p>(+$0.5 per image)</p>
                                                    </div>
                                                </div>
                                                <img src={checkBox} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[16px]'>
                            <h6>You Can Select One Or All</h6>
                            <div className='grid lg:grid-cols-2 mt-[10px] gap-[10px]'>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
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
                                                <img src={checkMark} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
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
                                                <img src={checkMark} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='additionalServiceContainer'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
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
                                                <img src={checkMark} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='additionalServiceContainer mt-[12px]'>
                                        <div className=''>
                                            <div className='flex gap-[40px] items-center'>
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
                                                <img src={checkMark} alt="LightHouse CheckBox" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pricingCalculator'>
                        <h6 className='font-medium text-[20px]'>Clipping Path</h6>
                        <h3 className='font-bold text-sky-600 text-[60px] -mt-[10px]'>$3.00/<span className='text-[40px]'>img</span></h3>
                        <h6 className='font-medium text-[20px] -mt-[10px]'>Complexity: <span className='font-bold text-sky-600'>Basic</span></h6>
                        {/* Pricing */}
                        <div className='mt-[30px]'>
                            <div className='flex justify-between font-medium'>
                                <p>Drop Shadow</p>
                                <p>$0.50</p>
                            </div>
                            <div className='flex justify-between font-medium mt-[20px]'>
                                <p>Margin/Crop</p>
                                <p>$0.50</p>
                            </div>
                            <div className='flex justify-between font-medium mt-[20px]'>
                                <p>Adjustment</p>
                                <p>$0.50</p>
                            </div>
                            <div className='flex justify-between font-medium mt-[20px]'>
                                <p>Retouch</p>
                                <p>$0.50</p>
                            </div>
                            <div className='flex justify-between font-bold mt-[20px]'>
                                <p>Per Image Sub-Total</p>
                                <p>$3.00</p>
                            </div>
                        </div>
                        {/* Pricing Calculation */}
                        <div className='mt-[40px]'>
                            <p className='text-[18px] font-medium'>Image Calculator</p>
                            <p className='mt-[6px] font-medium'>Select How Many Images You Need</p>
                            <div className='flex items-center justify-center gap-[15px]'>
                                <img src={minus} alt="Light House Minus Icon" />
                                <p className='font-bold text-[60px]'>1</p>
                                <img src={plus} alt="Light House Plus Icon" />
                            </div>
                        </div>
                        <div className='flex justify-between font-bold text-[30px]'>
                            <p>Total</p>
                            <p>$0.50</p>
                        </div>
                        <div className='mt-[30px]'>
                            <button className='bg-sky-600 px-14 py-4 w-full border rounded-lg text-white font-bold text-[20px]'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;