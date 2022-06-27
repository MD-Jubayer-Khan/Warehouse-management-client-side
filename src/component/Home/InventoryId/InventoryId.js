import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryId = (props) => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `https://dry-mesa-29133.herokuapp.com/item/${id}`

        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));

    },[id, item]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const number = event.target.number.value;
        const confirm = window.confirm('Are you sure you want to restock this item');
        if(confirm){
            console.log(number);
        }
        else{
            alert("Please confirm to restock");
        }
        
        event.target.reset()
    };

    const handleDelivered = () => {
        const deliveredItem = 1;

        const url = `https://dry-mesa-29133.herokuapp.com/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({deliveredItem})
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('item delivered successfully')
        })

    }

    return (
        <div>           
        <form onSubmit={handleFormSubmit} className='w-50 mx-auto mt-4 text-center' >
            <input type="number" name='number' required/>
            <input className='btn-success ms-1' type="submit" value="Restock" />
        </form>

         <Card className='mt-4 mx-auto' style={{ width: '30rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>Name: {item.name}</Card.Title>
            <Card.Text>Product ID: {item._id} </Card.Text>
            <Card.Title>Price: $ {item.price}</Card.Title>
            <Card.Text>Description: {item.describe} </Card.Text>
            <Card.Text>Supplier: {item.supplier} </Card.Text>
            <Card.Title>Quantity: {item.quantity}</Card.Title>
            <Button onClick={handleDelivered} className='mt-2' variant="primary">Delivered</Button>
          </Card.Body>
        </Card>
  =
        </div>
    );
};

export default InventoryId;