import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import './styles/CartStyle.css'

const Cart = ({ cartItems }) => {
    const [data, setData] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        fetch('https://662a6ef167df268010a3e9dd.mockapi.io/api/v1/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const filteredData = data.filter(item => cartItems.includes(item.id));
                setData(filteredData);
                const initialQuantities = {};
                filteredData.forEach(item => {
                    initialQuantities[item.id] = 1;
                });
                setQuantities(initialQuantities);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [cartItems]);

    const incrementQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: prevQuantities[productId] + 1,
        }));
    };

    const decrementQuantity = (productId) => {
        if (quantities[productId] > 1) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1,
            }));
        }
    };

    const removeItem = (productId) => {
        setData(prevData => prevData.filter(item => item.id !== productId));
        setQuantities(prevQuantities => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[productId];
            return updatedQuantities;
        });
    };

    return (
        <>
            <section className='section1'>
                <div>
                    <h3>Your Shopping Basket</h3>
                    <p> {data.length} items in basket</p>
                </div>
                <div>
                    <NavLink to='/products' >Continue Shopping </NavLink>
                    <FaArrowRight />
                </div>
            </section>
            <section className='section2' >
                <table>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((m, index) => (
                                <tr key={m.id}>
                                    <td><img src={m.images[0]} alt="image1" /></td>
                                    <td>{m.name}</td>
                                    <td>{m.price}</td>
                                    <td>
                                        <div className="quantity-container">
                                            <button className="quantity-button" onClick={() => decrementQuantity(m.id)}><AiOutlineMinus /></button>
                                            <p>{quantities[m.id]}</p>
                                            <button className="quantity-button" onClick={() => incrementQuantity(m.id)}><AiOutlinePlus /></button>
                                        </div>
                                    </td>
                                    <td>2024</td>
                                    <td><button onClick={() => removeItem(m.id)}><RiDeleteBin5Line /></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Cart;