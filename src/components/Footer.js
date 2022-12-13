import React from 'react'
import { AiFillTwitterCircle, AiFillFacebook, AiFillYoutube, AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className=' bg-gray-900 text-left text-white'>
            <div className=' flex flex-col md:flex-row items-center border-b-2 border-white justify-between'>
                <div className=' md:m-5 md:p-5 pt-10'>
                    <h2 className=' text-4xl font-bold'>
                        <span className=' text-violet-500'> Fit</span>Me
                    </h2>
                    <h3 className=' text-base font-semibold my-5'>
                        Fitness for Everyone
                    </h3>
                </div>

                <div className=' flex justify-around mx-5 my-5 '>

                    <div className=' text-center mr-16 md:text-left md:mr-0'>
                        <h2 className=' text-lg font-bold text-gray-400 my-3'>ABOUT</h2>
                        <div className=' ' >
                            <h3 className=' hover:text-violet-500 my-2  p-1'>Home</h3>
                            <h3 className=' hover:text-violet-500 my-2  p-1'>Trainers</h3>
                            <h3 className=' hover:text-violet-500 my-2  p-1'>Programs</h3>
                        </div>

                    </div>
                    <div className=' text-center ml-16  md:text-left md:ml-0'>
                        <h2 className=' text-lg font-bold  text-gray-400 my-3'>PRODUCT</h2>
                        <div className=''>
                            <h3 className=' hover:text-violet-500 my-2  p-1'>How it works</h3>
                            <h3 className=' hover:text-violet-500 my-2  p-1'>Privacy Policy</h3>
                            <h3 className=' hover:text-violet-500 my-2  p-1'>T&C</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' md:p-5 text-center items-center flex flex-col md:row  justify-between'>
                <div>
                    © 2022, FitMe, Inc. All Rights Reserved.
                </div>
                <div className=' flex text-2xl text-violet-500 my-5'>
                    <span className=' px-5  hover:text-white'><AiFillTwitterCircle /></span>
                    <span className=' px-5  hover:text-white'><AiFillFacebook /></span>
                    <span className=' px-5  hover:text-white'> <AiFillYoutube /></span>
                    <span className=' px-5  hover:text-white'><AiOutlineMail /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
