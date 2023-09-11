import { space } from 'postcss/lib/list';
import React from 'react';
import user from "../../../assets/Images/user1.jpg";
import user2 from "../../../assets/Images/user2.jpg";
import user3 from "../../../assets/Images/user3.jpg";
import user4 from "../../../assets/Images/user4.jpg";
const Meet = () => {




    return (
        <div>
            <div className="bg-blue-500 text-white ">
                <div className="marquee-container">
                    <div className="marquee w-full overflow-visible text-xl font-semibold">
                        <span className="px-2 mx-5">START YOUR FREE TRIAL</span>


                        <span className="px-2 mx-5">START YOUR FREE TRIAL</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-evenly items-center my-20 p-10
            '>
                <div className='w-full md:w-[25%] lg:w-[25%] '>
                    <div className='float-none md:float-none lg:float-right lg:w-[80%] md:w-full w-full my-2'>
                        <div className='w-2/3 h-full float-none md:float-none lg:float-right'>
                            <img className='w-full h-full  rounded-2xl' src={user} alt="" />
                        </div>
                    </div>
                    <div className='float-none md:float-none lg:float-right lg:w-[100%] md:w-full w-full my-2'>
                        <div className='w-2/3 h-full float-none md:float-none lg:float-left'>
                            <img className='w-full h-full  rounded-2xl' src={user2} alt="" />
                        </div>
                    </div>
                    <div className='float-none md:float-none lg:float-right lg:w-[80%] md:w-full w-full my-2'>
                        <div className='w-2/3 h-full float-none md:float-none lg:float-right'>
                            <img className='w-full h-full  rounded-2xl' src={user3} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[40%] lg:w-[50%] text-center my-5 '>
                    <p>MERCHANT OBSESSED</p>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed'>
                        Meet
                        the people
                        who decided to lift themselves up with <br />
                        <span className='text-transparent text-2xl md:text-3xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Aurapreneur</span>
                    </h1>
                </div>
                <div className='w-full md:w-[25%] lg:w-[25%] '>
                    <div className='float-none md:float-none lg:float-left lg:w-[80%] md:w-full w-full my-2'>
                        <div className='w-2/3 h-full float-none md:float-none lg:float-left'>
                            <img className='w-full h-full  rounded-2xl' src={user3} alt="" />
                        </div>
                    </div>
                    <div className='float-none md:float-none lg:float-right lg:w-[100%] md:w-full w-full my-2'>
                        <div className='w-2/3 h-full float-none md:float-none lg:float-right'>
                            <img className='w-full h-full  rounded-2xl' src={user2} alt="" />
                        </div>
                    </div>
                    <div className='float-none md:float-none lg:float-left lg:w-[80%] md:w-full w-full my-2'>
                        <div className='w-2/3 h-full float-none md:float-none lg:float-left'>
                            <img className='w-full h-full  rounded-2xl' src={user} alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Meet;