import React from 'react'
import './footer.css'; // Import the footer css file from the same folder

import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to listen to upbeat songs that make you happy again?
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access to Hit Pop Songs Now! </p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src= {gpt3Logo} alt="logo" />
          <p>Our address here</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Songs</p>
          <p>Artists</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Brand</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Copyright Law</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Email</p>
          <p>Number</p>
          <p>Mail</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
