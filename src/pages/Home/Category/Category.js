import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi'
import category1 from '../../../assets/category/category01.png'
import category2 from '../../../assets/category/category02.png'
import category3 from '../../../assets/category/category03.png'

const Category = () => {
    const categories = [
        { id: 1, img: category3, title: "জিমের সরঞ্জাম" },
        { id: 2, img: category1, title: "জিমের পোশাক" },
        { id: 3, img: category2, title: "সাপ্লিমেন্টস" }
    ]
    return (
        <section className='max-width mt-10'>
            {/* section title */}
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-xl md:text-2xl font-semibold'>ক্যাটাগোরি সমূহ</h2>
                <Link className='flex items-center text-sm md:text-base text-[#3E084C]' to='/'>আরও দেখুন <FiArrowUpRight /></Link>
            </div>
            {/* Category Container */}
            <div className="grid md:grid-cols-3 justify-items-center gap-8 pb-24">
                {
                    categories.map(category => <div key={category.id}>
                        <img src={`${category.img}`} alt={`${category.title}`} />
                        <p className='text-xl md:text-2xl text-[#3E084C] text-center mt-5'>{`${category.title}`}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Category;