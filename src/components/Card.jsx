import React, { useState } from 'react';
import front_card from '../assets/front_card.png';
import back_card from '../assets/back_card.png';

export default function Card({ service }) {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(true);
    };

    return (
        <div className="w-[222px] h-[325px]">
            <div
                className={`w-[100%] h-[100%] relative ${
                    flipped ? '' : 'cursor-pointer'
                }`}
                onClick={handleClick}
            >
                <img
                    src={flipped ? front_card : back_card}
                    alt="card"
                    className={`w-[98%] h-[98%] user-drag-none object-cover transition-all duration-700 ease-in-out ${
                        flipped
                            ? 'shadow-2xl'
                            : 'hover:cursor-pointer hover:w-[100%] hover:h-[100%]'
                    }`}
                />
                
                {flipped && (
                    <div className="absolute inset-0 flex items-center justify-center text-black text-3xl font-bebas-neue shadow-2xl transition-opacity duration-700">
                        {service}
                    </div>
                )}

                {flipped && (
                    <div className="absolute bottom-8 font-noto-serif left-1/2 transform -translate-x-1/2 text-black text-sm bg-gradient-to-t rounded-md transition-all duration-500 hover:text-base hover:cursor-pointer active:text-gray-600">
                        Czytaj więcej
                    </div>
                )}
            </div>
        </div>
    );
}