import React from 'react';
import { Link } from 'react-router-dom';

const FollowingItems = props => {
    return(
            <Link to={`/sneakers/${props.sneaker.id}`} className="user-follow-link">
                <div className="user-follow-link-div">
                    <img src={props.sneaker.photoUrl} className="user-follow-link-img"/>
                    <div className="user-follow-link-info">
                        <h2>{props.sneaker.name}</h2>
                    </div>
                </div>
            </Link>    
    )
}

export default FollowingItems;