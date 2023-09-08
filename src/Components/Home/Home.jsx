import React from 'react';
import banner from "../../assets/Images/banner1.jpg"
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';
import YourStore from './YourStore/YourStore';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discover></Discover>
            <YourStore></YourStore>
        </div>
    );
};

export default Home;