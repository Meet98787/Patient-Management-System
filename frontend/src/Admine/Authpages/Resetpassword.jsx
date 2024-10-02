import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const AdminResetpassword = () => {
    
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
        <div className="flex flex-col md:flex-row h-screen">
        <img src="./image/Group 1000005871.png" alt="" className='w-60  block md:hidden mx-auto' />
            {/* Reset Password Form */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <form  className='shadow-lg rounded-lg p-10 w-full max-w-md'>
                <img src="./image/Group 1116602997 (1).png" alt="" className='mb-2 w-60 block md:hidden mx-auto' />
                    <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
                    <div className="mb-4">
                        <label htmlFor="registerPassword" className="block text-sm font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                id="registerPassword"
                                placeholder='Enter New Password'
                               
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                id="confirmPassword"
                                placeholder='Enter Confirm Password'
                               
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className='bg-gray-100 text-center w-full p-2 rounded-lg hover:bg-gray-200'>
                        Reset Password
                    </button>
                </form>
            </div>

            {/* Image Section */}
            <div className="hidden md:flex justify-center items-center w-full md:w-1/2 bg-gray-100 p-0 relative">
                {/* Hide images on small screens */}
                <img src="./image/Vector 2.png" alt="" className='absolute top-0 left-0 hidden md:block' />
                <img src="./image/Vector 1.png" alt="" className='absolute bottom-0 right-0 hidden md:block' />

                <div className="flex justify-center items-center flex-col absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="./image/Group 1000005871.png" alt="" className='w-60 mb-2 mt-60' />
                    <img src="./image/Group 1116602997 (1).png" alt="" className='mb-2 max-w-2xl' />
                    <h1 className='text-center text-xl font-semibold'>Hospital</h1>
                    <p className='text-center'>You can stay in the hospital and contact<br /> with your facility</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AdminResetpassword;
