import React from 'react';
import banner from "../../assets/Images/banner1.jpg"
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';
import YourStore from './YourStore/YourStore';
import Sell from './Sell/Sell';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discover></Discover>
            <YourStore></YourStore>
            <Sell></Sell>
        </div>
    );
};

export default Home;