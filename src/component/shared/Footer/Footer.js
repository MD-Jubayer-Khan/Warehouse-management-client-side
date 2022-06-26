import React from 'react';
import './Footer.css'
import logo from '../Header/img/warehouse-logo.png'
import img from './Icon/images.png'

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className='container col-md-2 first-section'>
                 <img
                     src={logo}
                     width="150"
                     height="90"
                     className="d-inline-block align-top mt-4"
                     alt="logo"
                  />
                  <p>Here's we stored various kind of electronics product such as computer, laptop, mobile, camera...etc want to know more about us</p>
                  <img
                  className='img-fluid'
                     src={img}
                     width="300"
                     height="200"
                     alt="React Bootstrap logo"
                  />
            </div>
            <div className='col-md-2 mt-4'>
               <h2 className='mt-4'>Product</h2>
               <p>Computer</p>
               <p>Laptop</p>
               <p>Mobile</p>
               <p>Freeze</p>
               <p>Any electronics device</p>
            </div>
            <div className='col-md-4 mt-4'>
                <h2 className='mt-4'>Solution</h2>
                <p>E-commerce distribution</p>
                <p>F-commerce</p>
                <p>3PL transformation</p>
                <p>Brand commerce</p>
                <p>Cross-border E-commerce</p>
            </div>
            <div className='col-md-2 mt-4'>
                <h2 className='mt-4'>Company</h2>
                <p>Leadership</p>
                <p>Journey</p>
                <p>Resource</p>
                <p>Join with warehouse</p>
                <p>About electronics warehouse</p>
            </div>
        </div>
    );
};

export default Footer;