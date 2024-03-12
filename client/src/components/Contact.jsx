import React from 'react';
import image2 from "../images/p2.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from './Header';



const Contact = () => {
const [formData, setFormData] = useState({name: "",email: "", phone: "",message: ""});

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

};

const handleSubmit = (event) => {
    event.preventDefault();
//   alert(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`);
  console.log(`Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`)

  let greeting = document.getElementById("greeting");
  greeting.innerText = `Weclome! ${formData.name}.`;
};


  return (
    <>
    <Header/>
      <div id="contact">
        <div className="container">
          <h1 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>Contact Me</h1>
          {/* <p style={{ textAlign: 'center', marginBottom: '50px', fontSize: '12px' }}>Interested if I'd be right fit for your team? Fill in this form and I will respond within 23-48 hours.</p> */}
          <div className="row">
            <div className="contact-left">
            <form onSubmit={handleSubmit}>
            
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' required/>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your Email'required/>
                <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='Your phone'required/>
                <textarea id="message" name="message" rows = '5' value={formData.message} onChange={handleChange} placeholder='Your Message'/>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
            <div className="contact-right">
              <form>
              <img src={image2} style={{ width: "100%", marginTop:"35px", opacity: "0.8", borderRadius: "15px" }}alt="" /> 
              <div><h1 id="greeting"></h1></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Contact;