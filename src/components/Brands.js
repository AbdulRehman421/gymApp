
import { SiAdidas, SiNike, SiJordan } from 'react-icons/si';
import { FaAmazon } from 'react-icons/fa';
import { ImGoogle } from 'react-icons/im';
import { AiFillApple } from 'react-icons/ai';

import React from 'react'


const Brands = () => {
    return (
        <div className=' text-center md:py-10'>
            <h1 className=' text-xl font-semibold text-stone-500 my-10'>
                Trusted by 3000+ brands worldwide
            </h1>
            <div className='text-7xl text-stone-500 flex md:justify-between pt-7 pb-24 flex-col md:flex-row '>
                <div className=' flex justify-around w-full md:w-1/2'>
                    <div className='mb-5'>
                        <SiAdidas />
                    </div>
                    <div>
                        <FaAmazon />
                    </div>
                    <div>
                        <ImGoogle />
                    </div>
                </div>
                <div className=' flex  justify-around w-full  md:w-1/2'>
                    <div>
                        <AiFillApple />
                    </div>
                    <div>
                        <SiNike />
                    </div>
                    <div>
                        <SiJordan />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Brands
