import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import arrowup from '../../assets/arrow_up.svg';

export function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = () => {
        scroll.scrollToTop();
    };

    return (
        <div className={`fixed bottom-6 right-4 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="top" smooth={true} duration={500}>
                <button
                    className="border-2 text-black font-bold py-2 px-4 h-16 w-16 rounded-full"
                    onClick={handleClick}
                >
                <img src={arrowup} alt="go up" />
                </button>
            </Link>
        </div>
    );
};
