import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import Header from '../../pages/Shared/Header/Header';
import Navbar from '../../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>

            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;