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
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">

                {/* Form Section */}
                <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/3"> {/* Updated width */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
                    <form className="space-y-4">
                    <label>Email or Phone <span className='text-red-700'>*</span></label>
                    <input 
                        type="text" 
                        placeholder="Enter Email or Phone Number" 
                        className="w-full border rounded px-4 py-2" 
                    />
                    <div className="relative">
                        <label>Password <span className='text-red-700'>*</span></label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                            className="w-full border rounded px-4 py-2"
                        />
                        <span
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer mt-3"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="border rounded" />
                            <span className="text-sm">Remember Me</span>
                        </div>
                        <Link to={'/forgot-password'} className="text-blue-500 text-sm">Forgot Password ?</Link>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
                </form>
                    <p className="text-center text-sm mt-4">Don't have an account? <Link to={'/'} className="text-blue-500">Register</Link></p>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2">
                    <img src="./image/Group 1000005871.png" alt="Small Illustration" className="mb-4 w-1/3 mx-auto md:w-2/5" />
                    <img src="./image/Group 1116603022.png" alt="Large Illustration" className="mb-4 w-3/4 mx-auto md:w-4/5" />
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Hospital</h2>
                        <p className="text-gray-600">
                            You can stay connected with <br />
                            your hospital and contact with your facility.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
