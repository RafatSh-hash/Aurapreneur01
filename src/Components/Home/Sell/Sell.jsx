import React from 'react';
import arrow from "../../../assets/Icons/right.png"

const Sell = () => {
    return (
        <div className='p-10'>
            <div className='flex flex-col md:flex-col lg:flex-row justify-between items-center '>
                <div className='w-96 mb-0 md:mb-10 lg:mb-10'>
                    <p className='text-lg text-center md:text-center lg:text-left'>SALES CHANNELS</p>
                    <h1 className='text-3xl md:text-4xl text-center md:text-center lg:text-left lg:text-5xl font-bold text-white'>
                        Sell to every buyer, everywhere
                    </h1>
                </div>
                <div className='w-96'>
                    <p className='tex-sm my-5 text-center md:text-center lg:text-left'>
                        Sell online, in person, and around the world with the marketing tools, social integrations, and sales channels you need to get your products in front of customers.
                    </p>
                    <div className='flex justify-between items-center w-96 border-2 border-b-white border-t-[#0b1221] border-l-[#0b1221] border-r-[#0b1221] py-5'>
                        <h1 className='text-xl font-semibold text-white'><a href="#">Start selling</a></h1>
                        <div className='w-5 h-5'>
                            <img className='w-full h-full' src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Sell;