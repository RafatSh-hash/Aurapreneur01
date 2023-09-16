import React from 'react';
import overlay from "../../../../assets/Icons/layers.png";
import infinity from "../../../../assets/Icons/infinity.png";
import avatar from "../../../../assets/Icons/avatar.png";
import code from "../../../../assets/Icons/code.png";
import store from "../../../../assets/Icons/store.png";

const Explore = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-2xl text-center md:text-left lg:text-left text-white font-semibold'>EXPLORE THE WORLD'S LARGEST COMMUNITY</h1>
            <div className='my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10'>
                <div className='bg-opacity-25 transition-all duration-500 hover:scale-110 backdrop-blur-lg  inset-0 bg-blue-600 p-5 rounded-xl shadow-2xl border-2 border-green-300'>
                    <div className='w-14 h-14 p-2 rounded-full bg-green-200'>
                        <div className='w-full h-full p-2 bg-green-300 rounded-full'>
                            <img src={overlay} className='w-full h-full' alt="" />
                        </div>
                    </div>
                    <h1 className='text-xl text-white  my-2'>Enterprise</h1>
                    <p className='text-white'>The modern, composable stack for enterprise retail</p>
                </div>
                <div className='bg-opacity-25 backdrop-blur-lg  inset-0 bg-blue-600 p-5 rounded-xl  shadow-2xl border-2 border-red-300'>
                    <div className='w-14 h-14 p-2 rounded-full bg-red-200'>
                        <div className='w-full h-full p-2 bg-red-300 rounded-full'>
                            <img src={infinity} className='w-full h-full' alt="" />
                        </div>
                    </div>
                    <h1 className='text-xl text-white  my-2'>Plus</h1>
                    <p className='text-white'>A commerce solution for growing digital brands</p>
                </div>
                <div className='bg-opacity-25 backdrop-blur-lg  inset-0 bg-blue-600 p-5 rounded-xl shadow-2xl border-2 border-green-300'>
                    <div className='w-14 h-14 p-2 rounded-full bg-green-200'>
                        <div className='w-full h-full p-2 bg-green-300 rounded-full'>
                            <img src={avatar} className='w-full h-full' alt="" />
                        </div>
                    </div>
                    <h1 className='text-xl text-white  my-2'>Partners</h1>
                    <p className='text-white'>Offer your expertise all over the world.</p>
                </div>
                <div className='bg-opacity-25 backdrop-blur-lg  inset-0 bg-blue-600 p-5 rounded-xl shadow-2xl border-2 border-red-300'>
                    <div className='w-14 h-14 p-2 rounded-full bg-red-200'>
                        <div className='w-full h-full p-2 bg-red-300 rounded-full'>
                            <img src={code} className='w-full h-full' alt="" />
                        </div>
                    </div>
                    <h1 className='text-xl text-white  my-2'>Developers</h1>
                    <p className='text-white'>Build the future with our powerful API</p>
                </div>
                <div className='bg-opacity-25 backdrop-blur-lg  inset-0 bg-blue-600 p-5 rounded-xl shadow-2xl border-2 border-green-300'>
                    <div className='w-14 h-14 p-2 rounded-full bg-green-200'>
                        <div className='w-full h-full p-2 bg-green-300 rounded-full'>
                            <img src={store} className='w-full h-full' alt="" />
                        </div>
                    </div>
                    <h1 className='text-xl text-white  my-2'>Retail Stores</h1>
                    <p className='text-white'>The complete On-person selling system</p>
                </div>
            </div>
        </div>
    );
};

export default Explore;
