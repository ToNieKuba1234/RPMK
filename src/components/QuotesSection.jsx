import React, { useState, useEffect } from 'react';
import TypewriterEffect from 'react-typewriter-effect';

export default function QuotesSection() {
    const quotes = [
        '"Nakazy prawa są następujące: żyć uczciwie, drugiemu nie szkodzić, każdemu oddać co mu się należy" - Ulpian',
        '"Lex retro non agit" - Prawo nie działa wstecz',
        '"Prawo jest sztuką tego, co dobre i słuszne." - Celsus',
        '"ignorantia iuris nocet ignorantia facti non nocet" - Ignorancja prawa szkodzi, ignorancja faktu nie szkodzi',
    ];

    const [currentQuote, setCurrentQuote] = useState(quotes[0]);


    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };

    useEffect(() => {
        getRandomQuote();
    });

    return (
        <div className='w-screen h-[600px] background-transparent flex items-center justify-center flex-col'>
            <div className='text-center text-6xl font-bebas-neue text-white'>
                <TypewriterEffect
                    textStyle={{
                        fontFamily: 'Bebas Neua',
                        fontSize: '8rem',
                        color: 'white',
                    }}
                    startDelay={250}
                    cursorColor="white"
                    multiText={['Prawo', 'Zaufanie', 'Skuteczność', 'Pomoc', 'Doświadczenie', 'Godność', 'Walka']}
                    multiTextDelay={3000}
                    typeSpeed={75}
                    deleteSpeed={45}
                    multiTextLoop={true}
                />
            </div>

            <p className='text-center text-2xl font-noto-serif text-white font-kanit my-5'>
                {currentQuote}
            </p>
        </div>
    );
}