import React from 'react'
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Header from './Header';

const Home = () => {
  return (
    <>
    <Header/>
    <div id="header">
        <div className="container">
            
            <div className="header-text">
                <p>Software Engineer</p>
                <h1>Hi, i'm <span>Amoon David</span><br/>from Pakistan.</h1>
            </div>
        </div>

    </div>
    </>
  )
}

export default Home