import React from 'react';
import arrow from "../../../assets/Icons/right.png";
import Flexible from "../../../assets/Images/Flexible.jpg";
import remove from "../../../assets/Icons/remove.png";
import archive from "../../../assets/Icons/archive.png";
import discount from "../../../assets/Icons/discount.png";
import note from "../../../assets/Icons/notes.png"
import send from "../../../assets/Icons/send.png";
import ship from "../../../assets/Icons/ship.png";

const FlexiblePoint = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between p-10 my-10 md:my-14 lg:my-20'>

            <div className='w-full md:w-[50%] lg:w-[40%] p-2 md:p-3 lg:p-5 my-10'>
                <p className='text-xl text-white text-center md:text-left lg:text-left my-5'>POINT OF SALE</p>
                <h1 className='text-2xl text-white my-5 md:text-3xl lg:text-4xl text-center md:text-left lg:text-left'>
                    Flexible point of sale to power your retail store
                </h1>
                <p className='text-lg text-center md:text-left lg:text-left'>
                    Back your business with Shop Pay—the one-click checkout that's built to convert.
                </p>
                <div className='flex justify-between items-center border-2 border-b-white border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] py-5'>
                    <h1 className='text-xl font-semibold text-white'><a href="#">Seize Every Sale</a></h1>
                    <div className='w-5 h-5'>
                        <img className='w-full h-full' src={arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[50%] lg:w-[40%] my-10'>
                <div className="relative">
                    <div className='hidden md:hidden lg:block'>
                        <img src={Flexible} className="w-full h-full shadow-2xl shadow-blue" alt="" />
                    </div>

                    {/* Overlay div */}
                    <div className="lg:absolute md:static static w-full h-full lg:w-72 md:w-80 md:h-fit  lg:h-fit   -my-2 md:-my-2 lg:-my-5 -ml-0 md:-ml-0 lg:-ml-40   inset-0 bg-black rounded-2xl shadow-2xl p-5 bg-opacity-40">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='p-2 rounded-md bg-[#6d3f38] h-24 flex flex-col items-start justify-between'>
                                <div className='w-4 h-4 '>
                                    <img src={remove} className='w-full h-full' alt="" />
                                </div>
                                <h1 className='text-sm font-semibold'>Remove Customer</h1>
                            </div>
                            <div className='p-2 rounded-md bg-[#1c364f] h-24 flex flex-col items-start justify-between'>
                                <div className='w-4 h-4 '>
                                    <img src={archive} className='w-full h-full' alt="" />
                                </div>
                                <h1 className='text-sm font-semibold'>Add custom sale</h1>
                            </div>
                            <div className='p-2 rounded-md bg-[#2b4437] h-24 flex flex-col items-start justify-between'>
                                <div className='w-4 h-4 '>
                                    <img src={discount} className='w-full h-full ' alt="" />
                                </div>
                                <h1 className='text-sm font-semibold'>Add discount</h1>
                            </div>
                            <div className='p-2 rounded-md bg-[#1c364f] h-24 flex flex-col items-start justify-between'>
                                <div className='w-4 h-4 '>
                                    <img src={note} className='w-full h-full' alt="" />
                                </div>
                                <h1 className='text-sm font-semibold'>Add note</h1>
                            </div>
                            <div className='p-2 rounded-md bg-[#1c364f] h-24 flex flex-col items-start justify-between'>
                                <div className='w-4 h-4 '>
                                    <img src={send} className='w-full h-full' alt="" />
                                </div>
                                <h1 className='text-sm font-semibold'>Send cart</h1>
                            </div>
                            <div className='p-2 rounded-md bg-[#1c364f] h-24 flex flex-col items-start justify-between'>
                                <div className='w-4 h-4 '>
                                    <img src={ship} className='w-full h-full' alt="" />
                                </div>
                                <h1 className='text-sm font-semibold'>Deliver product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlexiblePoint;