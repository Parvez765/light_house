import React from 'react';
import lightHouseLogo from "../../../src/Assets/logo.png"
import styles from "./SignUp.module.css"
import signupImage from "../../../src/Assets/signup-01.png"
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container mx-auto px-3 my-10'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-center justify-center'>
                <div>
                    <div>
                        <img src={lightHouseLogo} alt="Light House Logo" className='w-[250px] mb-[60px] block mx-auto'/>
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[30px] text-center'>Create your account</h1>
                        <div className='flex gap-6'>
                            <input type="text" className={`${styles.inputContainer} mt-[12px]`} placeholder='First Name'/>
                            <input type="text" className={`${styles.inputContainer} mt-[12px]`} placeholder='Last Name'/>
                        </div>
                        <input type="email" className={`${styles.inputContainer}  mt-[12px]`} placeholder='Email'></input>
                        <input type="number" className={`${styles.inputContainer}  mt-[12px]`} placeholder='Phone Number'></input>
                        <div className='flex gap-6'>
                            <input type="password" className={`${styles.inputContainer} mt-[12px]`} placeholder='Password'/>
                            <input type="password" className={`${styles.inputContainer} mt-[12px]`} placeholder='Confirm Password'/>
                        </div>
                        {/* <p className='mt-[12px] mb-[12px] text-[#0284c7] text-right cursor-pointer'>Forget Password?</p> */}
                       <div><button className={`${styles.signInButton}`}>Sign Up</button></div>
                    </div>
                    <Link to="/login"><p className='mt-[12px] mb-[12px] text-[#0284c7] text-center cursor-pointer font-semibold'>Already have an account? Log In</p></Link>
                </div>
                <div>
                <img src={signupImage} alt="Light House Logo"/>
                </div>
           </div>
        </div>
    );
};

export default SignUp;