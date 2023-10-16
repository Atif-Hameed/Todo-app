import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const SignUp = () => {

    const [visible, setVisible] = useState(false)
    const handleVisible = () => {
        setVisible((prev) => !prev)
    }

    return (
        <>
            <div className='w-full h-screen bg-blue-500 flex justify-center items-center'>
                <div className='w-[45%] h-[85%] rounded-xl bg-white px-6 flex flex-col items-center justify-between py-6' >
                    <div className='w-[80%] flex flex-col items-center gap-6'>
                        <input type="text" className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter First Name' name="" id="" />
                        <input type="text" className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter Last Name' name="" id="" />
                        <input type="email" className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter Your Email' name="" id="" />
                        <div className='relative w-full'>
                            <input type={visible ? "text" : "password"} className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter Your Password' name="" id="" />
                            <button onClick={handleVisible} className='text-lg absolute right-4 top-4'>
                                {
                                    visible ? <AiFillEye /> : <AiFillEyeInvisible />
                                }
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className='w-96 bg-blue-400 text-white py-3 text-xl font-medium rounded-xl hover:bg-blue-800'>SignUp</button>
                        <p className='text-center w-full'>Already have account? <Link to="/logIn" className='text-lg font-bold text-blue-700'>Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
