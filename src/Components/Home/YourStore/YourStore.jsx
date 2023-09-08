import React from 'react';
import video from "../../../assets/video/v1.mp4"

const YourStore = () => {
    const videoStyle = {
        borderRadius: "50px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'

    }
    return (
        <div className='my-20'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-left lg:text-left'>Your Store, Your Way</h1>
            <div>
                <video width="100%" style={videoStyle} controls className='p-10 rounded-2xl'>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <div>
                        <h1>Build an online sttorefront</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourStore;