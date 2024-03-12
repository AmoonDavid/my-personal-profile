import React from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div id="header">
        <div className="container">
            <nav>
                <img src={logo} alt="Website Logo" className="logo" /> 
                <ul id="sideMenu">
                    
                    <li><Link to={"/home"}>HOME</Link></li>
                    <li><Link to ={"/about"}>ABOUT</Link></li>
                    <li><Link to={"/services"}>SERVICES</Link></li>
                    <li><Link to ={"/portfolio"}>PORTFOLIO</Link></li>
                    <li><Link to={"/contact"}>CONTACT</Link></li>
              
                    {/* <i className="fa-solid fa-circle-xmark" onclick="closeMenu()"></i> */}
                </ul>
                {/* <i className="fa-solid fa-bars" onclick="openMenu()"></i> */}
            </nav>
            
        </div>

    </div>
    </>
  )
}

export default Header