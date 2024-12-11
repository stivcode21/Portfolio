"use client";
import React from 'react'
import Image from 'next/image' // Import el componente optimizado de Next.js para cargar imágenes.
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {

    function descargarPDF() {
        const enlace = document.createElement('a');
        enlace.href = '/imagenes/CV-StivCode.pdf';
        enlace.download = 'CV-StivCode.pdf';

        enlace.click();
    }
    function sectionContact() {
        const enlace = document.createElement('a');
        enlace.href = '#contact';
        enlace.click();
    }

    return (
        <section id="main" className='h-full bg-[#0F0F0F] pt-14 pb-10 xl:mb-0 z-10 bg-center bg-cover bg-no-repeat relative px-8 md:px-16 overflow-hidden'>

            <div className='grid grid-cols-1 z-20 lg:grid-cols-12 md:py-24'>
                <div className='col-span-7 lg:pr-[80px] xl:pr-0 place-self-center text-center sm:text-left animate-pulse-fade-in'>

                    <h1 className="text-white mb-4 md:mb-0 flex flex-col md:block text-3xl font-semibold text-shadow-sm">
                        <span className='text-transparent font-extrabold text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-[#6812EA] to-[#ba8cff]'>
                            Hello, I am{" "}
                        </span>
                        <TypeAnimation //libreria react-type-animationS
                            //secuencia consta en el nombre y el tiempo que dura la secuencia
                            sequence={[
                                'StivCode',
                                1000,
                                'Web designer',
                                1000,
                                'Web developer',
                                1000,
                                'Learning Unity',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className='font-mono' />
                    </h1>
                    <p className='text-white mb-2 text-lg font-normal tracking-[0.5px] text-justify'>
                        Every project is an opportunity to create something unique. I&apos;m completely committed to my professional development and have a great willingness to face new challenges.
                        Collaboration is key to transforming ideas into extraordinary results, and I&apos;m ready to work with passionate people. Let&apos;s build something memorable together!
                    </p>
                    <div>
                        <button onClick={sectionContact} className='px-1 py-1 w-full md:w-fit hover:scale-[1.03] mt-4 md:mr-4 group rounded-full bg-transparent bg-gradient-to-br hover:hover:from-[#6812EA] hover:to-[#0F0F0F] transition-all ease-out duration-400'>
                            <span className='block px-5 py-2 rounded-full bg-gradient-to-tr from-[#0F0F0F] to-[#6812EA] group-hover:from-[#6812EA] group-hover:to-[#0F0F0F] text-white '>
                                Hire me
                            </span>
                        </button>

                        <button onClick={descargarPDF} className='px-1 py-1 w-full md:w-fit hover:scale-[1.03] mt-4 rounded-full bg-transparent group bg-gradient-to-br from-[#6812EA] to-[#6812EA] hover:from-[#6812EA] hover:to-[#0F0F0F] text-white transition-all ease-out duration-400'>
                            <span className='block bg-transparent bg-gradient-to-br from-[#6812EA] to-[#0F0F0F] group-hover:to-[#6812EA] group-hover:from-[#0F0F0F] rounded-full px-5 py-2'>
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, translateX: "100px", scale: 1 }}
                    whileInView={{ opacity: 1, translateX: "0", }}
                    transition={{ duration: 0.5 }}
                    viewport={{
                        once: true, // Permite que la animación se repita
                        amount: 0.1, // Activa cuando 10% es visible
                    }}
                    className='col-span-5 place-self-center lg:place-self-end mt-10 lg:mt-0 animate-bounce-fade-in'>
                    <div className='relative flex justify-center items-center rounded-full bg-cover shadow-lg shadow-[#6812EA] border-4 border-[#6812EA] w-[350px] h-[350px] md:w-[400px] md:h-[400px]'>
                        <div className="bg-gradient-to-br from-[#6812EA] rounded-full opacity-60 w-full h-full absolute transition-all duration-300 top-0 left-0 z-10"></div>

                        <Image
                            className='rounded-l-[130px] rounded-r-[80px] object-cover absolute drop-shadow-2xl md:left-4 bottom-5 z-30 transition-all ease-in-out'
                            src="https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Flogo.png?alt=media&token=23858596-1db8-4c23-a978-98f44c2e6302"
                            alt='hero image'
                            priority
                            width={340}
                            height={340}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default HeroSection