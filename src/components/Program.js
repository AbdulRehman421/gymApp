import React from 'react'

const Program = () => {
    return (
        <section className=' text-center md:mt-10 pt-10 delay-300 ease-in-out ' id='programs'>
            <h2 className=' text-5xl font-bold mb-10'>
                Explore Our  <span className='text-violet-500'>Programs </span>
            </h2>
            <div className=' flex flex-col md:flex-row w-full justify-around' >

                <div className=' md:w-1/4  p-7 m-7 rounded-2xl duration-100 shadow-2xl hover:scale-110'>
                    <div className=' '>
                        <img src="/images/cardio.png" alt="" className=' w-28 mx-auto' />
                    </div>
                    <div>
                        <h3 className=' text-2xl font-semibold text-violet-500 py-5'>
                            Cardio and Crossfit
                        </h3>
                    </div>
                    <div>
                        <p className=' text-lg'>
                            Improve your cardiovascular health, help lower blood pressure, regulate weight, strengthen immune system, aid sleep with our Crossfit Cardio.
                        </p>
                    </div>
                    <div className=' mt-10'>
                        <button className=' border-2  border-violet-500 font-medium bg-violet-500 text-white py-2 px-5 rounded-3xl  hover:text-violet-500 hover:bg-white'>
                            Learn More<i class="fa-solid fa-arrow-right m-1"></i> </button>
                    </div>
                </div>
                <div className=' md:w-1/4  p-7  m-7  bg-violet-500  text-white  rounded-2xl duration-100 shadow-2xl hover:scale-110'>
                    <div>
                        <img src="/images/gym.png" alt="" className=' w-28 mx-auto' />
                    </div>
                    <div>
                        <h3 className=' text-2xl font-semibold py-5'>
                            Strength Training
                        </h3>
                    </div>
                    <div >
                        <p className=' text-lg'>
                            Our professional trainers will help you manage or lose weight, increase your metabolism to help you burn more calories, enhance your quality of life.

                        </p>
                    </div>
                    <div className=' mt-10'>
                        <button className=' font-medium bg-white border-2 border-white text-violet-500 py-2 px-5 rounded-3xl  hover:bg-violet-500 hover:text-white'>
                            Learn More <i class="fa-solid fa-arrow-right m-1"></i> </button>
                    </div>
                </div>
                <div className=' md:w-1/4  p-7  m-7  rounded-2xl duration-100 shadow-2xl hover:scale-110'>
                    <div>
                        <img src="/images/yoga.png" alt="" className=' w-28 mx-auto' />
                    </div>
                    <div>
                        <h3 className=' text-2xl font-semibold text-violet-500 py-5'>
                            Yoga & Stretching
                        </h3>
                    </div>
                    <div>
                        <p className=' text-lg'>
                            Yoga will help you improve strength, balance and flexibility, ease back pain, heart health, sleep better, manage stress.
                        </p>
                    </div>

                    <div className=' mt-10'>
                        <button className='border-2 border-violet-500 font-medium bg-violet-500 text-white py-2 px-5 rounded-3xl hover:text-violet-500 hover:bg-white'>
                            Learn More <i class="fa-solid fa-arrow-right m-1"></i> </button>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Program
