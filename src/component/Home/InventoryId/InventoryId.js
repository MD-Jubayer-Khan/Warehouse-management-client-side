import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryId = (props) => {
    const {id} = useParams();
    return (
        <div>
            <h2>Item Id:{id}</h2>
        </div>
    );
};

export default InventoryId;