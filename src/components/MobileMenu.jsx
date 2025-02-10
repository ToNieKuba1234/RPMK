import React from "react";

export default function MobileMenu( { mobileMenu, scrollFunc } ) {
    return (
        <div className={`w-screen h-auto bg-white shadow-lg ${mobileMenu ? 'flex' : 'hidden'} md:hidden`}>
                <ul className="flex flex-col justify-center w-full suse-normal text-white border-0">
                    <li onClick={() => scrollFunc(50)} className="flex w-full bg-[#333333] px-8 py-4 text-center hover:bg-white hover:text-black">Główna</li>
                    <li onClick={() => scrollFunc(750)} className="flex w-full bg-[#333333] px-8 py-4 text-center hover:bg-white hover:text-black">O mnie</li>
                    <li onClick={() => scrollFunc(1600)} className="flex w-full bg-[#333333] px-8 py-4 text-center hover:bg-white hover:text-black">Usługi</li>
                    <li onClick={() => scrollFunc(2500)} className="flex w-full bg-[#333333] px-8 py-4 text-center hover:bg-white hover:text-black">Kontakt</li>
                </ul>
        </div>
    )
}