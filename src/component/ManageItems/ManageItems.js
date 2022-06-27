import React, { useEffect, useState } from 'react';

const ManageItems = () => {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('https://dry-mesa-29133.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
        const handleDelete = id =>{
            const confirm = window.confirm('Are you sure?');
            if(confirm){
                const url = `https://dry-mesa-29133.herokuapp.com/item/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
            }
        }
    return (
        <div className='container mt-4 d-flex flex-wrap'>
        {
           items.map(item =><div key={item._id}>
            <div className="card m-4 p-4 col-md-5 card-item" style={{width:'22rem',
            }} >
              <img src={item.img} className="card-img-top" alt="..."/>
              <div classNames="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p>description: {item.describe.slice(0, 30)}</p>
                <p className="card-text">Supplier: {item.supplier}</p>
                <p>Price:{item.price}</p>
                <p>Quantity:{item.quantity}</p>

              </div> <button className='btn btn-danger w-25 mx-auto text center' onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
           
            
          </div>
            
       ) 
       };

    
        </div>
    );
};

export default ManageItems;