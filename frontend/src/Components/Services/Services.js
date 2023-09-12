import React from 'react'
import Connect from '../Connect'

function Services() {
    return (
        <div className="container min-w-full grid gap-y-10">

            <div className="grid text-center my-4">
                <p className='text-2xl text-[#545B77] underline'>What we offer</p>
            </div>

            <div className="grid px-20">
                <div className='max-w-[550px] relative' >
                    <img src="/Images/service3.png" alt="" className='object-contain max-w-full max-h-full ' />
                    <div className='absolute right-[-500px] top-[35%]  w-[600px]  bg-[#F3F6FF] text-center px-5 py-2 shadow-md'>
                        <p className='text-2xl text-[#545B77] mb-5'>Design</p>
                        <p className=' text-[#545B77]'>With Al-driven forecasted designs, we empower to create the latest fashion the way brands envision them. Keeping the brand's specific needs in mind for conceptualized products, we offer quick access to 10K+ styles in 3K+ fabric options monthly.</p>
                    </div>
                </div>
            </div>

            <div className="grid px-20 place-items-end">
                <div className='max-w-[550px] relative' >
                    <img src="/Images/service2.png" alt="" className='object-contain max-w-full max-h-full ' />
                    <div className='absolute left-[-500px] top-[35%]  w-[600px]  bg-[#F3F6FF] text-center px-5 py-2 shadow-md'>
                        <p className='text-2xl text-[#545B77] mb-5'>Manufacturing</p>
                        <p className=' text-[#545B77]'>We offer a sustainable, reliable, and ethical manufacturing catalogue with the lowest MOQs of 50 PCS/Style aiming to minimize inventory costs. From production planning to sampling, quality controlling to labelling, we offer a complete range of services for seamless manufacturing.</p>
                    </div>
                </div>
            </div>

            <div className="grid px-20">
                <div className='max-w-[550px] relative' >
                    <img src="/Images/service1.png" alt="" className='object-contain max-w-full max-h-full ' />
                    <div className='absolute right-[-500px] top-[35%]  w-[600px]  bg-[#F3F6FF] text-center px-5 py-2 shadow-md'>
                        <p className='text-2xl text-[#545B77] mb-5'>Delivery</p>
                        <p className=' text-[#545B77]'>We offer consolidated logistic services while ensuring 10X faster deliverability by providing design to deliver within 21 days. We follow 24X7 rigorous quality monitoring and a dedicated Customer Success Manager is provided to ensure every step falls in the process.</p>
                    </div>
                </div>
            </div>

            <Connect />

        </div>
    )
}

export default Services