import { XMarkIcon } from '@heroicons/react/24/solid';
import { useTheme } from "@/app/hooks/ThemeContext";
import Image from 'next/image';

const InfoModal = ({ info, imgPath, onClose }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className='flex items-center justify-center w-full h-full relative transition-all ease-in-out z-50'>
            <div className={`w-[87%] md:w-1/2 h-[90%] animate-slideFromLeftFadeIn rounded-lg blur-effect-theme fixed top-0 mt-16 overflow-y-auto p-4
                ${isDarkMode ? "bg-white/80" : "bg-dark-bg/80"}`}>
                <button onClick={onClose} className={`absolute top-1 right-1 rounded-full 
                    ${isDarkMode ? "text-black" : "text-white"}`}>
                    <XMarkIcon className={`w-7 h-7 hover:text-dark-primary`} />
                </button>

                <div>
                    <Image src={imgPath} alt="letras-proyect" width={400} height={250} className='mx-auto object-contain' />
                    <p>{info}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;