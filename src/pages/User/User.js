import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../contexts/AuthContext/AuthContext';

const User = () => {
    const [allUser, setAllUser] = useState([]);
    const { user } = useContext(AuthProvider);
    const currentUserEmail = user?.email;
    useEffect(() => {
        fetch('https://gymaster-server.vercel.app/alluser')
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [])
    // Find is current user is admin
    const adminUser = allUser.find(user => user.email === currentUserEmail);
    let isAdmin;
    // set variable true if current user is admin
    adminUser?.admin ? isAdmin = true : isAdmin = false;
    return (
        <section className='max-width py-10'>
            {
                user?.email ? <>
                    {/* title */}
                    <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10'>User List</h2>
                    {/* Show Users */}
                    <div className="overflow-x-auto">
                        {isAdmin ?
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>PassWord</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUser.map(user => <tr
                                            key={user._id}
                                            user={user}
                                        >
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                        </tr>)
                                    }
                                    <tr className='border-b'>
                                        <td>{allUser.length} User</td>
                                    </tr>

                                </tbody>
                            </table> :
                            <h2>Only Admins are permitted to see users</h2>
                        }

                    </div>
                </> :
                    <>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl mb-10'>Please Login First</h3>
                        <p>Admin Email: admin@mail.com </p>
                        <p>Password: Raihan123</p>
                    </>
            }
        </section>
    );
};

export default User;