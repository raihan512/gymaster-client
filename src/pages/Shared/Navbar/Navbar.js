import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthProvider)
    return (
        <nav className="max-width flex items-center justify-between my-4">
            {/* Logo */}
            <div>
                <Link to='/'><img src={`${logo}`} className='max-w-[90px] md:max-w-[240px]' alt="" /></Link>
            </div>
            {/* SearchBox */}
            <div className='w-6/12 md:w-8/12'>
                <form action="" className='border flex items-center'>
                    <input type="text" placeholder="অনুসন্ধান করুন..." className="p-1 md:p-2 w-full" />
                    <button className='bg-[#3E084C] text-white p-2 md:p-3'><FiSearch className='' /></button>
                </form>
            </div>
            {/* User & Cart */}
            <div className='flex justify-end'>
                <Link to='/user'>
                    {
                        user?.displayName ?
                            <p className='h-8 w-8 flex justify-center items-center text-xl bg-gray-200 rounded-full mr-2'>{user?.displayName.slice(0, 1)}</p>
                            : <FiUser className='text-lg mr-1 md:mr-5' />
                    }
                </Link>
                <button><FiShoppingCart className='text-lg' /></button>
            </div>
        </nav>
    );
};

export default Navbar;