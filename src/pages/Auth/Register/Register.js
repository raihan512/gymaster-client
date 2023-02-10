import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const { createUser, updateUser } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Register form submit function 
    const onSubmit = (data) => {
        const userName = data.firstName + ' ' + data.lastName;
        createUser(data.email, data.password)
            // if Register Success
            .then(user => {
                // set username
                const userInfo = { displayName: userName }
                updateUser(userInfo).then({}).catch(error => console.log(error));
                // add user to the database if user created successfully
                addUser(data.firstName, data.lastName, data.email, data.password)
                toast.success('User Created')
                // auto navigate to home page
                navigate('/');
            })
            // if Register failed
            .catch(error => {
                if (error.message.includes('email-already-in-use')) {
                    setErrorMsg('Email already exists')
                }
            })
    };

    // if registration success then add user data to the database
    const addUser = (firstName, lastName, email, password) => {
        const user = { firstName, lastName, email, password }
        fetch('https://gymaster-server.vercel.app/adduser', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // if data added to the database show success message
                if (data.acknowledged === true) {
                    toast.success('User info added to the database')
                }
            })
            // if data add failed show this message
            .catch((error) => {
                console.log(error.message)
            });
    }
    return (
        <section className='w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-20'>
            {/* Title */}
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10'>Register Your Account</h2>
            {/* form */}
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
                {/* show error message if email is already exists*/}
                <p className='text-base text-red-500'>{errorMsg}</p>
                {/* submit form */}
                <input className='py-4 px-20 text-black border border-black mt-8 text-sm font-semibold cursor-pointer' type="submit" value='Register' />
            </form>
            {/* if have an account then login */}
            <Link className='text-sm' to='/'>Cancel</Link>
        </section>
    );
};

export default Register;