"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className='w-full px-8 md:px-16 bg-[#0F0F0F] border border-t-[#33353f] border-l-transparent border-r-transparent'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className='py-4 flex justify-between items-center text-gray-600'>
                <Link href={"#main"}>
                    <Image src={"/imagenes/logo.png"} width={45} height={45} className='hover:animate-rotational-wave' alt='logo stiv' />
                </Link>
                <div className='text-sm w-[80%] md:w-1/2 md:pl-10 pl-0'>
                    <p>© 2024 StivCode. All rights reserved.
                        This website and its content are protected under copyright law.
                        Unauthorized use, reproduction, or distribution is strictly prohibited.
                        For permissions or inquiries, please contact us directly.</p>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer