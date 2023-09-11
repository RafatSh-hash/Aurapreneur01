import React from 'react';
import arrow from "../../../assets/Icons/right.png"

const Help = () => {
    return (
        <div className='my-10 bg-black p-20'>
            <h1 className='text-center text-xl text-[#54ec9b] font-semibold'>AURAPRENEUR</h1>
            <h1 className='text-center text-4xl font-semibold my-5'>The help you need, <br />
                when you need it</h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                <div className='p-5 text-white rounded-md bg-[#0a0a0a]'>
                    <h1 className='text-4xl my-5 text-left text-white'>Blog</h1>
                    <p className='text-xl my-5 text-left text-white'>Get all the marketing and business strategy tips you need to help you run an online business.</p>
                    <div className='w-28 bg-white bg-opacity-50 py-2 px-3 rounded-full flex justify-between items-center text-white'>
                        <h1>Read</h1>
                        <div className='w-4 h-4 '>
                            <img src={arrow} className='w-full h-full' alt="" />
                        </div>
                    </div>
                </div>
                <div className='p-5 text-white rounded-md bg-[#0a0a0a]'>
                    <h1 className='text-4xl my-5 text-left text-white'>  Online Courses</h1>
                    <p className='text-xl my-5 text-left text-white'>


                        Learn tried-and-tested business tips with instant access to lessons from successful entrepreneurs.

                    </p>
                    <div className='w-28 bg-white bg-opacity-50 py-2 px-3 rounded-full flex justify-between items-center text-white'>
                        <h1>Learn</h1>
                        <div className='w-4 h-4 '>
                            <img src={arrow} className='w-full h-full' alt="" />
                        </div>
                    </div>
                </div>

                <div className='p-5 text-white rounded-md bg-[#0a0a0a]'>
                    <h1 className='text-4xl my-5 text-left text-white'>Community</h1>
                    <p className='text-xl my-5 text-left text-white'>Connect with a community of brands, partners, and fellow marchants who understands Aurapreneur.</p>
                    <div className='w-28 bg-white bg-opacity-50 py-2 px-3 rounded-full flex justify-between items-center text-white'>
                        <h1>Discuss</h1>
                        <div className='w-4 h-4 '>
                            <img src={arrow} className='w-full h-full' alt="" />
                        </div>
                    </div>
                </div>
                <div className='p-5 text-white rounded-md bg-[#0a0a0a]'>
                    <h1 className='text-4xl my-5 text-left text-white'>help Center</h1>
                    <p className='text-xl my-5 text-left text-white'>Find Answers with a dedicated helpdesk resource of articles and vides from our Aurapreneur Team</p>
                    <div className='w-28 bg-white bg-opacity-50 py-2 px-3 rounded-full flex justify-between items-center text-white'>
                        <h1>Get Help</h1>
                        <div className='w-4 h-4 '>
                            <img src={arrow} className='w-full h-full' alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Help;