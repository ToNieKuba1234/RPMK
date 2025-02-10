import React, { useState, useEffect, useRef } from 'react';
import myPhoto from '../assets/me.png';

export default function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
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
        <div className="w-full min-h-[650px] flex flex-col md:flex-row border-t border-black">
            
            <div className="w-full md:w-[35%] h-[300px] md:h-auto relative">
                <img
                    src={myPhoto}
                    alt="O mnie"
                    className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
            </div>

            <div className="w-full md:w-[1px] h-[1px] md:h-full bg-black"></div>

            <div
                ref={sectionRef}
                className="w-full md:w-[65%] p-4 md:p-16 bg-slate-200 flex flex-col overflow-y-auto"
            >
                <div className="overflow-hidden">
                    <h2
                        className={`text-3xl md:text-5xl font-serif mb-8 text-gray-800 transition-transform duration-1000 ease-out ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                    >
                        O mnie
                    </h2>
                </div>
                <div className="overflow-hidden">
                    <p
                        className={`text-base md:text-lg text-gray-700 transition-transform duration-1000 ease-out ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                    >
                        Quae, fuga maiores dicta recusandae consectetur sapiente nam nisi. Nesciunt facere, dolore perspiciatis ratione repellendus nobis, facilis, minus nihil deserunt illo delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet quia quasi minima consectetur quos cupiditate aspernatur vel ipsa beatae, cum, sunt suscipit facilis. Maxime assumenda voluptate earum cupiditate hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde et voluptatibus aspernatur eius fugit hic dicta facere modi aperiam ipsam in officiis, at nam enim, consectetur quam error reiciendis accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, sequi cum? Possimus inventore eligendi quis voluptatibus maxime dolores asperiores iusto? Qui eum soluta quidem dolor aspernatur ex perspiciatis modi quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, officiis nulla repellendus saepe dicta quisquam accusantium dolorum ea? Deleniti dicta qui, alias facilis autem amet tenetur laborum aliquam suscipit repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto incidunt blanditiis totam ducimus saepe autem provident beatae, in illum, accusantium consectetur atque laudantium fuga quibusdam aut inventore quas libero facilis.
                    </p>
                </div>
            </div>
        </div>
    );
}