import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const scrollToPosition = (pos) => {
        window.scrollTo({top: pos, behavior: 'smooth'})
    }
  
    return (
        <div className='bg-slate-100 bg-opacity-80 sticky w-screen h-[90px] flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[70px] px-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
            </svg>
            
            <div className=''>
                <h1 className='font-kanit text-2xl'>RADCA PRAWNY</h1>
                <h1 className='font-kanit text-2xl'>M-------- K-------</h1>
            </div>
            
            <ul className='flex justify-center space-x-8 ml-[500px] mr-[200px]'>
                <li onClick={() => scrollToPosition(50)} className='font-noto-serif text-xl text-gray-700 cursor-pointer underline-hover active:text-gray-500'>Główna</li>
                <li onClick={() => scrollToPosition(750)} className='font-noto-serif text-xl text-gray-700 cursor-pointer underline-hover active:text-gray-500'>O mnie</li>
                <li onClick={() => scrollToPosition(1600)} className='font-noto-serif text-xl text-gray-700 cursor-pointer underline-hover active:text-gray-500'>Usługi</li>
                <li onClick={() => scrollToPosition(2500)} className='font-noto-serif text-xl text-gray-700 cursor-pointer underline-hover active:text-gray-500'>Kontakt</li>
            </ul>
            
            <div className='relative'>
                <input
                    type="text"
                    placeholder="Szukaj..."
                    className="py-2 pl-4 pr-10 w-[350px] rounded-full bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <button onClick={toggleTheme} className="ml-10">
                {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                )}
            </button>
        </div>
    )
}