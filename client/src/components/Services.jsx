import React from 'react'
import Header from './Header'

const Services = () => {
  return (
    <>
    <Header/>
    <div id="services">
        <div className="container">
            <h1 className="sub-title">My Services</h1>
            <div className="services-list">
                <div>
                    <i className="fa-solid fa-code"></i>
                    <h2>Web Designing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit neque animi sapiente dolores ducimus.</p>
                    <a href="#">learn more</a>
                </div>
                <div>
                    <i className="fa-solid fa-crop"></i>
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit neque animi sapiente dolores ducimus.</p>
                    <a href="#">learn more</a>
                </div>
                <div>
                    <i className="fa-brands fa-app-store"></i>
                    <h2>Mobile Develpoment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit neque animi sapiente dolores ducimus.</p>
                    <a href="#">learn more</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services