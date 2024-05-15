import React, { useState } from 'react';
import '../Styles/UserOpinionStyle2.css';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const UserOpinion2 = ({ users }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <section className='section17'>
                <button onClick={goToPrevSlide}><GrPrevious /></button>
                <div className="carousel">
                    <div className="carousel-content">
                        <div className="image">
                            <img src={users[currentIndex].img} alt={users[currentIndex].name} />
                        </div>
                        <div className="user-details">
                            <h3>{users[currentIndex].name}</h3>
                            <p>{users[currentIndex].opinion}</p>
                        </div>
                    </div>
                </div>
                <button onClick={goToNextSlide}><GrNext /></button>
            </section>
        </>
    );
};

export default UserOpinion2;
