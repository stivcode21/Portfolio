"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from "next-intl";

const Footer = () => {

    const t = useTranslations("footer");

    return (
        <footer className='w-full border border-t-[#33353f] border-l-transparent border-r-transparent'>
            <div
                className='box py-4 flex justify-between items-center text-gray-600'>
                <Link href={"#main"}>
                    <Image src={"/imagenes/logo.png"} width={45} height={45} priority alt='logo stiv' />
                </Link>
                <div className='text-xs w-[85%]'>
                    <p>{t("text")}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer