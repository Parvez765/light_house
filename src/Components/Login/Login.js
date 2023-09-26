import React from 'react';
import lightHouseLogo from "../../../src/Assets/logo.png"
import styles from "./Login.module.css"
import loginImage from "../../../src/Assets/login/login-01.jpg"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto px-3 my-10'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-center justify-center'>
                <div>
                    <div>
                        <img src={lightHouseLogo} alt="Light House Logo" className='w-[250px] mb-[60px] block mx-auto'/>
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[30px] text-center'>Log into your account</h1>
                        <input type="email" className={`${styles.inputContainer}`} placeholder='Email'></input>
                        <input type="password" className={`${styles.inputContainer} mt-[12px]`} placeholder='Password'/>
                        <p className='mt-[12px] mb-[12px] text-[#0284c7] text-right cursor-pointer'>Forget Password?</p>
                       <div><button className={`${styles.signInButton}`}>Log In</button></div>
                    </div>
                    <Link to="/signup"><p className='mt-[12px] mb-[12px] text-[#0284c7] text-center cursor-pointer font-semibold'>Don't Have Account Yet? Sign Up</p></Link>
                </div>
                <div>
                <img src={loginImage} alt="Light House Logo"/>
                </div>
           </div>
        </div>
    );
};

export default Login;