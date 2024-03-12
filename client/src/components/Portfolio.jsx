import React from 'react'
import Work1 from "../images/work-1.png"
import Work2 from "../images/work-2.png"
import Work3 from "../images/work-3.png"
import Header from './Header'


const Portfolio = () => {
  return (
    <>
    <Header/>
    <div id="portfolio">
        <div className="container"></div>
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
            <div className="work">
                <img src={Work1} alt="" />
                <div className="layer">
                    <h3>Social Media App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ducimus velit aliquam tempora neque nobis.</p>
                    <a href="#"><i className="fa-solid fa-link"></i></a>
                </div>
            </div>
            <div className="work">
                <img src={Work2} alt="" />
                <div className="layer">
                    <h3>Music App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ducimus velit aliquam tempora neque nobis.</p>
                    <a href="#"><i className="fa-solid fa-link"></i></a>
                </div>
            </div>
            <div className="work">
                <img src= {Work3} alt="" />
                <div className="layer">
                    <h3>Online Shopping App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ducimus velit aliquam tempora neque nobis.</p>
                    <a href="#"><i className="fa-solid fa-link"></i></a>
                </div>
            </div>
    
        </div>
        <a href="#" className="btn">See More</a>
    </div>
    </>
  )
}

export default Portfolio