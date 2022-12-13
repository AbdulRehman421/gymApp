import React from 'react'

const Hero = () => {
    return (
        <section className=' flex mt-5 flex-col-reverse md:flex-row text-center md:text-left' id='hero'>
            <div className=' md:w-2/3 flex flex-col justify-center md:ml-5'>
                <h2 className=' text-4xl md:text-7xl leading-none tracking-wide font-bold'>
                    Smart <span className=' text-violet-500'> fitness </span> experience for everyone.
                </h2>
                <p className=' my-7 text-lg text-gray-500 md:w-4/5'>
                    Fitness is not a destination it’s a lifestyle. With our professional trainers we will help you to build the greatest version of yourself.
                </p>
                <div className=' flex flex-col items-center md:w-2/3 md:justify-evenly justify-end md:flex-row'>
                    <button className=' px-9  border-2 border-violet-500 font-medium bg-violet-500 text-white py-2 rounded-3xl  hover:text-violet-500 hover:bg-white'>
                        Get Started
                    </button>
                    <span className=' text-xl font-bold cursor-pointer m-5'>
                        <i class="fa-solid fa-circle-play text-violet-500 "></i>
                        <span className=' mx-3'>Watch Now</span>
                    </span>
                </div>
            </div>
            <div className=' w-full md:w-1/2'>
                <img src="images/hero.svg" alt="" />
            </div>
        </section>
    )
}

export default Hero