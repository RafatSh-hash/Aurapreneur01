import React from 'react';
import streamline from "../../../assets/Images/streamLine.jpg";
import home from "../../../assets/Icons/home.png";
import graph from "../../../assets/Icons/graph1.png";
import box from "../../../assets/Icons/box.png";

const Streamline = () => {
    return (

        <div className='my-10 p-10'>
            <div className='w-full md:w-[60%] lg:w-[40%]'>
                <p className='text-xl text-white text-center md:text-left lg:text-left my-5'>CENTRALIZED BUSINESS OPERATIONS</p>
                <h1 className='text-2xl text-white my-5 md:text-3xl lg:text-4xl text-center md:text-left lg:text-left'>
                    Streamline your back office
                </h1>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center '>

                <div className='w-full md:w-[50%] lg:w-[50%]'>
                    <div className='w-full h-full lg:w-[80%] lg:h-[80%] md:w-[90%] md:h-[90%] flex flex-col items-center justify-center transition-all duration-500 hover:scale-105'>
                        <img src={streamline} className='w-full h-full shadow-2xl' alt="" />
                    </div>
                </div>
                <div className='w-full md:w-[50%] lg:w-[50%]'>
                    <div className=' flex flex-row justify-center items-start gap-5 pb-3 my-5'>
                        <div className='w-[10%]'>
                            <div className='w-14 h-14 p-2 rounded-full bg-purple-200 bg-opacity-60'>
                                <div className='w-10 h-10 p-1 bg-purple-300 bg-opacity-90 rounded-full'>
                                    <img src={graph} className='p-2 w-full h-full' alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='w-[90%] border-2 border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] border-b-white'>
                            <h1 className='text-xl text-white'>Oversee your operations</h1>
                            <p className='text-base font-semibold my-3'>
                                Manage inventory, track payments, and view real-time business insights — all in one place, so you can focus on building your business.

                            </p>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-center items-start gap-5 pb-3 my-5'>
                        <div className='w-[10%]'>
                            <div className='w-14 h-14 p-2 rounded-full bg-slate-200 bg-opacity-60'>
                                <div className='w-10 h-10 p-1 bg-slate-300 bg-opacity-90 rounded-full'>
                                    <img src={box} className='p-2 w-full h-full' alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='w-[90%] border-2 border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] border-b-white'>
                            <h1 className='text-xl text-white'>Fulfill every order</h1>
                            <p className='text-base font-semibold my-3'>

                                Get your products where they need to be with integrated inventory management, streamlined returns, and a dedicated shipping and fulfillment network.


                            </p>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-center items-start gap-5 pb-3 my-5'>
                        <div className='w-[10%]'>
                            <div className='w-14 h-14 p-2 rounded-full bg-blue-200 bg-opacity-60'>
                                <div className='w-10 h-10 p-1 bg-blue-300 rounded-full bg-opacity-70'>
                                    <img src={home} className='p-2 w-full h-full' alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='w-[90%] border-2 border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] border-b-white'>
                            <h1 className=' text-xl text-white'>Manage your money where you make it</h1>
                            <p className='text-base font-semibold my-3'>

                                Manage your business finances all from one place with money management and flexible funding designed with entrepreneurs in mind.



                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Streamline;

