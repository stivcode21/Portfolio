"use client";
import React, { useState } from "react";
import Link from "next/link";

const EmailSection = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    // Maneja el cambio en los inputs
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Mensaje enviado con éxito');
                setFormData({ email: '', subject: '', message: '' });
            } else {
                setStatus('Error al enviar el mensaje');
            }
        } catch (error) {
            setStatus('Error al enviar el mensaje');
        }
    };

    return (
        <section className="grid md:grid-cols-2 py-32 bg-[#0F0F0F] gap-4 relative px-8 md:px-16 bg-center z-10 bg-cover bg-no-repeat" id="contact">

            <div className="z-20">
                <h5 className="text-xl font-bold text-white my-2">let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Great things start with a simple hello! Whether you&rsquo;re a recruiter,
                    a tech enthusiast, or a creative partner, I&rsquo;d love to hear from you.
                    Let&rsquo;s explore how we can bring bold ideas to life together.
                </p>
                <div className="socials flex flex-row gap-3">
                    <Link href="https://github.com/stivcode21">
                        <svg role="img" className="w-12 h-12" fill="#6812EA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </Link>
                    <Link href="/">
                        <svg role="img" className="w-12 h-12" fill="#6812EA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </Link>
                </div>
            </div>
            <div >
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] focus:outline-[#6812EA] outline-none text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            autoComplete="off"
                            placeholder="example@gmail.com" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            autoComplete="off"
                            className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] focus:outline-[#6812EA] outline-none text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            placeholder="Just Saying hi!" />
                    </div>

                    <div>
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                            Menssage
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-transparent border focus:outline-[#6812EA] outline-none border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-[#6812EA] hover:scale-[1.03] border-2 border-[#6812EA] text-white font-medium py-2.5 rounded-lg w-full transition-all ease-out">
                        Send Menssage
                    </button>
                    {status && <p className="text-sm text-gray-400">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
