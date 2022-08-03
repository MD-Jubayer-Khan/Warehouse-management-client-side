import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestockQty = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `https://dry-mesa-29133.herokuapp.com/item/${id}`

        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));

    },);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const number = event.target.number.value;
        const qty = item.quantity;
        const newQuantity = (+qty) + (+number);
        const confirm = window.confirm('Are you sure you want to restock this item');
        if(confirm){
         const url = `https://dry-mesa-29133.herokuapp.com/itemQ/${id}`;
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
            alert('item restock successfully')
        })
        }
        else{
            alert("Please confirm to restock");
        }
        
        event.target.reset()
    };
    return (
        <div>
             <form onSubmit={handleFormSubmit} className='w-50 mx-auto mt-4 text-center' >
            <input type="number" name='number' required/>
            <input className='btn-success ms-1' type="submit" value="Restock" />
        </form>

        </div>
    );
};

export default RestockQty;