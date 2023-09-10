import Lottie from 'lottie-react';
import cart from "../../../assets/LottieFiles/a.json";
import arrow from "../../../assets/Icons/right.png"

const CheckOut = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between p-10 my-10 md:my-14 lg:my-20'>
            <div className='w-full md:w-[30%] lg:w-[40%]'>
                <Lottie animationData={cart} loop={true} />
            </div>
            <div className='w-full md:w-[70%] lg:w-[40%] p-2 md:p-3 lg:p-5'>
                <p className='text-xl text-white text-center md:text-left lg:text-left my-5'>FAST, RELIABLE CHECKOUT</p>
                <h1 className='text-2xl text-white my-5 md:text-3xl lg:text-5xl text-center md:text-left lg:text-left'>
                    The best-converting checkout on the planet
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
        </div>
    );
};

export default CheckOut;