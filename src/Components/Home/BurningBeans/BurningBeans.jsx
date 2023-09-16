import React from 'react';
import video from "../../../assets/video/v1.mp4";
import reviewer from "../../../assets/Images/reviewer1.jpg";
import reviewer2 from "../../../assets/Images/reviewer2.jpg";
import reviewer3 from "../../../assets/Images/reviewer3.jpg";
import reviewer4 from "../../../assets/Images/reviewer4.jpg";
import comma from "../../../assets/Icons/quote.png"



const BurningBeans = () => {
    const videoStyle = {

        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'

    }
    return (
        <div className='p-10 '>
            <video width="100%" style={videoStyle} controls className='rounded-md'>
                <source src={video} type="video/mp4" />

            </video>
            <div className='my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='bg-white bg-opacity-10 text-white p-5 rounded-md shadow-xl transition-all duration-500 hover:bg-opacity-20 card overflow-hidden'>
                        <div className='flex justify-between items-center'>
                            <div className='w-24 h-24'>
                                <img src={reviewer3} className='img w-full h-full rounded-full transition-all duration-500 hover:scale-105' alt="" />
                            </div>
                            <div>
                                <h1 className='Position bg-white bg-opacity-30 text-white p-2 rounded-md'>
                                    Entrepreneur
                                </h1>
                            </div>
                        </div>

                        <h1 className='font-semibold my-5'>
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis accusantium facere consectetur assumenda mollitia fugit totam earum unde sint officiis perferendis, exercitationem voluptatibus deserunt, obcaecati ipsam eveniet laudantium adipisci."
                        </h1>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-semibold'>Alex Green</h1>
                            <div className='w-14 h-14 rounded-full'>
                                <img className='w-full h-full' src={comma} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white bg-opacity-10 text-white p-5 rounded-md shadow-xl transition-all duration-500 hover:bg-opacity-20 card over overflow-hidden'>
                        <div className='flex justify-between items-center'>
                            <div className='w-24 h-24'>
                                <img src={reviewer2} className='img w-full h-full rounded-full transition-all duration-500 hover:scale-105' alt="" />
                            </div>
                            <div>
                                <h1 className='Position bg-white bg-opacity-30 text-white p-2 rounded-md'>
                                    Entrepreneur
                                </h1>
                            </div>
                        </div>

                        <h1 className='font-semibold my-5'>
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis accusantium facere consectetur assumenda mollitia fugit totam earum unde sint officiis perferendis, exercitationem voluptatibus deserunt, obcaecati ipsam eveniet laudantium adipisci."
                        </h1>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-semibold'>Alex Green</h1>
                            <div className='w-14 h-14 rounded-full'>
                                <img className='w-full h-full' src={comma} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white bg-opacity-10 text-white p-5 rounded-md shadow-xl transition-all duration-500 hover:bg-opacity-20 card overflow-hidden'>
                        <div className='flex justify-between items-center'>
                            <div className='w-24 h-24'>
                                <img src={reviewer} className='img w-full h-full rounded-full transition-all duration-500 hover:scale-105' alt="" />
                            </div>
                            <div>
                                <h1 className='Position bg-white bg-opacity-30 text-white p-2 rounded-md'>
                                    Entrepreneur
                                </h1>
                            </div>
                        </div>

                        <h1 className='font-semibold my-5'>
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis accusantium facere consectetur assumenda mollitia fugit totam earum unde sint officiis perferendis, exercitationem voluptatibus deserunt, obcaecati ipsam eveniet laudantium adipisci."
                        </h1>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-semibold'>Alex Green</h1>
                            <div className='w-14 h-14 rounded-full'>
                                <img className='w-full h-full' src={comma} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurningBeans;