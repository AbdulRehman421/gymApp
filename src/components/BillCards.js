import React from 'react'

function BillCards(props) {
    // flex flex-col justify-center
    return (
        <div className=' text-center '>
            <div className=' '>
                <h3 className=' text-2xl mt-5 text-semibold text-violet-500'>
                    {props.plan}
                </h3>
                <h2 className=' text-5xl my-5 font-bold'>
                    {props.price}
                </h2>
                <h5 className=' text-base text-gray-500 font-semibold mb-3'>
                    per  {props.type}, bill annually
                </h5>
            </div>

        </div>
    )
}

export default BillCards
