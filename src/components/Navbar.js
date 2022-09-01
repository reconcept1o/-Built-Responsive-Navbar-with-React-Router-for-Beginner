import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import  './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'

function Navbar({clicked, isClicked}) {

  const handleClicked = () => {
    isClicked(!clicked);
  }
 
   return (
    <div className="Nav">
      <ul className="NavbarWrapper">
        <li className="NavLogo">
            <Link className="Link" to="/">Navbar</Link>
            </li>
         <li className="NavElements">
            <NavLink   className="Link" to="/">Home</NavLink>
            </li>
          <li className="NavElements">
            <NavLink className="Link" to="/about-us">About</NavLink>
            </li> 
          <li className="NavElements" >
            <NavLink className="Link" to="/contact-us">Contact</NavLink>
            </li>


           <li className="NavButton">
          <NavLink className="Link" to="/sign-up">
            Sign Up
          </NavLink>
        </li>
        <li
          className="NavElements"
          style={{ float: "right", margin: "-8px 2px 1px 2px" }}
        >
          <NavLink className="Link" to="/sign-in">
            Sign In
          </NavLink>
        </li>


          {/* <li className="NavButton" >
            <NavLink className="Link" to="/sign-up">Sign Up</NavLink>
            </li>

          <li  className="NavElements">
            <NavLink  className="Link" to="/sign-in">Sign İn</NavLink>
            </li> */}
          
      </ul>
      {!clicked ? (
        <GiHamburgerMenu className="Icon" onClick={handleClicked} />
      ) : (
        <ImCross className="Icon" onClick={handleClicked} />
      )}
    </div>
  );
}

export default Navbar;