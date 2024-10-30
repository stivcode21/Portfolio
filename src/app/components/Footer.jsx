import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='w-full px-8 md:px-16 bg-[#0F0F0F] border border-t-[#33353f] border-l-transparent border-r-transparent'>
            <div className='py-4 flex justify-between items-center text-gray-600'>
                <Image src={"/imagenes/logo.png"} width={45} height={45} className='transform transition-transform duration-500 hover:-rotate-12' />

                <div className='text-sm w-[80%] md:w-1/2 md:pl-10 pl-0'>
                    <p>© 2024 StivCode. All rights reserved.
                        This website and its content are protected under copyright law.
                        Unauthorized use, reproduction, or distribution is strictly prohibited.
                        For permissions or inquiries, please contact us directly.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer