/* eslint-disable no-unused-vars */
import { useState } from 'react'

function Modal() {

    return (
        <>
            <button className='bg-violet-500 py-2 px-6 rounded-lg text-white font border-l-4 mt-5'>Open Modal</button>
                <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex-justify-center items-center'>
                <div className='bg-white p-5 rounded flex flex-col justify-center items gap-5'>
                    <div>
                        <label htmlFor='' className='mr-3 font-semibold font-[Poppins]'>Email</label>
                        <input type='text' className='w-64 px-4 border 2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 duration-200' />
                    </div>
                    <div>
                        <label htmlFor='' className='mr-3 font-semibold font-[Poppins]'>Password</label>
                        <input type='password' className='w-64 px-4 border 2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 duration-200' />
                    </div>
                   
                </div>
                </div>
                </>
    )
}
export default Modal;