import React, { useState, useEffect } from 'react';
import '../Styles/CarouselStyle.css'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../Images/CarouselImage1.jpg'),
        require('../Images/CarouselImage2.jpg'),
        require('../Images/CarouselImage3.jpg'),
        require('../Images/CarouselImage4.jpg'),
    ];

    const goToNextSlide = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 2000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <header>
                <div className="carousel">
                    <button className="prev" onClick={goToPrevSlide}><GrPrevious /></button>
                    <div className="slides">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={index === currentIndex ? "slide active" : "slide"}
                            >
                                <img src={img} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <button className="next" onClick={goToNextSlide}><GrNext /></button>
                </div>
                <div className="dots">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={index === currentIndex ? "dot active" : "dot"}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </header>
        </>
    );
};

export default Carousel;