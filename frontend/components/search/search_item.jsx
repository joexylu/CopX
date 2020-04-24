import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = props => {
    return(
            <Link to={`/sneakers/${props.sneaker.id}`} className="user-ordered-items">
                <img src={props.sneaker.photoUrl} className="user-ordered-items-img"/>
                <div className="user-ordered-items-info">
                    <h2 id="search-item-brand">{props.sneaker.brand}</h2>
                    <h2 className="user-ordered-items-name">{props.sneaker.name}</h2>
                </div>
            </Link>    
    )
}

export default SearchItem;