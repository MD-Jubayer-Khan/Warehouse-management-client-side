import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InventoryItems.css'

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('https://dry-mesa-29133.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setItems(data.slice(0, 3)))
    },[]);
    
    return (
        <div className=' inventory-item d-flex flex-wrap '  >
            <div className='col-md-2 mt-3 container p-4 border'>
                <h2>Some of </h2> 
                <h3>Our Items</h3> 
                <p>Here's we stored various kind of electronics product such as computer, laptop, mobile, camera...etc want to know more about us</p> 
                <Link to={'/manageItems'} className='btn btn-info border'>Manage Items</Link>
            </div>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }

        </div>
    );

    function Item ({item}) {
        
        const navigate = useNavigate();

        const handleDynamicRout = (id) => { 
                navigate(`/inventory/${id}`);


            }

        return (
                <div>
                 <div className="card m-4 p-4 col-md-5 card-item" style={{width:'200px',
                }} >
                   <img src={item.img} className="card-img-top" alt="..."/>
                   <div classNames="card-body">
                     <h4 className="card-title">{item.name}</h4>
                     <p>description: {item.describe.slice(0, 30)}</p>
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