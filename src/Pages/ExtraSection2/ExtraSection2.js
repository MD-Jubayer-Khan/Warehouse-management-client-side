import React from 'react';
import img from './img/warehousImg.png'

const ExtraSection2 = () => {
    return (
        <div className='container section-two'>
         <div className='d-flex align-items-center'>
                <div style={{height:'1px', backgroundColor:'lightGray'}} className="w-50"></div>
                <img src={img} alt="images" />
                <div style={{height:'1px', backgroundColor:'lightGray'}} className="w-50"></div>
            </div>
            <p className='text-center mt-4' style={{color:'#bcbdc0'}}>TESTIMONIAL</p>
            <h2 className='w-50 mx-auto text-center mb-4' style={{color: '#7d7e81'}}>We found the inventory app to be a powerful tool to better organize our warehouse.It's simple and easily customizable </h2>
      </div>
    );
};

export default ExtraSection2;