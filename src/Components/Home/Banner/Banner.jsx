import React from 'react';
import Lottie from "lottie-react";
import lottieBanner from "../../../assets/LottieFiles/bannerSide.json"

const Banner = () => {
    return (
        <div id='homeBannerDiv' className='p-10 flex w-full flex-row justify-evenly items-center'>
            <div className='w-full md:w-[60%] lg:w-[50%] mx-auto p-2 md:p-5 lg:p-10'>
                <button className='bg-transparent py-5 text-md md:text-lg lg:text-xl w-full md:w-[70%] lg:w-[75%] font-semibold text-white hover:bg-gray-100 hover:text-black transition-all duration-700 px-10 rounded-full border-2 border-white'>
                    <a href="">Watch the Aurapreneur Story</a>
                </button>
                <h1 className='my-5 text-white lg:text-7xl md:text-4xl text-2xl font-bold text-center md:text-left lg:text-left' >
                    The global commerce platform
                </h1>
                <p className='text-white my-5 text-md md:text-xl lg:text-2xl font-semibold text-center md:text-left lg:text-left'>
                    Build your business with Shopify to sell online, offline, and everywhere in between.


                </p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Your Email Address" className="input w-full md:w-[60%] lg:w-[70%] mx-auto bg-white input-bordered" />
                        <button className="btn w-28 md:w-36 lg:w-44">
                            Start Free Trail
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[40%] lg:w-[50%] mx-auto hidden md:block lg:block'>
                <div className='rounded-md'>
                    <Lottie animationData={lottieBanner} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;