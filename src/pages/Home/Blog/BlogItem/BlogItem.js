import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
    const { img, category, title, desc, authorImg, author, time } = blog
    return (
        <div>
            <img src={`${img}`} className="mb-8 w-full" alt="" />
            <Link className='text-sm text-[#3E084C]' to='/'>{category}</Link>
            <h4 className='text-xl md:text-2xl font-semibold mt-5 flex justify-between items-start'>{title} <FiArrowUpRight className='text-2xl md:text-4xl font-bold' /></h4>
            <p className='text-base text-[#667085] pt-5 pb-8'>{desc}</p>
            {/* author */}
            <div className='flex items-center'>
                {/* <div className='rounded-full shadow-xl'> */}
                <img src={`${authorImg}`} className='w-12 h-12 rounded-full mr-2 drop-shadow-2xl -z-50' alt="" />
                {/* </div> */}
                <div>
                    <h5 className='text-sm text-[#101828]'>{author}</h5>
                    <p className='text-sm text-[#667085]'>{time}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;