"use client";
import React from 'react'
import Image from 'next/image' // Import el componente optimizado de Next.js para cargar imágenes.
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='h-full w-full pt-14 pb-10 xl:mb-0 z-10 bg-center bg-cover bg-no-repeat relative px-8 md:px-16' id='main'
            style={{ backgroundImage: "url(/imagenes/bg-4.svg)" }}>

            {/*Gradients */}
            <div className="absolute bottom-[-100px] h-full -z-10 w-full inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000]">
            </div>

            <div className='grid grid-cols-1 z-20 lg:grid-cols-12 md:py-24'>
                <div className='col-span-7 lg:pr-[80px] xl:pr-0 place-self-center text-center sm:text-left'>

                    <h1 className="text-white mb-4 text-4xl font-semibold text-shadow-md">
                        <span className='text-transparent font-extrabold text-7xl bg-clip-text bg-gradient-to-r from-[#ff007b] to-[#9c004b]'>
                            Hello, I'am{" "}
                        </span>
                        <TypeAnimation //libreria react-type-animationS
                            //secuencia consta en el nombre y el tiempo que dura la secuencia
                            sequence={[
                                'StivCode',
                                1000,
                                'constant learning',
                                1000,
                                'Web designer',
                                1000,
                                'Web developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className='font-sour' />
                    </h1>

                    <p className='text-white mb-4 text-lg lg:text-xl text-shadow-xl'>
                        Passionate about creating modern and functional interfaces. I love learning and facing new challenges,
                        every day I work to become a full stack developer. Explore my portfolio
                        and know a little more about my journey in this technological world. ¡I'm always willing to collaborate
                        and create something amazing!.

                    </p>

                    <div>
                        <button className='px-1 py-1 w-full md:w-fit mt-4 md:mr-4 rounded-full bg-transparent bg-gradient-to-br hover:to-[#DA185B] hover:hover:from-[#fff]'>
                            <span className='block px-5 py-2 rounded-full bg-gradient-to-tr from-[#2D0040] to-[#DA185B] text-white '>
                                Hire me
                            </span>
                        </button>

                        <button className='px-1 py-1 w-full md:w-fit mt-4 rounded-full bg-transparent bg-gradient-to-br from-[#2D0040] to-[#DA185B] text-white hover:from-[#fff]'>
                            <span className='block bg-[#83003f] rounded-full px-5 py-2'>
                                Downloand CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center lg:place-self-end mt-10 lg:mt-0'>
                    <div className='relative flex justify-center rounded-full bg-cover shadow-xl shadow-black border-2 border-white w-[350px] h-[350px] md:w-[450px] md:h-[450px]'
                        style={{ backgroundImage: "url(/imagenes/bg-4.svg)" }}>
                        <Image
                            className='rounded-l-[140px] rounded-r-[80px] object-cover absolute bottom-5 drop-shadow-2xl left-0'
                            src="/imagenes/logo-oficiall.png"
                            alt='hero-image'
                            priority
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection