import React, { useState, useEffect, useRef } from 'react';
import wroclaw from '../assets/wroclaw.jpg';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full min-h-[650px] flex flex-col md:flex-row">
            {/* Dane kontaktowe */}
            <div className="w-full md:w-[60%] p-8 md:p-16 bg-slate-200 flex flex-col justify-center overflow-hidden">
                <h2
                    ref={textRef}
                    className={`text-4xl md:text-5xl font-serif mb-6 md:mb-8 text-gray-800 transition-transform duration-700 ease-out text-center md:text-left ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    Dane Kontaktowe
                </h2>
                <div
                    className={`space-y-4 text-gray-700 transition-opacity duration-700 ease-out text-center md:text-left ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <p className="text-xl md:text-2xl font-medium">Kancelaria Radcy Prawnego MK</p>
                    <p className="text-lg">ul. Spermowa 1, 50-001 Wrocław</p>
                    <p className="text-lg">Telefon: <span className="font-semibold">+48 XXX XXX XXX</span></p>
                    <p className="text-lg">Email: <span className="font-semibold">tutaj@email.pl</span></p>
                </div>
            </div>

            <div className="hidden md:block w-[1px] bg-black"></div>

            {/* Zdjęcie Wrocławia */}
            <div className="w-full md:w-[40%] relative h-auto">
                <img
                    src={wroclaw}
                    alt="wroclaw"
                    className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
            </div>
        </div>
    );
}
