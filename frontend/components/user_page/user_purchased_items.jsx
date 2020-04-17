import React from 'react';
import { Link } from 'react-router-dom';

const PurchasedItems = props => {
    return(
            <Link to={`/purchased/${props.purchasedItem.id}`} className="user-ordered-items">
                    <img src={props.purchasedItem.photoUrl} className="user-ordered-items-img"/>
                    <div className="user-ordered-items-info">
                        <h2 className="user-ordered-items-name">{props.purchasedItem.sneakerName}</h2>
                        <h2>Order Number: {props.purchasedItem.order_number}</h2>
                        <h2>Size: {props.purchasedItem.size}</h2>
                        <h2>${props.purchasedItem.price}</h2>
                    </div>
            </Link>    
    )
}

export default PurchasedItems;