import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const { loginUser } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Login form submit function 
    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            // if login success
            .then(user => {
                toast.success('User Logged')
                // auto navigate to home page
                navigate('/');
            })
            // if login failed
            .catch(error => {
                // if email not found
                if (error.message.includes('user-not-found')) {
                    setErrorMsg('Email not found')
                }
                // if password wrong
                else if (error.message.includes('wrong-password')) {
                    setErrorMsg('Wrong Password')
                }
            })
    };
    return (
        <section className='w-11/12 md:w-8/12 lg:w-6/12  mx-auto py-20'>
            {/* title */}
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10'>Login</h2>
            <p><strong>Test data to see users</strong></p>
            <p>Admin Email: admin@mail.com </p>
            <p>Password: Raihan123</p>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid sm:grid-cols-2 gap-3">
                    {/* email input field */}
                    <div>
                        <input type="email" placeholder='Enter your email address'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                        {errors.email && errors.email.type === "required" && <span className='text-red-500'>Write your email</span>}
                        {errors.email && errors.email.type === "pattern" && <span className='text-red-500'>Email is not valid</span>}
                    </div>
                    {/* password input field */}
                    <div>
                        <input type="password" placeholder='Enter your password'
                            className='text-lg py-2 px-5 rounded-sm border border-gray-200 w-full'
                            {...register('password', { required: true })} />
                        {errors.password && errors.password.type === "required" && <span className='text-red-500'>Write your password</span>}
                        <p className='mt-3 text-sm'><Link to='/recover'>Forgot Password?</Link></p>
                    </div>
                </div>
                {/* show error message if email or password is wrong */}
                <p className='text-base text-red-500'>{errorMsg}</p>
                {/* submit form */}
                <input className='py-4 px-20 text-black border border-black mt-8 text-sm font-semibold cursor-pointer' type="submit" value='Sign In' />
            </form>
            {/* if dont; have accoun create one */}
            <Link className='text-sm' to='/register'>Create Account</Link>
        </section>
    );
};

export default Login;