import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    
    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">

                {/* Form Section */}
                <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration</h2>
                    <form className="space-y-4">
                        <div className="flex space-x-4">

                            <input type="text" placeholder="Enter First Name" className="w-1/2 border rounded px-4 py-2" />
                            <input type="text" placeholder="Enter Last Name" className="w-1/2 border rounded px-4 py-2" />
                        </div>
                        <div className="flex space-x-4">
                            <input type="email" placeholder="Enter Email Address" className="w-1/2 border rounded px-4 py-2" />
                            <input type="text" placeholder="Enter Phone Number" className="w-1/2 border rounded px-4 py-2" />
                        </div>
                        <div className="flex space-x-4">
                            <input type="number" placeholder="Enter Age" className="w-1/3 border rounded px-4 py-2" />
                            <input type="text" placeholder="Enter Height" className="w-1/3 border rounded px-4 py-2" />
                            <input type="text" placeholder="Enter Weight" className="w-1/3 border rounded px-4 py-2" />
                        </div>
                        <div className="flex space-x-4">
                            <select className="w-1/3 border rounded px-4 py-2">
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <select className="w-1/3 border rounded px-4 py-2">
                                <option>Select Group</option>
                                <option>A+</option>
                                <option>O+</option>
                            </select>
                            <input type="date" className="w-1/3 border rounded px-4 py-2" />
                        </div>
                        <div className="flex space-x-4">
                            <select className="w-1/3 border rounded px-4 py-2">
                                <option>Select Country</option>
                                <option>USA</option>
                                <option>India</option>
                            </select>
                            <select className="w-1/3 border rounded px-4 py-2">
                                <option>Select State</option>
                                <option>California</option>
                                <option>Texas</option>
                            </select>
                            <select className="w-1/3 border rounded px-4 py-2">
                                <option>Select City</option>
                                <option>Los Angeles</option>
                                <option>Dallas</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Enter Address" className="w-full border rounded px-4 py-2" />

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Password"
                                className="w-full border rounded px-4 py-2"
                            />
                            <span
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="relative w-full">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                className="w-full border rounded px-4 py-2"
                            />
                            <span
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="border rounded" />
                            <span className="text-sm">I agree to all the <a href="#" className="text-blue-500">T&amp;C and Privacy Policies</a>.</span>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
                    </form>
                    <p className="text-center text-sm mt-4">Already have an account? <Link to={'/login'} className="text-blue-500">Login</Link></p>
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
    );
};

export default Register;
