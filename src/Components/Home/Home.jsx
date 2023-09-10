import React from 'react';
import banner from "../../assets/Images/banner1.jpg"
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';
import YourStore from './YourStore/YourStore';
import Sell from './Sell/Sell';
import CheckOut from './CheckOut/CheckOut';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discover></Discover>
            <YourStore></YourStore>
            <Sell></Sell>
            <CheckOut></CheckOut>
        </div>
    );
};

export default Home;