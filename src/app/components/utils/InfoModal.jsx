import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BeakerIcon, BookmarkIcon, CheckBadgeIcon, FireIcon, InboxArrowDownIcon, PlusIcon, RocketLaunchIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTheme } from "@/app/hooks/ThemeContext";
import Image from 'next/image';

const InfoModal = ({ description, subtitle, imgPath, color, onClose, skills, features, challenges, objetive }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className='flex items-center justify-center w-full h-full relative transition-all ease-in-out z-50'>
            <div className={`w-[90%] md:w-1/2 h-[85%] animate-slideFromLeftFadeIn rounded-lg blur-effect-theme fixed py-4 px-6 border border-[#666] top-0 mt-20 overflow-y-auto [&::-webkit-scrollbar]:hidden 
                ${isDarkMode ? "bg-white/70 shadow-black/60" : "bg-dark-bg/85 shadow-black/70"}`}>
                {/* boton para cerrar */}
                <button onClick={onClose} className={`sticky -ml-4 -mt-4 z-20 top-0 right-0 rounded-full 
                    ${isDarkMode ? "text-black" : "text-white"}`}>
                    <XMarkIcon className={`w-7 h-7 hover:text-dark-primary hover:scale-110`} />
                </button>

                <div>
                    <Image src={imgPath} alt="letras-proyect" width={400} height={250} className='mx-auto -mt-4 object-contain' />
                    <h1 className='text-center text-xl mb-6'>
                        <TypeAnimation
                            sequence={[
                                subtitle,
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className='uppercase font-semibold' />
                    </h1>
                    {/*Descripcion */}
                    <div className='relative mb-3'>
                        <BookmarkIcon className='w-6 h-6 absolute top-0 left-0' style={{ color: color }} />
                        <h2 className='text-wrap ml-8 text-lg font-semibold'>{`Descripcion`}</h2>
                        <p className='text-wrap ml-8 mr-1 md:mr-6 mt-1'>{description}</p>
                    </div>

                    {/*Objetivo */}
                    <div className='relative mb-3'>
                        <StarIcon className='w-6 h-6 absolute top-0 left-0' style={{ color: color }} />
                        <h2 className='text-wrap ml-8 text-lg font-semibold'>{`Objetivo`}</h2>
                        <p className='text-wrap ml-8 mr-1 md:mr-6 mt-1'>{objetive}</p>
                    </div>

                    {/*Funcionalidades clave */}
                    <div className='relative mb-3'>
                        <BeakerIcon className='w-6 h-6 absolute top-0 left-0' style={{ color: color }} />
                        <h2 className='text-wrap ml-8 text-lg font-semibold'>{`Funcionalidades clave`}</h2>
                        <div className='text-wrap ml-8 mr-1 md:mr-6 mt-1 relative'>
                            {(features?.map((option, i) => (
                                <div key={i} className='flex items-start mt-2'>
                                    <div className='relative ml-2'>
                                        <CheckBadgeIcon className='w-6 h-6 text-blue-500 absolute top-0 -left-4' />
                                    </div>
                                    <p className='text-wrap mr-1 md:mr-6 ml-4'>{option}</p>
                                </div>
                            )))}
                        </div>
                    </div>

                    {/* Habilidades */}
                    <div className='relative mb-3'>
                        <InboxArrowDownIcon className='w-6 h-6 absolute top-0 left-0' style={{ color: color }} />
                        <h2 className='text-wrap ml-8 text-lg font-semibold'>{`Habilidades`}</h2>
                        <div className='text-wrap ml-8 mr-1 md:mr-6 mt-1 relative'>
                            {(skills?.map((skill, i) => (
                                <div key={i} className='flex items-start mt-2'>
                                    <div className='relative ml-2'>
                                        <PlusIcon className='w-6 h-6 text-green-500 absolute top-0 -left-4' />
                                    </div>
                                    <p className='text-wrap mr-1 md:mr-6 ml-4'>{skill}</p>
                                </div>
                            )))}
                        </div>
                    </div>

                    {/* desafios */}
                    <div className='relative mb-3'>
                        <RocketLaunchIcon className='w-6 h-6 absolute top-0 left-0' style={{ color: color }} />
                        <h2 className='text-wrap ml-8 text-lg font-semibold'>{`Desafios`}</h2>
                        <div className='text-wrap ml-8 mr-1 md:mr-6 mt-1 relative'>
                            {(challenges?.map((skill, i) => (
                                <div key={i} className='flex items-start mt-2'>
                                    <div className='relative ml-2'>
                                        <FireIcon className='w-6 h-6 text-orange-500 absolute top-0 -left-4' />
                                    </div>
                                    <p className='text-wrap mr-1 md:mr-6 ml-4'>{skill}</p>
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;