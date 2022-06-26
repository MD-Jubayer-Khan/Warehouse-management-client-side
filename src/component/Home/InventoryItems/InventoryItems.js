import React, { useEffect, useState } from 'react';
import './InventoryItems.css'

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data.slice(0, 4)))
    },[])
    return (
        <div className='bg-light inventory-item d-flex flex-wrap ' >
            <div className='col-md-2 mt-3 container p-4 border'>
                <h2>Some of </h2> 
                <h3>Our Items</h3> 
                <p>Here's we stored various kind of electronics product such as computer, laptop, mobile, camera...etc want to know more about us</p> 
                <button className='btn btn-info border'>Click here</button>
            </div>
            {
                items.map(item => <Item key={item._id} name={item.name} img={item.img} seller={item.seller}></Item>)
            }

        </div>
    );

    function Item (props) {
        return (
                <div>
                 <div className="card m-4 p-4 col-md-5 card-item" style={{width:'170px',
                }} >
                   <img src={props.img} className="card-img-top" alt="..."/>
                   <div classNames="card-body">
                     <h4 className="card-title">{props.name}</h4>
                     <p className="card-text">Seller{props.seller}</p>
                     <button href="#" className="btn btn-primary">Update</button>
                   </div>
                 </div>
                </div>
             )
    }
};

export default InventoryItems;