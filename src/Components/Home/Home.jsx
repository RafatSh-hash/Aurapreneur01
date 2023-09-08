import React from 'react';
import banner from "../../assets/Images/banner1.jpg"
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discover></Discover>
        </div>
    );
};

export default Home;