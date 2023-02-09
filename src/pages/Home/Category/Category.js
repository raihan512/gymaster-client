import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import CategoryItem from './CategoryItem/CategoryItem';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

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
                    categories.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                    ></CategoryItem>)
                }
            </div>
        </section>
    );
};

export default Category;