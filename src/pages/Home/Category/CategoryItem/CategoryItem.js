import React from 'react';

const CategoryItem = ({ category }) => {
    return (
        <div>
            <img src={`${category.img}`} alt={`${category.title}`} />
            <p className='text-xl md:text-2xl text-[#3E084C] text-center mt-5'>{`${category.title}`}</p>
        </div>
    );
};

export default CategoryItem;