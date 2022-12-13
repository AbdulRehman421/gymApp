import React from 'react'
function Review(props) {

    return (
        <div className=' flex flex-col md:flex-row'>
            <div className=' w-60 md:w-84'>
                <img src={props.img} alt="" />
            </div>
            <div className=' flex flex-col justify-center md:p-10 text-lg font-medium tracking-tight md:mx-10 w-80 md:w-96'>
                <i class="fa-solid fa-quote-left text-3xl my-5"></i>
                <p className=' md:w-auto w-11/12 pb-7 border-b border-stone-500'>
                    {props.review}
                </p>
                <div className=' w-full ' >
                    <h3 className=' mt-5 text-xl font-bold'>
                        {props.name}
                    </h3>

                    <h5 className=' py-2 text-lg text-stone-500 font-semibold'>
                        {props.designation}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Review