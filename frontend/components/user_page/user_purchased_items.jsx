import React from 'react';
import { Link } from 'react-router-dom';

const PurchasedItems = props => {
    return(
            <Link to={`/purchased/${props.purchasedItem.id}`}>
                <div>
                    <img src={props.purchasedItem.photoUrl}/>
                    <div>
                        <h2>{props.purchasedItem.sneakerName}</h2>
                        <h2>Order Number: {props.purchasedItem.order_number}</h2>
                        <h2>Size: {props.purchasedItem.size}</h2>
                        <h2>${props.purchasedItem.price}</h2>
                    </div>
                </div>
            </Link>    
    )
}

export default PurchasedItems;