import React from 'react'
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <div className="p-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">

                {/* Form Section */}
                <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/3"> {/* Updated width */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h2>
                    <span style={{fontSize:'14px'}} className='text-gray-600'>Enter your email and we'll send you a otp to reset your password.</span>
                    <form className="space-y-4">
                    <label>Email or Phone <span className='text-red-700'>*</span></label>
                    <input 
                        type="text" 
                        placeholder="Enter Email or Phone Number" 
                        className="w-full border rounded px-4 py-2" 
                    />
                    <button className="w-full bg-blue-600 text-white py-2 rounded">Get Otp</button>
                </form>
                     <div className='text-center mt-2'>
                     <Link to={'/login'} className="text-blue-500  no-underline">Back To Login</Link>
                     </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-slate-200">
                    <img src="./image/Group 1000005871.png" alt="Small Illustration" className="mb-4 w-1/3 mx-auto md:w-2/5" />
                    <img src="./image/Group 1116602997 (1).png" alt="Large Illustration" className="mb-4 w-3/4 mx-auto md:w-4/5" />
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

export default Forgotpassword;
