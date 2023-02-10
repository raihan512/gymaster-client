import React, { useRef } from 'react';
import Slider from 'react-slick';
import HeroBanner from '../../../assets/Hero.png';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const Hero = () => {
    const heroSlider = useRef(null)
    // Slider Settings
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px'
    };
    return (
        <section className='overflow-hidden relative'>
            <Slider ref={heroSlider} {...settings}>
                {/* Slider Item */}
                <div>
                    <div style={{ backgroundImage: `url(${HeroBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top right', zIndex: '-50' }}>
                        <div className="max-width py-24 md:py-32 lg:py-40 xl:py-56">
                            <h3 className='text-xl md:text-3xl lg:text-4xl xl:text-6xl text-[#3E084C] font-bold pb-5 md:pb-10'>ব্যায়াম করুন, সুস্থ থাকুন</h3>
                            <p className='text-lg md:text-xl lg:text-2xl pb-5 md:pb-12'>সকল প্রোডাক্টের উপর ৩০% ছাড়!</p>
                            <button className='text-base md:text-lg lg:text-xl leading-3 text-white rounded-md py-4 px-8 bg-[#3E084C]'>ক্লিক করুন</button>
                        </div>
                    </div>
                </div>
                {/* Slider Item */}
                <div>
                    <div style={{ backgroundImage: `url(${HeroBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top right', zIndex: '-50' }}>
                        <div className="max-width py-24 md:py-32 lg:py-40 xl:py-56">
                            <h3 className='text-xl md:text-3xl lg:text-4xl xl:text-6xl text-[#3E084C] font-bold pb-5 md:pb-10'>ব্যায়াম করুন, সুস্থ থাকুন</h3>
                            <p className='text-lg md:text-xl lg:text-2xl pb-5 md:pb-12'>সকল প্রোডাক্টের উপর ৩০% ছাড়!</p>
                            <button className='text-base md:text-lg lg:text-xl leading-3 text-white rounded-md py-4 px-8 bg-[#3E084C]'>ক্লিক করুন</button>
                        </div>
                    </div>
                </div>
            </Slider>
            {/* Slider Next Prev button */}
            <div className='absolute bottom-0 right-0'>
                <div className='flex'>
                    <button onClick={() => heroSlider.current.slickPrev()} className='bg-[#3E084C] p-3 mr-1'><GrFormPrevious className='text-white' /></button>
                    <button onClick={() => heroSlider.current.slickNext()} className='bg-[#3E084C] p-3'><GrFormNext className='text-white' /></button>
                </div>
            </div>
        </section >
    );
};

export default Hero;