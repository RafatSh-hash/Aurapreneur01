import React from 'react';
import arrow from "../../../assets/Icons/right.png";
import hash from "../../../assets/Icons/hashtag.png";
import at from "../../../assets/Icons/at.png";
import graph from "../../../assets/Icons/graph.png"
import Lottie from 'lottie-react';
import management from "../../../assets/LottieFiles/engage.json"

const FullFunnel = () => {
    return (
        <div className='p-10'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>
                <div className='w-full md:w-[60%] lg:w-[40%]'>
                    <p className='text-xl text-white text-center md:text-left lg:text-left my-5'>BUILT-IN MARKETING TOOLS</p>
                    <h1 className='text-2xl text-white my-5 md:text-3xl lg:text-4xl text-center md:text-left lg:text-left'>
                        From first touch to full funnel
                    </h1>
                </div>
                <div className='w-full md:w-[40%] lg:w-[40%]'>
                    <div className='flex justify-between items-center border-2 border-b-white border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] py-5'>
                        <h1 className='text-xl font-semibold text-white'><a href="#">Seize Every Sale</a></h1>
                        <div className='w-5 h-5'>
                            <img className='w-full h-full' src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center my-10'>
                <div className='w-full md:w-[50%] lg:w-[50%]'>
                    <div className=' flex flex-row justify-center items-start gap-5 pb-3 my-5'>
                        <div className='w-[10%]'>
                            <div className='w-14 h-14 p-2 rounded-full bg-purple-200 bg-opacity-60'>
                                <div className='w-10 h-10 p-1 bg-purple-300 bg-opacity-90 rounded-full'>
                                    <img src={hash} className='p-2 w-full h-full' alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='w-[90%] border-2 border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] border-b-white'>
                            <h1 className='text-xl text-white'>Reach new leads</h1>
                            <p className='text-base font-semibold my-3'> Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.</p>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-center items-start gap-5 pb-3 my-5'>
                        <div className='w-[10%]'>
                            <div className='w-14 h-14 p-2 rounded-full bg-slate-200 bg-opacity-60'>
                                <div className='w-10 h-10 p-1 bg-slate-300 bg-opacity-90 rounded-full'>
                                    <img src={at} className='p-2 w-full h-full' alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='w-[90%] border-2 border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] border-b-white'>
                            <h1 className='text-xl text-white'>Engage with customers</h1>
                            <p className='text-base font-semibold my-3'>
                                Build custom email campaigns, set automations to serve every segment, and connect with customers on the go with integrated messaging tools.

                            </p>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-center items-start gap-5 pb-3 my-5'>
                        <div className='w-[10%]'>
                            <div className='w-14 h-14 p-2 rounded-full bg-blue-200 bg-opacity-60'>
                                <div className='w-10 h-10 p-1 bg-blue-300 rounded-full bg-opacity-70'>
                                    <img src={graph} className='p-2 w-full h-full' alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='w-[90%] border-2 border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] border-b-white'>
                            <h1 className=' text-xl text-white'>Data you can build on</h1>
                            <p className='text-base font-semibold my-3'>
                                Take control of your customer data to build custom audiences and explore the customer insights that drive ongoing growth.

                            </p>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-[50%] lg:w-[50%]'>
                    <Lottie animationData={management} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default FullFunnel;

