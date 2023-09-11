import React from 'react';
import "./Hero.css"
import heroImages from "../../Assets/HowItWorks/Hero/heroSection.jpg"

const Hero = () => {
    return (
        <section className='container mx-auto p-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <h1 className='text-[60px] md:text-[80px] font-bold leading-[60px] lg:leading-[80px]'>Let's Explore With Us</h1>
                    <p className='mt-[10px]'>With our pro photo editors, we provide 100% hand-drawn, accurate, professional, pixel-perfect clipping path services to top global e-commerce, fashion, accessories and apparel businesses around the world.<br/><br/>
                        Starting at $1 per image. you can get large batches of images manually edited faster and cheaper in as little as 1 hour.</p>
                    <div>
                        <button className='tryUSFree'>Try us Free</button>
                    </div>
                </div>
                <div>
                    <figure>
                        <img src={heroImages} alt="Light House How It Works" className='border rounded-lg' />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;