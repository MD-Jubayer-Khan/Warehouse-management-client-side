import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                items.map(item => <Item key={item._id} item={item}></Item>)
            }

        </div>
    );

    function Item ({item}) {
        
        const navigate = useNavigate();

        const handleDynamicRout = id => {
                navigate(`/inventory/${id}`)
            }

        return (
                <div>
                 <div className="card m-4 p-4 col-md-5 card-item" style={{width:'170px',
                }} >
                   <img src={item.img} className="card-img-top" alt="..."/>
                   <div classNames="card-body">
                     <h4 className="card-title">{item.name}</h4>
                     <p className="card-text">Supplier: {item.supplier}</p>
                     <p>Price:{item.price}</p>
                     <p>Quantity:{item.quantity}</p>
                     <button onClick={()=> handleDynamicRout(item._id)} className="btn btn-primary">Update</button>
                   </div>
                 </div>
                </div>
             )
    }
};

export default InventoryItems;