import React from 'react'
import  './Menu.css'
import {NavLink}from 'react-router-dom'

function Menu() {
  return (
    <div className="Navbars">
        <ul className="NavbarWrappers">
            <li className="NavbarElement">
                <NavLink className="Link" to="/">Home</NavLink>

            </li> <li className="NavbarElement">
                <NavLink className="Link" to="/about-us">About</NavLink>

            </li> <li className="NavbarElement">
                <NavLink className="Link" to="/contact">Contact us</NavLink>

            </li> <li className="NavbarElement">
                <NavLink className="Link" to="/sign-in">Sign İn</NavLink>

            </li> <li className="Navbutton">
                <NavLink className="linkbtn" to="/sign-up">Sign UP</NavLink>

            </li>
            
        </ul>

    </div>
  )
}

export default Menu