import React from 'react';
import { NavLink } from "react-router-dom"
import './styles/NavStyle.css'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <div>
          <ul>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className='logo' to="/"> DRESSIFY</NavLink>
        <ul>
          <li>
            <NavLink to="/fav"><CiHeart /></NavLink>
          </li>
          <li>
            <NavLink to="/cart">< CiShoppingCart /></NavLink>
          </li>
          <li>
            <NavLink to="/"><CiUser /></NavLink>
          </li>
        </ul>
      </nav>
      <div id='useless'></div>
    </>
  )
}

export default Nav