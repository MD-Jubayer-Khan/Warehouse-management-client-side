import React from 'react';
import img from './img/Warehouse-Management-System.jpg';
import './ExtraSection1.css'

const ExtraSection1 = () => {
    return (
        <div className='container '
         style={{display: 'flex', flexWrap:' wrap',
          color: '#7d7e81',
          marginBottom:' 30px'}}>
          <div className='col-md-7'> 
              <img className='img-fluid mt-4 rounded' 
                src={img}
                height="800"
                width="600"
                 alt="" />
              
          </div>
          <div className='col-md-5 mt-4'>
              <h2>We have a solution e-commerce challenges of all electronics.</h2>
              <ul>
                <li>Storage products safely with dedicated area from development to positioning and pricing — by focusing on the product</li><br />
                <li>There are five: stages in the product life cycle: development, introduction, growth, maturity, decline.</li><br />
                <li>Building a startup without a plan You may reach the goal, but the route will be long and painful. And we can reduce your pain.</li>
              </ul>
              <div>
                <button className='btn-info rounded'>SET IT ACTION</button>
                <div className="btn">TRY IT FREE</div>
              </div>
          </div>
        </div>
    );
};

export default ExtraSection1;