import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div >
            <div className="flex flex-col md:flex-row h-screen">
                {/* Login Form */}
                <img src="./image/Group 1000005871.png" alt="" className='w-60 mb-2 block md:hidden mx-auto' />
                <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                    <form action="" className='shadow-lg rounded-lg p-10 w-full max-w-md'>
                    <img src="./image/Group 1116603022.png" alt="" className='mb-2 w-60 block md:hidden mx-auto' />
                        <h2 className="text-2xl font-bold mb-6">Login</h2>
                        <div className="mb-4">
                            <label htmlFor="registerEmail" className="block text-sm font-medium">Email address</label>
                            <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="registerEmail" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="registerPassword" className="block text-sm font-medium">Password</label>
                            <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="registerPassword" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className='bg-gray-100 text-center w-full p-2 rounded-lg hover:bg-gray-200'>Login</button>

                        <div className="flex items-center justify-between mb-4 mt-2">
                            <div>
                                <input type="checkbox" id="rememberMe" className="mr-2 leading-tight" />
                                <label htmlFor="rememberMe" className="text-sm font-medium">Remember Me</label>
                            </div>

                            <Link to={'/forgot-password'} className="text-sm text-blue-600 hover:underline no-underline">Forgot Password?</Link>

                        </div>

                        <p className='text-center mt-2'>Don't have an account ? <Link className='no-underline' to={'/'}>Registration</Link></p>



                    </form>
                </div>

                {/* Image Section */}
                <div className="hidden md:flex justify-center items-center w-full md:w-1/2 bg-gray-100 p-0 relative">
                    {/* Hide images on small screens */}
                    <img src="./image/Vector 2.png" alt="" className='absolute top-0 left-0 hidden md:block' />
                    <img src="./image/Vector 1.png" alt="" className='absolute bottom-0 right-0 hidden md:block' />

                    <div className="flex justify-center items-center flex-col absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="./image/Group 1000005871.png" alt="" className='w-60 mb-2 mt-60' />
                        <img src="./image/Group 1116603022.png" alt="" className='mb-2 max-w-2xl' />
                        <h1 className='text-center text-xl font-semibold'>Hospital</h1>
                        <p className='text-center'>You can stay in the hospital and contact<br /> with your facility</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
