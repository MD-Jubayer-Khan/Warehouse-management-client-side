import React from 'react';
import img from './img/1_Warehouse-Management.png';
import './Banner.css'

const Banner = () => {
    return (
         <div className='d-flex container flex-wrap' >
             <h1 className='text-white col-md-5 text-center'>Warehouse <br />Management <br /> Software</h1>
             <img style={{opacity:'0.4'}} className='rounded img-fluid' src={img} alt="management images"></img>
         </div>

    );
};

export default Banner;