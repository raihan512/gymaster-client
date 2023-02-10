import React, { useContext } from 'react';
import { BsTelephone } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';


const Header = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthProvider);
    const handleLogOut = () => {
        logOut();
        navigate('/');
    }
    return (
        <header className=' bg-[#3E084C]'>
            {/* Header Container */}
            <div className='max-width flex flex-col lg:flex-row justify-between items-center text-white text-[14px] md:text-[16px] leading-3 p-2'>
                {/* Header Contact */}
                <div className='flex items-center'>
                    <div className='flex items-center mr-2'>
                        <BsTelephone className='mr-2' />
                        <p className=''>০১৭৭৬৯৬৩৯০৭</p>
                    </div>
                    <div className='flex items-center mr-2'>
                        <FaRegEnvelope className='mr-2' />
                        <p className=''>info@example.com</p>
                    </div>
                </div>
                {/* Header Promotion */}
                <div className='flex items-center my-3 lg:my-0'>
                    <p className=' mr-2'>সকল প্রোডাক্টের উপর ৩০% ছাড়!</p>
                    <button className='py-2 px-5 text-black bg-white rounded-md'>বিস্তারিত</button>
                </div>
                {/* Header Authentication */}
                <div>
                    {
                        user ? <button onClick={() => handleLogOut()}>লগ আউট</button>
                            : <>
                                <button className='mr-3'><Link to='login'>লগ ইন</Link></button>
                                <button><Link to='register'>রেজিস্টার</Link></button>
                            </>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;