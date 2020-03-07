import React from 'react';
import { Link } from 'react-router-dom';

const SneakerIndexItem = props => {
    return(
        <div>
            <Link to={`/sneakers/${props.sneaker.id}`}>{props.sneaker.name}</Link>
        </div>
    )
}

export default SneakerIndexItem;