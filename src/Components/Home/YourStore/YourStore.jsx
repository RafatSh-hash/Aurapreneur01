import React from 'react';
import video from "../../../assets/video/v1.mp4"

const YourStore = () => {
    const videoStyle = {
        borderRadius: "50px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'

    }
    return (
        <div className='my-20 p-10'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-left lg:text-left'>Your Store, Your Way</h1>
            <div>
                <video width="100%" style={videoStyle} controls className='p-10 rounded-2xl'>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 p-2 md:p-5 lg:p-5'>
                    <div className='bg-transparent p-5 border-2 border-t-white border-b-[#0b1221] border-r-[#0b1221] border-l-[#0b1221]'>
                        <h1 className='text-xl text-white my-5 font-semibold'>Build an online sttorefront</h1>
                        <p className='text-lg text-white mb-3'>Bring your vision to life with our drag-and-srop store creator. No coding expertise required - just your next big idea.</p>
                        <p className='my-3 text-white text-lg font-semibold'>
                            <a href="#" className='underline'>Online Store builder</a>
                        </p>
                    </div>
                    <div className='bg-transparent p-5 border-4 border-t-[#43f6d5] border-b-[#0b1221] border-r-[#0b1221] border-l-[#0b1221]'>
                        <h1 className='text-xl text-white my-5 font-semibold'>Craft the brand you want</h1>
                        <p className='text-lg text-white mb-3'>Select from customizable templates created by a community of world-class designers.

                        </p>
                        <p className='my-3 text-white text-lg font-semibold'>
                            <a href="#" className='underline'>Theme Store</a>
                        </p>
                    </div>
                    <div className='bg-transparent p-5 border-2 border-t-[#f9fafb] border-b-[#0b1221] border-r-[#0b1221] border-l-[#0b1221]'>
                        <h1 className='text-xl text-white my-5 font-semibold'>Level up with apps</h1>
                        <p className='text-lg text-white mb-3'>Add more features and functionality to your online store with apps built by trusted Auraprenuer developers.

                        </p>
                        <p className='my-3 text-white text-lg font-semibold'>
                            <a href="#" className='underline'>Auraprenuer App Store</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourStore;