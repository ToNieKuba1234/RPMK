import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import bg from '../assets/wooden_bg.jpg';

export default function CardSection() {
    const services = [
        'Kredyty Frankowe',
        'Rozwody',
        'Spadki',
        'Prawo Karne',
        'Odszkodowania',
        'Umowy Cywilne',
        'Podatki',
        'Windykacja'
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-screen h-[1000px] flex items-center justify-center bg-cover bg-center shadow-2xl border-t border-b border-black"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})`
            }}
        >
            <div className='h-[1px] bg-black'></div>
            <div className={`grid grid-cols-4 w-full px-10 gap-y-6 justify-items-center transition-transform duration-700 ease-out ${
                isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
            }`}>
                {services.map((service, index) => (
                    <Card key={index} service={service} />
                ))}
            </div>
        </div>
    );
}