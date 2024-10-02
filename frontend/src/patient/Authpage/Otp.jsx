import React, { useState, useEffect } from 'react'

const Otp = () => {
    const [seconds, setSeconds] = useState(30); // State for the timer
    const [isActive, setIsActive] = useState(true); // State to control the timer's active status

    // Effect to handle the countdown
    useEffect(() => {
        let timer;
        if (isActive && seconds > 0) {
            timer = setInterval(() => {
                setSeconds(prev => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, seconds]);

    const handleResendCode = () => {
        setSeconds(30);
        setIsActive(true);
    };


    return (
        <div>
            <div >
                <div className="flex flex-col md:flex-row h-screen">
                <img src="./image/Group 1000005871.png" alt="" className='w-60  block md:hidden mx-auto' />
               
                    <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                        <form action="" className='shadow-lg rounded-lg p-10 w-full max-w-md'>
                        <img src="./image/Group 1116602997 (1).png" alt="" className='mb-2 w-60 block md:hidden mx-auto' />
                            <h2 className="text-2xl font-bold mb-6">Enter Otp</h2>
                            <p>Please enter the 6-digit code that was sent to your phone number.</p>

                            {/* OTP Input Boxes */}
                            <div className="flex space-x-2 mb-4">
                                {[...Array(6)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1" // Restrict input to one character
                                        className="w-full p-2 border border-gray-300 rounded-md text-center"
                                        placeholder="0"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="text-sm text-gray-600">
                                    {isActive ? `00:${seconds < 10 ? `0${seconds}` : seconds}` : 'Code expired'}
                                </span>
                                {!isActive && (
                                    <button
                                        onClick={handleResendCode}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Resend Code
                                    </button>
                                )}
                            </div>
                            <button type="submit" className='bg-gray-100 text-center w-full p-2 rounded-lg hover:bg-gray-200'>
                                Verify
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
        </div>
    )
}

export default Otp
