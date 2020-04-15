import React from 'react';
import { Link } from 'react-router-dom';

const SneakerIndexItem = props => {
    return(
            <Link to={`/sneakers/${props.sneaker.id}`} className="index-one-item-link">
                <div className="index-one-item-div">
                    <img src={props.sneaker.photoUrl} className="index-items-img"/>
                    <div className="index-items-info">
                        <h2>{props.sneaker.name}</h2>
                    </div>
                </div>
            </Link>    
    )
}

export default SneakerIndexItem;