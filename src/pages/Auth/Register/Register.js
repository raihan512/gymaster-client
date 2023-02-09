import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <section className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-20'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10'>Register Your Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid sm:grid-cols-2 gap-3">
                    {/* Input Field FirstName  */}
                    <div>
                        <input type="text" placeholder='First Name'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('firstName', { required: true })} />
                        {errors.firstName && errors.firstName.type === "required" && <span className='text-red-500'>Write your firstname</span>}
                    </div>
                    {/* Input Field LastName  */}
                    <div>
                        <input type="text" placeholder='Last Name'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('lastName', { required: true })} />
                        {errors.lastName && errors.lastName.type === "required" && <span className='text-red-500'>Write your lastname</span>}
                    </div>
                    {/* Input Field Email  */}
                    <div>
                        <input type="email" placeholder='Enter your email address'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                        {errors.email && errors.email.type === "required" && <span className='text-red-500'>Write your email</span>}
                        {errors.email && errors.email.type === "pattern" && <span className='text-red-500'>Email is not valid</span>}
                    </div>
                    {/* Input Field Password  */}
                    <div>
                        <input type="password" placeholder='Enter your password'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('password', { required: true, pattern: /(?=(.*[A-Z])(?=(.*[a-z]))(?=(.*[0-9])))/, maxLength: 16, minLength: 6 })} />
                        {errors.password && errors.password.type === "required" && <span className='text-red-500'>Write your password</span>}
                        {errors.password && errors.password.type === "pattern" && <span className='text-red-500'>Your password must have to (A-Z, a-z, and 0-9) each items atlest one time</span>}
                        {errors.password && errors.password.type === "maxLength" && <span className='text-red-500'>Your password cross more than 16 digits</span>}
                        {errors.password && errors.password.type === "minLength" && <span className='text-red-500'>Your password length is less than 6</span>}
                    </div>
                </div>
                <input className='py-4 px-20 text-black border border-black mt-8 text-sm font-semibold cursor-pointer' type="submit" value='Register' />
            </form>
            <Link className='text-sm' to='/'>Cancel</Link>
        </section>
    );
};

export default Register;