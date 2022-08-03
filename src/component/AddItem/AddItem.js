import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const { register, handleSubmit } = useForm(); 
      const navigate = useNavigate();
    
    const onSubmit = data => {
        console.log(data);
        fetch("https://dry-mesa-29133.herokuapp.com/item", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
     
        navigate('/manageItems');
    };
    return (
        <div>
             <div className='w-50 mx-auto'>
            <h2>Please add Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='describe' {...register("describe")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='supplier'  {...register("supplier")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
        </div>
    );
};

export default AddItem;