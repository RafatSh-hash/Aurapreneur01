import React, { useEffect, useRef, useState } from 'react';
import Logo from "../../assets/Logo.png";
import "./Navigation.css";
import start from "../../assets/Icons/start.png";
import sell from "../../assets/Icons/sell.png";
import market from "../../assets/Icons/market.png";
import manage from "../../assets/Icons/manage.png";

const Navigation = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);

    }



    return (
        <div className=" w-full py-2">
            <div className=" mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <img src={Logo} className="w-40" alt="" />
                    </div>
                    {/* <div className="hidden sm:block md:hidden lg:block">
                        <ul className="flex space-x-6">
                        <li><a className="block py-2 font-semibold text-white w-32 my-3" href="/">Solutions</a></li>
                        <li><a className="block py-2 font-semibold text-white w-32 my-3" href="#">Pricing</a></li>
                        <li><a className="block py-2 font-semibold text-white w-32 my-3 " href="#">Resources</a></li>
                           
                        </ul>
                    </div> */}
                    <div className="hidden sm:block md:hidden lg:block">
                        <ul className="flex space-x-6">
                            <li><a className="block py-2 font-semibold text-white w-32 my-3" href="/">Solutions</a>
                                <div className="hover-info">
                                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                       <div>
                                       <div className='flex flex-row justify-center items-center py-3'>
                                            <div className='w-14 h-14 rounded-full'>
                                                <img src={start} className='w-full h-full ' alt="" />
                                            </div>
                                            <h1 className='text-xl mx-5'>Start</h1>
                                        </div>
                                        <hr className='my-3' />
                                        <div className='p-5'>
                                            <ul className='text-black'>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Start Your Business</h1></a>
                                                    <a href="#"><p className='text-sm'>Build Your Brand</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Create Your Website</h1></a>
                                                    <a href="#"><p className='text-sm'>Online store editor</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Customize Your Store</h1></a>
                                                    <a href="#"><p className='text-sm'>Store themes</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    <a href="#"><p className='text-sm'>Domains & Hosting</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                            </ul>
                                        </div>
                                       </div>
                                       <div>
                                       <div className='flex flex-row justify-center items-center py-3'>
                                            <div className='w-14 h-14 rounded-full'>
                                                <img src={sell} className='w-full h-full ' alt="" />
                                            </div>
                                            <h1 className='text-xl mx-5'>Sell</h1>
                                        </div>
                                        <hr className='my-3' />
                                        <div className='p-5'>
                                            <ul className='text-black'>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Start Your Business</h1></a>
                                                    <a href="#"><p className='text-sm'>Build Your Brand</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Create Your Website</h1></a>
                                                    <a href="#"><p className='text-sm'>Online store editor</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Customize Your Store</h1></a>
                                                    <a href="#"><p className='text-sm'>Store themes</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    <a href="#"><p className='text-sm'>Domains & Hosting</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    <a href="#"><p className='text-sm'>Domains & Hosting</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                            </ul>
                                        </div>
                                       </div>
                                       <div>
                                       <div className='flex flex-row justify-center items-center py-3'>
                                            <div className='w-14 h-14 rounded-full'>
                                                <img src={market} className='w-full h-full ' alt="" />
                                            </div>
                                            <h1 className='text-xl mx-5'>Market</h1>
                                        </div>
                                        <hr className='my-3' />
                                        <div className='p-5'>
                                            <ul className='text-black'>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Start Your Business</h1></a>
                                                    <a href="#"><p className='text-sm'>Build Your Brand</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Create Your Website</h1></a>
                                                    <a href="#"><p className='text-sm'>Online store editor</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Customize Your Store</h1></a>
                                                    <a href="#"><p className='text-sm'>Store themes</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    <a href="#"><p className='text-sm'>Domains & Hosting</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                            </ul>
                                        </div>
                                       </div>
                                       <div>
                                       <div className='flex flex-row justify-center items-center py-3'>
                                            <div className='w-14 h-14 rounded-full'>
                                                <img src={manage} className='w-full h-full ' alt="" />
                                            </div>
                                            <h1 className='text-xl mx-5'>Manage</h1>
                                        </div>
                                        <hr className='my-3' />
                                        <div className='p-5'>
                                            <ul className='text-black'>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Start Your Business</h1></a>
                                                    <a href="#"><p className='text-sm'>Build Your Brand</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Create Your Website</h1></a>
                                                    <a href="#"><p className='text-sm'>Online store editor</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Customize Your Store</h1></a>
                                                    <a href="#"><p className='text-sm'>Store themes</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    <a href="#"><p className='text-sm'>Domains & Hosting</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                            </ul>
                                        </div>
                                       </div>
                                        
                                        
                                        
                                    </div>
                                    <hr/>
                                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-gray-100 rounded-bl-[50px] rounded-br-[50px]'>
                                    
                                        <div className='border-2 rounded-bl-2xl  rounded-tl-2xl border-r-gray-400 text-black border-l-gray-100 border-t-gray-100 border-b-gray-100 p-5'>
                                            <h1 className='text-xl'>Aurapreneur Developers</h1>
                                            <p>Build with our powerfull API's</p>
                                        </div>
                                    
                                    
                                        <div className='border-2 border-r-gray-400 text-black border-l-gray-100 border-t-gray-100 border-b-gray-100 p-5'>
                                            <h1 className='text-xl'>Aurapreneur Developers</h1>
                                            <p>Build with our powerfull API's</p>
                                        </div>
                                   
                                        <div className='border-2 border-r-gray-400 text-black border-l-gray-100 border-t-gray-100 border-b-gray-100 p-5'>
                                            <h1 className='text-xl'>Aurapreneur Developers</h1>
                                            <p>Build with our powerfull API's</p>
                                        </div>
                                    
                                        <div className='border-2 rounded-br-2xl  rounded-tr-2xl text-black border-l-gray-100 border-t-gray-100 border-b-gray-100 p-5'>
                                            <h1 className='text-xl'>Aurapreneur Developers</h1>
                                            <p>Build with our powerfull API's</p>
                                        </div>
                                    
                                    </div>
                                </div>
                            </li>
                            <li><a className="block py-2 font-semibold text-white w-32 my-3" href="#">Pricing</a>
                               
                            </li>
                            <li><a className="block py-2 font-semibold text-white w-32 my-3" href="#">Resources</a>
                                <div className="hover-info rounded-2xl">
                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                       <div className='p-5'>
                                       <div className='flex flex-row justify-start items-center'>
                                            <div className='w-14 h-14 rounded-full'>
                                                <img src={start} className='w-full h-full ' alt="" />
                                            </div>
                                            <h1 className='text-xl mx-5'>Start</h1>
                                        </div>
                                        <hr className='my-3' />
                                        <div className='p-5'>
                                            <ul className='text-black'>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Start Your Business</h1></a>
                                                    <a href="#"><p className='text-sm'>Build Your Brand</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Create Your Website</h1></a>
                                                    <a href="#"><p className='text-sm'>Online store editor</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Customize Your Store</h1></a>
                                                    <a href="#"><p className='text-sm'>Store themes</p></a>
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                       </div>
                                       <div className='col-span-2 p-5'>
                                       <div className='flex flex-row justify-start items-center '>
                                            <div className='w-14 h-14 rounded-full'>
                                                <img src={sell} className='w-full h-full ' alt="" />
                                            </div>
                                            <h1 className='text-xl mx-5'>Sell</h1>
                                        </div>
                                        <hr className='my-3' />
                                        <div className='p-5'>
                                            <ul className='text-black '>
                                                <li className='float-left'><li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Start Your Business</h1></a>
                                                    <a href="#"><p className='text-sm'>Build Your Brand</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Create Your Website</h1></a>
                                                    <a href="#"><p className='text-sm'>Online store editor</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Customize Your Store</h1></a>
                                                    <a href="#"><p className='text-sm'>Store themes</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    <a href="#"><p className='text-sm'>Domains & Hosting</p></a>
                                                </li></li>
                                                <li className='float-right'>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    <a href="#"><p className='text-sm'>Shopify App store</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    <a href="#"><p className='text-sm'>Domains & Hosting</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                                <li className='my-3 '>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    <a href="#"><p className='text-sm'>Tools to run your business</p></a>
                                                </li>
                                                </li>
                                            </ul>
                                        </div>
                                       </div>
                                       <div className='bg-gray-200  rounded-br-2xl rounded-tr-2xl'>
                                       <div className='flex flex-row justify-start items-center p-5'>
                                            <div className='w-14 h-14 rounded-full'>
                                                <img src={market} className='w-full h-full ' alt="" />
                                            </div>
                                            <h1 className='text-xl mx-5'>Market</h1>
                                        </div>
                                        <hr className='my-3' />
                                        <div className='p-5'>
                                            <ul className='text-black'>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Start Your Business</h1></a>
                                                    
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Create Your Website</h1></a>
                                                    
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Customize Your Store</h1></a>
                                                
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Find Business Apps</h1></a>
                                                    
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Own your site domain</h1></a>
                                                    
                                                </li>
                                                <li className='my-3'>
                                                    <a href="#"><h1 className='text-xl'>Explore free business tools</h1></a>
                                                    
                                                </li>
                                            </ul>
                                        </div>
                                       </div>
                                       
                                        
                                        
                                        
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="md:hidden flex items-center justify-center">

                        <button id="mobile-menu-button" className="mobile-menu-button focus:outline-none" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:block  md:flex lg:flex items-center justify-center" >
                        <button className="border-2 border-orange-400 transition-all duration-500 hover:scale-105 hover:bg-white text-black py-2 px-3 rounded-md" type="submit">
                            <div className="flex justify-evenly items-center w-32">
                                <div className="w-6 h-6 rounded-full me-2">
                                    <img src="" className="w-full h-full" alt="" />
                                </div>
                                <p className="text-base font-semibold">Sign Up</p>
                            </div>
                        </button>
                        <div className='mx-3'>
                            {/* darkModeButton */}
                        </div>
                    </div>
                </nav>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    <ul className="bg-white py-2 px-4  text-left ">
                        <li><a className="block py-2 font-semibold text-black w-32 my-3" href="/">Solutions</a></li>
                        <li><a className="block py-2 font-semibold text-black w-32 my-3" href="#">Pricing</a></li>
                        <li><a className="block py-2 font-semibold text-black w-32 my-3 " href="#">Resources</a></li>

                        <li>


                            <button className="border-2 border-orange-400 transition-all duration-500 hover:scale-105 hover:bg-white text-black py-2 px-3 rounded-md" type="submit">
                                <div className="flex justify-evenly items-center w-36">
                                    <div className="w-6 h-6 rounded-full me-2">
                                        <img src="" className="w-full h-full" alt="" />
                                    </div>
                                    <p className="text-base font-semibold">Sign Up</p>
                                </div>
                            </button>

                        </li>
                    </ul>
                </div>
            )}
        </div>

    );
};

export default Navigation;