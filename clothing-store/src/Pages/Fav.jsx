// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import '../Styles/FavStyle.css'
// import { FaArrowRight } from "react-icons/fa";
// import { FiDelete } from "react-icons/fi";
// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";

// const Fav = () => {
//     const products = [
//         {
//             id: 1,
//             imageUrl: 'Product1',
//             name: "Ürün 1",
//             price: 50,
//             quantity: 5
//         },
//         {
//             id: 2,
//             imageUrl: "product2.jpg",
//             name: "Ürün 2",
//             price: 75,
//             quantity: 8
//         }
//     ];

//     const [productList, setProductList] = useState(products);
//     const [productCount, setProductCount] = useState(5);

//     const handleMinus = (id) => {
//         const updatedList = productList.map(product => {
//             if (product.id === id && product.quantity > 1) {
//                 return { ...product, quantity: product.quantity - 1 };
//             }
//             return product;
//         });
//         setProductList(updatedList);
//     };

//     const handlePlus = (id) => {
//         const updatedList = productList.map(product => {
//             if (product.id === id) {
//                 return { ...product, quantity: product.quantity + 1 };
//             }
//             return product;
//         });
//         setProductList(updatedList);
//     };

//     const handleDelete = (id) => {
//         const updatedList = productList.filter(product => product.id !== id);
//         setProductList(updatedList);
//     };

//     return (
//         <>
//             <section className='section1'>
//                 <div>
//                     <h3>Your Shopping Basket</h3>
//                     <p><span>{productCount}</span> items in basket</p>
//                 </div>
//                 <div>
//                     <NavLink to='/products' >Continue Shopping </NavLink>
//                     <FaArrowRight />
//                 </div>
//             </section>
//             <section className='section2' >
//                 <div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Product Image</th>
//                                 <th>Product Name</th>
//                                 <th>Price</th>
//                                 <th>Quantity</th>
//                                 <th>Subtotal</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productList.map(product => (
//                                 <tr key={product.id}>
//                                     <td><img src={product.imageUrl} alt={product.name} /></td>
//                                     <td>{product.name}</td>
//                                     <td>{product.price}</td>
//                                     <td>
//                                         <div className="quantity-container">
//                                             <button className="quantity-button" onClick={() => handleMinus(product.id)}><CiCircleMinus /></button>
//                                             <span>{product.quantity}</span>
//                                             <button className="quantity-button" onClick={() => handlePlus(product.id)}><CiCirclePlus /></button>
//                                         </div>
//                                     </td>
//                                     <td>2024</td>
//                                     {/* <td><FiDelete /></td> */}
//                                     <td><button onClick={() => handleDelete(product.id)}><FiDelete /></button></td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Fav

import React from 'react'

const Fav = () => {
  return (
    <div>Fav</div>
  )
}

export default Fav