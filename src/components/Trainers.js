import React from 'react'

const Trainers = () => {
    return (
        <section className='w-4/5 text-center mx-auto pb-10' id='trainers'>
            <div className=' md:mt-10 md:pb-20'>
                <h2 className=' text-5xl font-bold mb-10'>
                    Meet Our Certified <span className='text-violet-500'>Trainers </span>
                </h2>
            </div>
            <div className=' flex flex-col md:flex-row'>
                <div className=' my-10 md:my-0'>
                    <img src='/images/trainer1.svg' alt='' className='w-4/5 mx-auto' />
                    <h3 className=' text-xl font-bold  mt-10'>
                        Rohit Sharma
                    </h3>
                    <h6 className=' text-gray-500  text-sm font-bold'>
                        MMA Trainer
                    </h6>
                </div>
                <div className='my-10 md:my-0'>
                    <img src='/images/trainer2.svg' alt='' className='' />
                    <h3 className='text-xl font-bold  mt-5'>
                        Virat Koilhi
                    </h3>
                    <h6 className=' text-gray-500  text-sm font-bold'>
                        Gym Trainer
                    </h6>
                </div>
                <div className='my-10 md:my-0'>
                    <img src='/images/trainer3.svg' alt='' className=' w-4/5 mx-auto' />
                    <h3 className='text-xl font-bold mt-10'>
                        Ishan Sharma
                    </h3>
                    <h6 className=' text-gray-500  text-sm font-bold'>
                        Yoga Trainer
                    </h6>
                </div>

            </div>
            <div className=' md:mt-16'>
                <button className='px-9   border-2 border-violet-500 font-medium bg-violet-500 text-white py-2 rounded-3xl  hover:text-violet-500 hover:bg-white'>See All</button>
            </div>
        </section>
    )
}

export default Trainers
