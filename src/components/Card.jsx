import React from 'react';
import front_card from '../assets/front_card.png';
import back_card from '../assets/back_card.png';

export default function Card({ service }) {
    return (
        <div className="w-[183px] h-[268px] flip-card perspective-1000 hover:rotate-y-180">
            <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-cover bg-center">
                    <img
                        src={back_card}
                        alt="front"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-cover bg-center rotate-y-180">
                    <img
                        src={front_card}
                        alt="back"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-black font-bebas-neue text-2xl shadow-2xl">
                        {service}
                    </div>
                </div>
            </div>
        </div>
    );
}