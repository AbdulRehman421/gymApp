import React from 'react'
import BillCards from './BillCards'

const Bills = () => {
    const features = (feature) => <div className=' mt-5'>
        <i class="fa-solid fa-square-check"></i> <span className=' ml-1'>{feature}</span>
    </div>
    return (
        <section className=' text-center  mt-10 py-10 delay-300 ease-in-out ' id='membership'>
            <div className=' font-bold mt-10 '>
                <h2 className=' text-5xl font-bold'>
                    Ready to Start your <span className='text-violet-500'>Journey?</span>
                </h2>
                <div className=' flex justify-center mt-10'>
                    <h6>
                        Bill Monthly
                    </h6>
                    <div className=' mx-10'>
                        <label class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 peer-focus:outline-none  peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600"></div>

                        </label>
                    </div>

                    <h6>
                        Bill Yearly
                    </h6>
                </div>

                <div className=' flex flex-col md:flex-row justify-around py-5 items-center'>
                    <div className=' w-11/12 md:w-3/12 shadow-2xl rounded-2xl pb-5 md:hover:scale-105 py-10'>
                        <BillCards plan="Weekly Plan" price='$9' type='week' />
                        <div className='  border-gray-500 border-t-2 w-3/5 mx-auto  text-left '>
                            {
                                features("Unlimited gym acess")

                            }
                            {
                                features("1 Training Program")

                            }
                            {
                                features("Free Wifi")

                            }
                        </div>
                    </div>
                    <div className=' w-11/12  md:w-3/12 shadow-2xl pb-5 rounded-2xl md:scale-110 drop-shadow-2xl py-10'>
                        <BillCards plan="Monthly Plan" price='$49' type='month' />
                        <div className='  border-gray-500 border-t-2 w-3/5 mx-auto  text-left'>

                            {
                                features("Unlimited gym acess")

                            }
                            {
                                features("5 Training Program")

                            }
                            {
                                features("Adjustable Schedule")

                            }
                            {
                                features("Free Wifi")

                            }

                            {/* <div className=' mt-5 mx-auto text-center'> <button className='px-5  border-2 border-violet-500 font-medium py-1 rounded-3xl  hover:bg-violet-500 hover:text-white'> Choose plan</button></div> */}
                        </div>
                    </div>
                    <div className=' w-11/12 md:w-3/12 shadow-2xl rounded-2xl pb-5 md:hover:scale-105 py-10 '>
                        <BillCards plan="Yearly Plan" price='$99' type='year' />
                        <div className='  border-gray-500 border-t-2 w-3/5 mx-auto text-left'>
                            {
                                features("Unlimited gym acess")

                            }
                            {
                                features("All Training Programs")

                            }
                            {
                                features("Free goodies & Wifi")

                            }
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Bills
