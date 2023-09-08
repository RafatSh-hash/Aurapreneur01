import React from 'react';
import arrow from "../../../assets/Icons/right.png";
import customer1 from "../../../assets/Images/customer1.jpg";
import customer2 from "../../../assets/Images/customer2.jpg";
import customer3 from "../../../assets/Images/customer3.jpg";

const Sell = () => {
    return (
        <div className='p-10 w-'>
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
            <div className='flex flex-col md:flex-row lg:flex-row flex-wrap items-center justify-evenly my-10 w-full '>
                <div className="relative lg:w-80 md:w-72 w-60 h-80 bg-cover bg-center bg-no-repeat hover:scale-110 transition-transform duration-500 my-5" style={{ backgroundImage: `url(${customer1})` }}>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity">
                        <p className='text-center text-xl p-5'>Build Your business and earn for your loved ones</p>
                    </div>
                </div>
                <div className="relative lg:w-80 md:w-72 w-60 h-80 bg-cover bg-center bg-no-repeat hover:scale-110 transition-transform duration-500 my-5" style={{ backgroundImage: `url(${customer2})` }}>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity">
                        <p className='text-center text-xl p-5'>Spread your start-up to every corner</p>
                    </div>
                </div>
                <div className="relative lg:w-80 md:w-72 w-60 h-80 bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-500 my-5" style={{ backgroundImage: `url(${customer3})` }}>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity">
                        <p className='text-center text-xl p-5'>Happy customers happy business</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sell;