import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {

    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()


    const signUp = async () => {

        const err = !fName || !lName || !email || !password
        if (err) {
            setError(true)
            return false
        }
        else {
            console.warn(!fName)

            const data = await fetch('http://localhost:4120/signUp', {
                method: 'Post',
                body: JSON.stringify({ fName, lName, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await data.json()
            if(result){
                localStorage.setItem('User', JSON.stringify(result))
                navigate('/home')
            }
            else{
                alert('Something is Wrong....')
            }
        }
    }

    const handleVisible = () => {
        setVisible((prev) => !prev)
    }



    return (
        <>
            <div className='w-full h-screen bg-blue-500 flex justify-center items-center'>
                <div className='w-[45%] h-[85%] rounded-xl bg-white px-6 flex flex-col items-center justify-between py-6' >
                    <div className='w-[80%] flex flex-col items-center gap-6'>
                        <div className='flex flex-col gap-0 w-full'>
                            <input value={fName} onChange={(e) => setFname(e.target.value)} type="text" className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter First Name' name="" id="" />
                            {error && !fName && <p className='text-sm text-red text-red-600'>Field is Empty</p>}
                        </div>
                        <div className='flex flex-col gap-0 w-full'>
                            <input value={lName} onChange={(e) => setLname(e.target.value)} type="text" className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter Last Name' name="" id="" />
                            {error && !lName && <p className='text-sm text-red text-red-600'>Field is Empty</p>}
                        </div>
                        <div className='flex flex-col gap-0 w-full'>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter Your Email' name="" id="" />
                            {error && !email && <p className='text-sm text-red text-red-600'>Field is Empty</p>}
                        </div>

                        <div className='relative w-full'>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={visible ? "text" : "password"} className='border-2 border-blue-500 rounded-lg outline-none text-xl px-2 h-12 w-full' placeholder='Enter Your Password' name="" id="" />
                            {error && !password && <p className='text-sm text-red text-red-600'>Field is Empty</p>}
                            <button onClick={handleVisible} className='text-lg absolute right-4 top-4'>
                                {
                                    visible ? <AiFillEye /> : <AiFillEyeInvisible />
                                }
                            </button>
                        </div>

                    </div>
                    <div>
                        <button onClick={signUp} className='w-96 bg-blue-400 text-white py-3 text-xl font-medium rounded-xl hover:bg-blue-800'>SignUp</button>
                        <p className='text-center w-full'>Already have account? <Link to="/logIn" className='text-lg font-bold text-blue-700'>Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
