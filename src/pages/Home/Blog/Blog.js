import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className='max-width mt-10'>
            {/* section title */}
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-xl md:text-2xl font-semibold'>ক্যাটাগোরি সমূহ</h2>
                <button className='bg-[#3E084C]'>ব্লগগুলো দেখুন</button>
            </div>

        </section>
    );
};

export default Blog;