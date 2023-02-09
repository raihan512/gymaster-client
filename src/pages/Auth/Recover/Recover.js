import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Recover = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <section className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-20'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10'>Register Your Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Input Field Email  */}
                <div>
                    <input type="email" placeholder='Enter your email address'
                        className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                        {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                    {errors.email && errors.email.type === "required" && <span className='text-red-500'>Write your email</span>}
                    {errors.email && errors.email.type === "pattern" && <span className='text-red-500'>Email is not valid</span>}
                </div>

                <input className='py-4 px-20 text-black border border-black mt-8 text-sm font-semibold cursor-pointer' type="submit" value='Recover' />
            </form>
            <Link className='text-sm' to='/login'>Cancel</Link>
        </section>
    );
};

export default Recover;