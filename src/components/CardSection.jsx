import React from 'react';
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

    return (
        <div
            className="w-screen min-h-[700px] flex items-center justify-center py-16 bg-cover bg-center shadow-2xl border-t border-b border-black"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})`
            }}
        >
            <div className='h-[1px] bg-black'></div>
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-10 gap-6 justify-items-center">
                {services.map((service, index) => (
                    <Card key={index} service={service} className="w-full max-w-[90%] sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12" />
                ))}
            </div>
        </div>
    );
}