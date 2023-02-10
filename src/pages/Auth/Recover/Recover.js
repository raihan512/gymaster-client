import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';

const Recover = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const { resetPassWord } = useContext(AuthProvider)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Recover form submit function 
    const onSubmit = (data) => {
        resetPassWord(data.email)
            // if recover Success
            .then(() => {
                toast.success('Password reset mail sent')
            })
            // if recover Failed
            .catch(error => {
                if (error.message.includes('user-not-found')) {
                    setErrorMsg('This email has not any account');
                }
            })
    };
    return (
        <section className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-20'>
            {/* title */}
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10'>Recover Your Account</h2>
            {/* Recover form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Input Field Email  */}
                <div>
                    <input type="email" placeholder='Enter your email address'
                        className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                        {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                    {errors.email && errors.email.type === "required" && <span className='text-red-500'>Write your email</span>}
                    {errors.email && errors.email.type === "pattern" && <span className='text-red-500'>Email is not valid</span>}
                    {/* show error message if email is not registered */}
                    <p className='text-base text-red-500'>{errorMsg}</p>
                </div>
                {/* submit form */}
                <input className='py-4 px-20 text-black border border-black mt-8 text-sm font-semibold cursor-pointer' type="submit" value='Recover' />
            </form>
            {/* If want to cancel recover */}
            <Link className='text-sm' to='/login'>Cancel</Link>
        </section>
    );
};

export default Recover;