import React from 'react';
import banner from "../../assets/Images/banner1.jpg"
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';
import YourStore from './YourStore/YourStore';
import Sell from './Sell/Sell';
import CheckOut from './CheckOut/CheckOut';
import FlexiblePoint from './FlexiblePoint/FlexiblePoint';
import FullFunnel from './FullFunnel/FullFunnel';
import Streamline from './Streamline/Streamline';
import Meet from './Meet/Meet';
import BurningBeans from './BurningBeans/BurningBeans';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discover></Discover>
            <YourStore></YourStore>
            <Sell></Sell>
            <CheckOut></CheckOut>
            <FlexiblePoint></FlexiblePoint>
            <FullFunnel></FullFunnel>
            <Streamline></Streamline>
            <Meet></Meet>
            <BurningBeans></BurningBeans>
        </div>
    );
};

export default Home;