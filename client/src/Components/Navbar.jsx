
import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.svg"
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [showlinks, setShowLinks] = useState(true)
  return (
    <div className="navbar-container">
      <img className="logo" src={logo} alt="Pine Edge Cabin Logo" />

      <GiHamburgerMenu className="navbar-toggle" onClick={() => setShowLinks(!showlinks)}/>

      {showlinks ? <ul></ul>: <ul >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Booking</a>
        </li>
        <li>
          <a href="#">local Attractions</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>}

      
    </div>
  )
}

export default Navbar
