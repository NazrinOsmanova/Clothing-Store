import React from 'react'
import './styles/ContactStyle.css'
import { NavLink } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section className='section10'>
                <div>
                    <p>Contact Us</p>
                    <p>If you have any questions about the products, please feel free to contact us directly. We are glad you chose us and we will answer all your questions.</p>
                </div>
            </section>
            <section className='section11'>
                <div className="left">
                    <div className="up">
                        <p>How can we help you today?</p>
                        <p>Feel free to contact us directly if you have any questions, we would love to have you stay with us.</p>
                        <p>Simply fill in your personal data and let us get in touch with you. Normally, the support team answers within one business day, so that you don't have to wait. Or call us directly from the phone. </p>
                    </div>
                    <div className="down">
                        <div>
                            <div className='myDiv1'>
                                <IoHomeOutline />
                                <p>Address</p>
                            </div>
                            <NavLink to='/contact'>178 West 27th Street, Suite 527 New York NY 10012</NavLink>
                        </div>
                        <div>
                            <div className='myDiv1'>
                                <FaPhoneAlt />
                                <p>Get in Touch</p>
                            </div>
                            <div className='phone'>
                                <NavLink to='/contact'>+ 1 800 632 5234</NavLink>
                                <NavLink to='/contact'>info@demolink.org</NavLink>
                            </div>
                        </div>
                        <div>
                            <div className='myDiv1'>
                                <FaRegCalendarAlt />
                                <p>Hours</p>
                            </div>
                            <div className='hours'>
                                <div className='myDiv2'>
                                    <p>Mon to Fri</p>
                                    <p>7:30 am - 1:00 am</p>
                                </div>
                                <div className='myDiv2'>
                                    <p>Sat</p>
                                    <p>9:00 am - 1:00 am</p>
                                </div>
                                <div className='myDiv2'>
                                    <p>Sun</p>
                                    <p>9:00 am - 11:30 am</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form >
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder='Enter Your Name' required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder='Enter Your Email' required />
                        </div>
                        <div>
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder='Enter Subject of Problem' required /></div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" placeholder='Write Your Message in Here' required></textarea>
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact