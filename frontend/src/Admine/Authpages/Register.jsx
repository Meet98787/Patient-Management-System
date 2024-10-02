import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <div className='flex justify-center'>
                    <form action="" className='shadow-lg rounded-lg p-10 w-full max-w-xl'>
                            <img src="./image/Group 1000005871.png" alt="" className='w-60 mb-2 block md:hidden mx-auto' />
                            <h2 className="text-2xl font-bold mb-6">Registration</h2>

                            {/* First and Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="firstName" placeholder='Enter First Name' />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="lastName" placeholder='Enter Last Name' />
                                </div>
                            </div>

                            {/* Email and Phone Number */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                                    <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="email" placeholder='Enter Email Address' />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium">Phone Number</label>
                                    <input type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="phoneNumber" placeholder='Enter Phone Number' />
                                </div>
                            </div>

                            {/* Age, Height, Weight */}
                            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label htmlFor="age" className="block text-sm font-medium">Age</label>
                                    <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="age" placeholder='Enter Age' />
                                </div>
                                <div>
                                    <label htmlFor="height" className="block text-sm font-medium">Height (cm)</label>
                                    <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="height" placeholder='Enter Height' />
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block text-sm font-medium">Weight (kg)</label>
                                    <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="weight" placeholder='Enter Weight' />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
                                    <select id="gender" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="bloodGroup" className="block text-sm font-medium">Blood Group</label>
                                    <select id="bloodGroup" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="dob" className="block text-sm font-medium">Date of Birth</label>
                                    <input type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="dob" />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium">Country</label>
                                    <select id="country" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select Country</option>
                                        <option value="india">India</option>
                                        <option value="usa">USA</option>
                                        <option value="uk">UK</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium">State</label>
                                    <select id="state" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option value="">Select State</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="california">California</option>
                                        <option value="london">London</option>
                                    </select>
                                </div>
                                <div className='w-full col-span-2 sm:col-span-1'>
                                    <label htmlFor="city" className="block text-sm font-medium">City</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="city" placeholder='Enter City' />
                                </div>
                            </div>

                            {/* Address and Password */}
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium">Address</label>
                                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="address" placeholder='Enter Address' />
                            </div>
                            {/* Password Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="registerPassword" className="block text-sm font-medium">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    id="registerPassword"
                                    placeholder='Enter Password'
                                />
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash className='mt-3'/> : <FaEye className='mt-3'/>}
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    id="confirmPassword"
                                    placeholder='Confirm Password'
                                />
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <FaEyeSlash className='mt-3'/> : <FaEye className='mt-3'/>}
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="mb-4 flex items-center">
                                <input type="checkbox" className="mr-2 leading-tight" id="termsCheck" />
                                <label className="text-sm" htmlFor="termsCheck">
                                    I agree to all the <span className='text-blue-400'>T&C</span> and <span className='text-blue-400'>Privacy Policies</span>
                                </label>
                            </div>

                            <button type="submit" className='bg-gray-100 text-center w-full p-2 rounded-lg hover:bg-gray-200'>Register</button>
                            <p className='text-center mt-2'>Already have an account? <Link className='no-underline' to={'/login'}>Login</Link></p>
                        </form>

                    </div>
                </div>

                <div className="hidden md:flex justify-center items-center w-full md:w-1/2 bg-gray-100 p-0 relative">
                    {/* Hide images on small screens */}
                    <img src="./image/Vector 2.png" alt="" className='absolute top-0 left-0 hidden md:block' />
                    <img src="./image/Vector 1.png" alt="" className='absolute bottom-0 right-0 hidden md:block' />

                    <div className="flex justify-center items-center flex-col absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="./image/Group 1000005871.png" alt="" className='w-60 mb-2 mt-52' />
                        <img src="./image/Group 1116603022.png" alt="" className='mb-2 max-w-2xl' />
                        <h1 className='text-center text-xl font-semibold'>Hospital</h1>
                        <p className='text-center'>You can stay in the hospital and contact<br /> with your facility</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AdminRegister;