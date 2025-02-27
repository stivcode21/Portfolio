"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RingLoader } from "react-spinners"; //spinner
import { useTranslations } from "next-intl";

const EmailSection = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState(null);
    const t = useTranslations("Email");

    // Maneja el cambio en los inputs
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    useEffect(() => {
        // Este código agrega dinámicamente el script de Google reCAPTCHA a la página.
        // - script.src: Carga la biblioteca de reCAPTCHA desde Google, usando la clave pública del sitio.
        // - script.async: Permite que el script se cargue de manera asíncrona para no bloquear la página.
        // - document.body.appendChild(script): Inserta el script en el cuerpo del documento HTML.
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(<RingLoader color="#fff" size={30} />);

        try {
            // Obtener el token de reCAPTCHA
            const token = await window.grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                { action: "submit" }
            );

            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, token }),
            });

            if (response.ok) {
                setStatus(`message sent successfully✅`);
                setFormData({ email: '', subject: '', message: '' });
            } else {
                setStatus('Oh!, ocurrio un error. Intentalo de nuevo...');
            }
        } catch (error) {
            setStatus('Error al enviar el mensaje');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, translateY: "100px", scale: 0.5 }}
            whileInView={{ opacity: 1, translateY: "0", scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1, }}
            className="box grid md:grid-cols-2 py-16 md:py-32 gap-4 relative overflow-hidden" id="contact">

            <div>
                <h2 className='py-4 text-4xl md:text-5xl font-extrabold text-shadow-lg uppercase'>
                    {t("title")}
                </h2>
                <p className="text-lg mb-4 max-w-md">
                    {t("paragraph")}
                </p>
                <div className="socials flex flex-row gap-4 mb-6 md:mb-0">
                    <Link href="https://github.com/stivcode21" target='_blank'>
                        <svg role="img" className="w-10 h-10 hover:animate-tada" fill="#6812EA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </Link>
                    <Link href="https://www.linkedin.com/in/stivcode21/" target='_blank'>
                        <svg role="img" className="w-10 h-10 hover:animate-tada" fill="#6812EA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </Link>
                    <Link href="https://discord.gg/RMrVdprfJe" target='_blank'>
                        <svg role="img" className="w-10 h-10 hover:animate-tada" fill="#6812EA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                    </Link>
                </div>
            </div>
            <div>
                <form className="w-full h-full flex flex-col gap-6 text-md relative transition-all ease-in-out rounded-md" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                            {t("youEmail")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] focus:border-[#6812EA] focus:border-2 outline-none text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            autoComplete="off"
                            placeholder="example@gmail.com" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 font-medium">
                            {t("subject")}
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            autoComplete="off"
                            className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] focus:border-[#6812EA] focus:border-2 outline-none text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            placeholder="Just Saying hi!" />
                    </div>

                    <div>
                        <label htmlFor="message" className=" block mb-2 font-medium">
                            {t("message")}
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-transparent border focus:border-[#6812EA] focus:border-2 outline-none border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-dark-primary to-dark-bg hover:scale-[1.03] border-2 border-[#6812EA] text-white font-medium py-2.5 rounded-lg w-full active:scale-90 transition-all ease-out">
                        {t("button")}
                    </button>
                    <div>
                        {status && <div className="absolute w-full h-full top-0 left-0 bg-transparent backdrop-blur-sm bg-opacity-30 text-white text-lg p-4 flex justify-center items-center transition-all ease-in-out duration-300 rounded-md">{status}</div>}
                    </div>
                </form>
            </div>
        </motion.section>
    );
};

export default EmailSection;
