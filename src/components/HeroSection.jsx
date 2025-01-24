import React from 'react';
import temida from '../assets/temida.jpg';  // Zastąp ścieżką do pliku ze zdjęciem

export default function HeroSection() {
    return (
        <div
            className="w-full h-[250px] bg-cover bg-center relative pt-[90px] border-t border-b border-black"
            style={{ backgroundImage: `url(${temida})` }}
        >
            <div className="absolute inset-0 bg-gray-800 opacity-70"></div> {/* Przyciemnienie szarością */}
            <div className="absolute inset-0 flex items-center ml-12">
                <h2 className="text-stroke text-5xl font-bold">Bo każdy, zasługuje na Sprawiedliwość.</h2>
            </div>
        </div>
    );
}