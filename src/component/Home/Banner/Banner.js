import React from 'react';
import img from './img/1_Warehouse-Management.png';
import './Banner.css'

const Banner = () => {
    return (
         <div className='d-flex'>
             <h1 className='text-white col-md-4'>Warehouse <br /> Management <br /> Software</h1>
             <img className='rounded' src={img} alt="management images"></img>
         </div>

    );
};

export default Banner;