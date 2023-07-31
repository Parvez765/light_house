import React, { useState } from 'react';
import "./FAQ.css"
import faqs from "../../data/faq"
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

const FAQ = () => {
    // Create a state to manage the visibility of each individual FAQ item
    const [faqStates, setFaqStates] = useState(faqs.map(() => false));

    // Function to toggle the visibility of a specific FAQ item
    const handleOnClick = (index) => {
        setFaqStates(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }
    
    return (
        <div className='faqContainer'>
            <div className='container mx-auto text-center '>
                <h1 className='text-[25px] lg:text-[35px] font-bold'>Frequently asked questions</h1>
                <p>Everything you need to know about the product and billing.</p>
                <div className='mt-[50px] text-left'>
                    {faqs.map((faq, index) => (
                        <div key={index} className=" w-[800px] mx-auto">
                            <div className='flex justify-between items-center cursor-pointer' onClick={() => handleOnClick(index)}>
                                <h2 className='font-bold text-[18px] mt-[20px]'>
                                    {faq.question}
                                </h2>
                                {faqStates[index] ? <FaAngleUp/> : <FaAngleDown/>}
                            </div>
                            {faqStates[index] && <p className='mt-[8px] font-medium'>{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
