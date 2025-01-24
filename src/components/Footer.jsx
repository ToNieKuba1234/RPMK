import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Kancelaria Radcy Prawnego M-------- K-------. Wszelkie prawa zastrzeżone.</p>
                <p className="text-xs mt-1">
                    Made by Jakub Kasprzak
                </p>
            </div>
        </footer>
    );
}