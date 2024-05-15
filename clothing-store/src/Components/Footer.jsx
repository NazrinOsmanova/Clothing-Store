import React from 'react'
import './styles/FooterStyle.css'
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className='section5'>
        <div className="left">
          <ul>
            <li>
              <NavLink to="/"><FaInstagram /></NavLink>
            </li>
            <li>
              <NavLink to="/"><FaGoogle /></NavLink>
            </li>
            <li>
              <NavLink to="/"><FaLinkedin /></NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className='up' >
            <NavLink to='/'>DRESSIFY</NavLink>
            <div></div>
          </div>
          <div className='down'>
            <div>
              <ul>
                <li><NavLink to='/'>Shop</NavLink></li>
                <li><NavLink to='/'>Gift Card</NavLink></li>
                <li><NavLink to='/'>About</NavLink></li>
                <li><NavLink to='/'>Journal</NavLink></li>
                <li><NavLink to='/'>Contact</NavLink></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><NavLink to='/'>FAQ</NavLink></li>
                <li><NavLink to='/'>Shipping & Returns</NavLink></li>
                <li><NavLink to='/'>Store Policy</NavLink></li>
                <li><NavLink to='/'>Payments</NavLink></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><NavLink to='/'>info@example.com</NavLink></li>
                <li><NavLink to='/'>500 Terry Francine Street</NavLink></li>
                <li><NavLink to='/'>San Francisco, CA 94158</NavLink></li>
                <li><NavLink to='/'>Tel: 123-456-7890</NavLink></li>
                <li><NavLink to='/'>Contact</NavLink></li>
              </ul>
            </div>
            <div>
              <form action="">
                <p>Sign up. Stay stylish</p>
                <input type="email" placeholder='Enter Your Mail Here' />
                <button>Sbuscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='section6'>
        <p>© 2035 by Life Etc. Created by <NavLink target="_blank" to='https://www.linkedin.com/in/nazrin-osmanova'>Nazrin Osmanova</NavLink> </p>
      </section>
    </footer>
  )
}

export default Footer