import React from 'react'
import { useState } from 'react'
import '../animation.css';
import { Link } from 'react-scroll'

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const handleDrop = () => {
        setShowNav(prev => !prev)
    }


    return (
        <nav className={`flex  md:justify-between sticky top-0 drop-shadow-lg md:flex-row bg-orange-50 z-50 ${showNav ? 'flex-col h-full  ' : ''}`} >
            <div className="  p-4 cursor-pointer w-1/3">
                <h1 className=' text-5xl font-bold'>
                    <span className=' text-violet-500'>
                        Fit
                    </span>
                    Me
                </h1>

            </div>
            <div className=' md:hidden absolute right-5 top-0' onClick={handleDrop}>
                {
                    showNav ? <i class="fa-solid fa-xmark m-5 text-2xl  text-violet-500"></i> : <i class="fa-solid fa-bars m-5 text-2xl"></i>
                }

            </div>

            <div
                className={`md:flex items-center md:w-2/3 justify-around  md:flex-row ${showNav ? 'drop flex flex-col pb-5 text-center my-10' : ' hidden flex-row '}`}
                id='navItems' >
                <ul className='md:flex justify-evenly text-lg '>
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className=' font-medium  px-5'>
                        <li className='cursor-pointer hover:text-violet-500' onClick={handleDrop}>
                            Home
                        </li>
                    </Link>
                    <Link to="trainers" spy={true} smooth={true} offset={50} duration={500} className=' font-medium px-5'>
                        <li className=' cursor-pointer hover:text-violet-500' onClick={handleDrop}>
                            Trainers
                        </li>
                    </Link>
                    <Link to="programs" spy={true} smooth={true} offset={50} duration={500} className=' font-medium  px-5'>
                        <li className=' cursor-pointer hover:text-violet-500' onClick={handleDrop}>
                            Programs
                        </li>
                    </Link>
                    <Link to="membership" spy={true} smooth={true} offset={50} duration={500} className=' font-medium  px-5'>
                        <li className=' cursor-pointer hover:text-violet-500' onClick={handleDrop}>
                            Membership
                        </li>
                    </Link>
                    <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} className=' font-medium  px-5'>
                        <li className=' cursor-pointer hover:text-violet-500' onClick={handleDrop}>
                            Testimonials
                        </li>
                    </Link>

                </ul>
                <div className='  ' onClick={handleDrop}>
                    <button className=' border-2 border-violet-500 font-medium bg-violet-500 text-white py-2 px-5 rounded-3xl  hover:text-violet-500 hover:bg-white'>
                        Sign in
                    </button>
                </div>

            </div >
        </nav >
    )
}

export default Header