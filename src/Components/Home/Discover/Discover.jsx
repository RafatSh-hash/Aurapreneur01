import Lottie from 'lottie-react';
import React from 'react';
import worldCompanies from "../../../assets/LottieFiles/WC1.json"
import Blob from './Blob';
import Explore from './Explore/Explore';

const Discover = () => {
    return (
        <div className='container'>
            <Blob></Blob>
            <div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center p-5 mt-14">
            <div className="w-full md:w-[50%] lg:w-[50%]">
                <Lottie animationData={worldCompanies} loop={true} />
                
            </div>
            
            <div className="w-full md:w-[50%] lg:w-[50%]">
                <h1 className="text-4xl text-white">
                    Discover why millions of entrepreneurs chose Shopify to build their business <span>— from hello world to IPO.</span> </h1>
                   <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
                    <div className="border-4 border-l-white border-r-[#0b1221] border-t-[#0b1221] border-b-[#0b1221] p-5"><h1 className="text-white text-3xl">Millions</h1>
                    <p>of marchant around the world</p></div>
                    <div className="border-4 border-l-white border-r-[#0b1221] border-t-[#0b1221] border-b-[#0b1221] p-5"><h1 className="text-white text-3xl">172+</h1>
                    <p>Countries respresented</p></div>
                    <div className="border-4 border-l-white border-r-[#0b1221] border-t-[#0b1221] border-b-[#0b1221] p-5"><h1 className="text-white text-3xl">10% +</h1>
                    <p>of total US E-commerce</p></div>
                    <div className="border-4 border-l-white border-r-[#0b1221] border-t-[#0b1221] border-b-[#0b1221] p-5"><h1 className="text-white text-3xl"><sup className="text-sm">$</sup>444b+ <sup className="text-sm">USD</sup></h1>
                    <p>global economic activity</p></div>
                   </div>
            </div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl p-2 text-center font-semibold text-white">Worldwide operations success rate <span className='bg-gradient-to-r from-[#e4f6f6] via-[#cfebfe] to-[#f0edfe] rounded-md p-2 text-black'>95%+</span></h1>
            </div>
            <div className='px-10'>
            <Explore></Explore>
            </div>
        </div>
    );
};

export default Discover;