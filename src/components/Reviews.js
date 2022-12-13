import React from 'react'
import Review from './Review'


const Reviews = () => {
    const img1 = "/images/client1.png"
    const img2 = "/images/client2.png"
    const img3 = "/images/client3.png"
    return (
        <section className='w-4/5 text-left md:mx-auto mx-5 pb-10' id='testimonials'>
            <h2 className=' text-5xl font-bold text-center mt-10 pb-10'>
                Happiest  <span className='text-violet-500'>Trainee </span>Reviews
            </h2>
            <div className='slider flex overflow-scroll  scrollbar-hide'>

                <Review img={img1}
                    review='When I was stuck at home during pandemic I wanted to workout from home one of my friends introduced me to FitMe and man I loved every bit of it. I chose Yearly Plan they have amazing trainers who know what they’re doing. '
                    name="Surya Kumar"
                    designation='Founder, Sky Sports'

                />
                <Review img={img2}
                    review='I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. You have the best community.  '
                    name="Yuvraj Singh"
                    designation='Fitness Model'

                />
                <Review img={img3}
                    review='I built my dream physique just because of you guys. After which I bagged multiple modelling opportunities. You guys rock! I connected with so many beautiful people in the community. '
                    name="MS Dhoni"
                    designation='Athlete'

                />

            </div>

        </section>
    )
}

export default Reviews
