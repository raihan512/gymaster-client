import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBars3BottomRight, HiXMark } from 'react-icons/hi2'

const Menubar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const menuItems = <>
        <li className='mx-1.5 xl:mx-2 text-[#3E084C] font-semibold'><Link to='/'>হোম</Link></li>
        <li className='mx-1.5 xl:mx-2 transition-all hover:text-[#3E084C] hover:font-semibold'><Link to='/'>জিমের সরঞ্জাম</Link></li>
        <li className='mx-1.5 xl:mx-2 transition-all hover:text-[#3E084C] hover:font-semibold'><Link to='/'>জিমের পোশাক</Link></li>
        <li className='mx-1.5 xl:mx-2 transition-all hover:text-[#3E084C] hover:font-semibold'><Link to='/'>সাপ্লিমেন্টস</Link></li>
        <li className='mx-1.5 xl:mx-2 transition-all hover:text-[#3E084C] hover:font-semibold'><Link to='/'>হ্যান্ড গ্রিপ</Link></li>
        <li className='mx-1.5 xl:mx-2 transition-all hover:text-[#3E084C] hover:font-semibold'><Link to='/'>পুশ আপ বার</Link></li>
        <li className='mx-1.5 xl:mx-2 transition-all hover:text-[#3E084C] hover:font-semibold'><Link to='/'>আমাদের সম্পর্কে</Link></li>
        <li className='mx-1.5 xl:mx-2 transition-all hover:text-[#3E084C] hover:font-semibold'><Link to='/'>যোগাযোগ</Link></li>
    </>
    return (
        <section className='bg-[#F5F5F5] sticky top-0 left-0 z-20'>
            <div className="max-width py-3">
                {/* Desktop Menu */}
                <ul className='hidden md:flex justify-center items-center text-base lg:text-lg xl:text-xl'>
                    {
                        menuItems
                    }
                </ul>
                {/* Mobile Menu btn*/}
                <div className='flex md:hidden items-center justify-end'>
                    <h3 className='text-lg font-semibold mr-1'>Menu</h3>
                    <button onClick={() => setMobileMenu(!mobileMenu)}><HiOutlineBars3BottomRight className='text-2xl' /></button>
                </div>
            </div>
            {/* Mobile Menu */}
            {
                mobileMenu && <div className="fixed md:hidden top-0 left-0 h-screen w-3/5 bg-[#F5F5F5] text-lg z-50">
                    <ul className='p-3'>
                        {
                            menuItems
                        }
                    </ul>
                </div>
            }
        </section>
    );
};

export default Menubar;