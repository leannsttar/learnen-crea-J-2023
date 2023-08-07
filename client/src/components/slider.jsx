
import React, { useState, useEffect } from "react";

export function Slider() {
    const data = [
        {
            src: "/assets/slider_signup1.png",
            text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
            author: "Maestra Marielos",
            brand: "/assets/learnen.png",
        },
        {
            src: "/assets/slider_signup2.png",
            text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
            author: "Nacely Orellana",
            brand: "/assets/learnen.png",
        },
        {
            src: "/assets/slider_signup3.png",
            text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
            author: "Juana Sanchez",
            brand: "/assets/learnen.png",
        },
        {
            src: "/assets/slider_signup4.png",
            text: "“Learnen is the best social network for people who want to practice a language by interacting with real people..”",
            author: "Victor Garcia",
            brand: "/assets/learnen.png",
        },
    ];


    // Slider
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    //
    return (
        <>
            {/* slider */}
            <div className="flex w-full h-screen overflow-hidden relative">
                <img
                    src={data[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    className="w-full h-screen md:h-full object-cover"
                />
                <div className="absolute bottom-60 p-2 rounded-xl backdrop-contrast-[.90] backdrop-blur-sm left-20 w-[800px] h-fit flex items-end ">
                    <div className="text-white text-xl md:text-xl w-1/2 italic break-words  ">
                        {data[currentIndex].text}
                    </div>
                    <div className="text-white text-xl right-0 md:text-xl">
                        {data[currentIndex].author}
                    </div>
                    <div className="">
                        <img
                            className="relative w-20 left-16"
                            src={data[currentIndex].brand}
                            alt=""
                        />
                    </div>
                </div>
            </div>


        </>


    )
}