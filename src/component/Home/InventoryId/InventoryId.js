import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryId = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>This is {id}</h2>
        </div>
    );
};

export default InventoryId;