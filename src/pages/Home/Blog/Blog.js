import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem/BlogItem';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <section className='max-width mt-10'>
            {/* section title */}
            <div className='pb-10'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold'>আমাদের ব্লগ সমূহ</h2>
                    <button className='bg-[#3E084C] text-sm md:text-base text-white py-2 px-5 rounded-md'>ব্লগগুলো দেখুন</button>
                </div>
                <p className='text-base md:text-lg lg:text-xl'>সুস্থ থাকতে আমাদের ব্লগ সমূহ পড়ুন, সর্বশেষ স্বাস্থ্য পরামর্শ নিন</p>
            </div>
            {/* Blog Container */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-5 pb-24">
                {
                    blogs.map(blog => <BlogItem
                        key={blog._id}
                        blog={blog}
                    ></BlogItem>)
                }
            </div>
        </section>
    );
};

export default Blog;