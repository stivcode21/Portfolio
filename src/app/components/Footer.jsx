"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full px-8 md:px-16 bg-[#0F0F0F] border border-t-[#33353f] border-l-transparent border-r-transparent'>
            <div
                className='py-4 flex justify-between items-center text-gray-600'>
                <Link href={"#main"}>
                    <Image src={"/imagenes/logo.png"} width={45} height={45} priority alt='logo stiv' />
                </Link>
                <div className='text-xs w-[85%]'>
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