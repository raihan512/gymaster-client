import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <navbar className="max-width flex items-center justify-between my-4">
            {/* Logo */}
            <div className='w-3/12'>
                <Link to='/'><img src={`${logo}`} className='h-[30px] md:h-[50px]' alt="" /></Link>
            </div>
            {/* SearchBox */}
            <div className="w-6/12">
                <form action="" className='border flex items-center'>
                    <input type="text" placeholder="Search…" className="p-1 md:p-2 w-full" />
                    <button className='bg-[#3E084C] text-white p-2 md:p-3'><FiSearch className='' /></button>
                </form>
            </div>
            {/* User & Cart */}
            <div className='w-1/12 flex justify-end'>
                <button><FiUser className='text-lg mr-2 md:mr-5' /></button>
                <button><FiShoppingCart className='text-lg' /></button>
            </div>
        </navbar>
    );
};

export default Navbar;