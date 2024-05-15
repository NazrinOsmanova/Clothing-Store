import React, { useState, useEffect } from 'react';
import '../Styles/FavouritesStyle.css';
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Favourites = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        fetch('https://662a6ef167df268010a3e9dd.mockapi.io/api/v1/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const filteredProducts = data.filter(product => product.rating > 4.5);
                setFilteredData(filteredProducts);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? filteredData.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === filteredData.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <>
            <section className='section4'>
                <div className='up'>
                    <div></div>
                    <h4>Most Rated Products</h4>
                    <div></div>
                </div>
                <div className="down">
                    <button className="prev" onClick={prevSlide}><GrPrevious /></button>
                    <div className="items">
                        {filteredData.slice(currentSlide, currentSlide + 4).map((m, index) => (
                            <NavLink to="/products" key={index}>
                                <div className="item" >
                                    <img src={m.images[0]} alt="img" />
                                    <h5>{m.name}</h5>
                                    <p><span>{m.rating}</span><FaStar /></p>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    <button className="next" onClick={nextSlide}><GrNext /></button>
                </div>
            </section>
        </>
    )
}

export default Favourites;