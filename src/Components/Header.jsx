import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" className='logo'/>
      <ul className='header-menu'>
        <li><a href='#footer'>Home</a></li>
        <li><a href='#programs'>Programs</a></li>
        <li><a href='#reasons'>Why us</a></li>
        <li><a href='#plans'>Plans</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
      </ul>
    </div>
  )
}

export default Header
