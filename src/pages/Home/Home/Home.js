import React from 'react';
import Blog from '../Blog/Blog';
import Category from '../Category/Category';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <Blog></Blog>
        </div>
    );
};

export default Home;