"use client";
import React from 'react'
import Image from 'next/image' // Import el componente optimizado de Next.js para cargar imágenes.
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslations } from "next-intl";

const HeroSection = () => {

    const t = useTranslations("HomePage");

    function descargarPDF() {
        const enlace = document.createElement('a');
        enlace.href = '/imagenes/stivcode-cv.pdf';
        enlace.download = 'stivcode-cv.pdf';

        enlace.click();
    }
    function sectionContact() {
        const enlace = document.createElement('a');
        enlace.href = '#contact';
        enlace.click();
    }

    const { isDarkMode } = useTheme();

    return (
        <section id="main" className='box h-full pt-14 pb-10 xl:mb-0 z-10 bg-center bg-cover bg-no-repeat relative overflow-hidden'>

            <div className='grid grid-cols-1 z-20 lg:grid-cols-12 md:py-24'>
                <div className='col-span-7 lg:pr-[80px] xl:pr-0 place-self-center text-center sm:text-left animate-pulse-fade-in'>

                    <h1 className={`${isDarkMode ? "text-light-text" : "text-dark-text"} my-4 md:my-3 flex flex-col text-6xl md:text-7xl font-semibold text-center md:text-left`}>
                        <span className='text-transparent font-extrabold text-center md:text-left text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-[#6812EA] to-[#ba8cff]'>
                            {t("title")}{" "}
                        </span>
                        <TypeAnimation //libreria react-type-animationS
                            //secuencia consta en el nombre y el tiempo que dura la secuencia
                            sequence={[
                                'StivCode',
                                1000,
                                'Developer',
                                1000,
                                'Frontend',
                                1000,
                                'Desing',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className='uppercase' />
                    </h1>
                    <p className={`${isDarkMode ? "text-light-text" : "text-dark-text"} mb-2 text-lg font-normal text-balance`}>
                        {t("paragraph")}
                    </p>
                    <div>
                        <button onClick={sectionContact} className='px-1 py-1 w-full md:w-fit hover:scale-[1.03] mt-4 md:mr-4 group rounded-full bg-transparent bg-gradient-to-br hover:from-[#6812EA] hover:to-[#0F0F0F] transition-all ease-out duration-400'>
                            <span className='block px-5 py-2 rounded-full bg-gradient-to-tr from-[#0F0F0F] to-[#6812EA] group-hover:from-[#6812EA] group-hover:to-[#0F0F0F] text-white '>
                                {t("button-1")}
                            </span>
                        </button>

                        <button onClick={descargarPDF} className='px-1 py-1 w-full md:w-fit hover:scale-[1.03] mt-4 rounded-full bg-transparent group bg-gradient-to-br from-[#6812EA] to-[#6812EA] hover:from-[#6812EA] hover:to-[#0F0F0F] text-white transition-all ease-out duration-400'>
                            <span className='block bg-transparent bg-gradient-to-br from-[#6812EA] to-[#0F0F0F] group-hover:to-[#6812EA] group-hover:from-[#0F0F0F] rounded-full px-5 py-2'>
                                {t("button-2")}
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center lg:place-self-end mt-10 lg:mt-0 animate-bounce-fade-in'>
                    <div className='relative flex justify-center items-center rounded-full bg-cover shadow-lg shadow-[#6812EA] border-4 border-[#6812EA] w-[350px] h-[350px] md:w-[400px] md:h-[400px]'>
                        <div className="bg-gradient-to-br from-[#6812EA] to-[#0F0F0F] rounded-full w-full h-full absolute transition-all duration-300 top-0 left-0 z-10"></div>

                        <Image
                            className='rounded-full object-cover absolute bottom-0.5 drop-shadow-2xl z-30 transition-all ease-in-out'
                            src="https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Flogo.webp?alt=media&token=c5b081ed-dc7f-4607-95fb-2b1eb4734400"
                            alt='hero image'
                            priority
                            width={340}
                            height={340}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection