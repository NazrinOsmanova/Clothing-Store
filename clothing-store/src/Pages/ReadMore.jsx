import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import './styles/ReadMoreStyle.css'
import { useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";

const ReadMore = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://662a6ef167df268010a3e9dd.mockapi.io/api/v1/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(details => {
        setDetails(details);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (event, index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <section className='section9'>
        {details.images && details.images.length > 0 && (
          <div className="left">
            <div className="items">
              {
                details.images.map((image, index) => (
                  <img key={index} src={image} alt={`image${index}`} onClick={(event) => handleImageClick(event, index)} />
                ))
              }
            </div>
            <div className="item">
              <img src={details.images[selectedImageIndex]} alt={`selected`} />
            </div>
          </div>
        )}
        <div className="right">
          <NavLink to='/products'><RiArrowGoBackFill /></NavLink>
          <h3>{details.name}</h3>
          <p>{details.price} $</p>
          <div>
            <p>Available Sizes</p>
            <div>
              {details && details.sizes && details.sizes.map((size, index) => (
                <p key={index}>{size}</p>
              ))}

            </div>
          </div>
          <div>
            <NavLink to="/readmore">WISHLIST</NavLink>
            <NavLink to="/readmore">ADD TO CART</NavLink>
          </div>
          <div>
            <p>Product Details:</p>
            <p>{details.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReadMore