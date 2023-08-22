"use client"
import React from 'react'
import {useState, useEffect} from 'react'
// import {useNavigate} from '@reduxjs/toolkit'

const initialState = {
    firstName : "",
    lastName : "",
    email: "",
    password: "",
    confirmPassword: ""
}
interface IValue {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string | number',
    confirmPassword : 'string | number'
}

function Auth() {
    const [formValue, setFormValue] = useState(initialState);

   
    const [showRegister, setShowRegister] = useState(false);
    const handleChange = () => {}
  return (
    <section className='vh-100 gradient-custom'>
        <div className='py-4 h-100'>
            <div className='d-flex justify-center items-centetr h-100'>
                <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                <div className='bg-dark text-white'>
                    <div className='p-4 text-center'></div>
                        <div className='mb-md-5 mt-md-4 pb-5'>
                            <h2 className='fw-bold mb-2 text-uppercase'>{!showRegister ? "Login" : "Register"}</h2>
                            <p className='text-white-50 mb-4'>{!showRegister ?
                            "Please enter your Email and Password"
                            :"Please enter User Detail"
                        }
                        </p>
                        <div className='mb-4'>
                            <input 
                                type="email" 
                                name='email'
                                value={email}
                                onChange={handleChange}
                                
                                />

                        </div>
                        </div>
                        </div>
                        </div>
            </div>

        </div>

    </section>
  )
}

export default Auth
 