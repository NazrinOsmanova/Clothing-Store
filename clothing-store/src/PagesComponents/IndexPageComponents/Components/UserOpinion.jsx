import React from 'react'
import '../Styles/UserOpinionStyle.css';
import { BiSupport } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";
import { MdSyncProblem } from "react-icons/md";

const UserOpinion = () => {
  return (
    <>
      <section className='section8'>
        <div className="up">
          <p>Experience Exceptional Service!</p>
          <h4>Your Satisfaction is Our Priority</h4>
        </div>
        <div className="down">
          <div>
            <BiSupport />
            <h6>24x7 Support</h6>
            <p>Our dedicated team is available 24/7 to assist you with any inquiries or concerns. Whether it's day or night, we're here to ensure your shopping experience is seamless.</p>
          </div>
          <div>
            <GrUserExpert />
            <h6>Expert Guidance</h6>
            <p>Need help choosing the perfect outfit? Our fashion experts are just a click or call away. Let us guide you through the latest trends and styles to help you look and feel your best.</p>
          </div>
          <div>
            <MdContactSupport />
            <h6>Personalized Support</h6>
            <p>We believe in providing personalized support tailored to your needs. Whether you're looking for styling advice or tracking your order, our team is committed to delivering the assistance you deserve.</p>
          </div>
          <div>
            <MdSyncProblem />
            <h6>Quick Resolution</h6>
            <p>Got a question or issue? Our efficient support team ensures quick resolution to ensure minimal disruption to your shopping experience. Count on us to address your concerns promptly.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserOpinion