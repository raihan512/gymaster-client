import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Blog from '../Blog/Blog';
import Category from '../Category/Category';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Hero></Hero>
            <Category></Category>
            <Blog></Blog>
        </div>
    );
};

export default Home;