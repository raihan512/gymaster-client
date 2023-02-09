import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <section className='w-11/12 md:w-8/12 lg:w-6/12  mx-auto py-20'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                        <input type="email" placeholder='Enter your email address'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                        {errors.email && errors.email.type === "required" && <span className='text-red-500'>Write your email</span>}
                        {errors.email && errors.email.type === "pattern" && <span className='text-red-500'>Email is not valid</span>}
                    </div>
                    <div>
                        <input type="password" placeholder='Enter your password'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('password', { required: true })} />
                        {errors.password && errors.password.type === "required" && <span className='text-red-500'>Write your password</span>}
                        <p className='mt-3 text-sm'><Link to='/recover'>Forgot Password?</Link></p>
                    </div>
                </div>
                <input className='py-4 px-20 text-black border border-black mt-8 text-sm font-semibold cursor-pointer' type="submit" value='Sign In' />
            </form>
            <Link className='text-sm' to='/register'>Create Account</Link>
        </section>
    );
};

export default Login;