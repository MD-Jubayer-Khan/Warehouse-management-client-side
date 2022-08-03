import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import RestockQty from '../RestockQty/RestockQty';

const InventoryId = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `https://dry-mesa-29133.herokuapp.com/item/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));

    },[id, item]);

    const handleDelivered = (item) => {

        const quantity = item.quantity;
        const newQuantity = quantity - 1;

        const url = `https://dry-mesa-29133.herokuapp.com/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('item delivered successfully')
        })

    }

    return (
        <div>     
            <RestockQty></RestockQty>      
         <Card className='mt-4 mx-auto' style={{ width: '22rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>Name: {item.name}</Card.Title>
            <Card.Text>Product ID: {item._id} </Card.Text>
            <Card.Title>Price: $ {item.price}</Card.Title>
            <Card.Text>Description: {item.describe} </Card.Text>
            <Card.Text>Supplier: {item.supplier} </Card.Text>
            <Card.Title>Quantity: {item.quantity}</Card.Title>
            <Button onClick={()=>handleDelivered(item)} className='mt-2' variant="primary">Delivered</Button>
          </Card.Body>
        </Card>
        </div>
    );
};

export default InventoryId;