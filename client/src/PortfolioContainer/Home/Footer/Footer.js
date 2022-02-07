import React from 'react';
import "./Footer.css";
import image from "../../../assets/Home/shape-bg.png";

function Footer() {
    return (
        <div className='footer-container'>
         <div className ="footer-parent">
         <img
          src={image}
          alt="you have problem with the image"
        />
         </div>
         
        </div>
    )
}

export default Footer
