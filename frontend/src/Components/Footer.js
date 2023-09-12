import React from 'react'

function Footer() {
    return (
        <div className="container min-w-full bg-[#545B77]">
            <div className="grid grid-cols-2 text-white py-4 px-2 lg:grid-cols-4">
                <div className='grid gap-y-2'>
                    <p>FashinBuzz</p>
                    <div>
                        <img src="" alt="" />
                        <p>hello@fashinbuzz.com</p>
                    </div>
                </div>

                <div className='grid gap-y-1'>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                </div>

                <div className='grid gap-y-1'>
                    <p>Product Category</p>
                    <p>Our Services</p>
                    <p>Our Process</p>
                </div>

                <div className='grid gap-y-1'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer