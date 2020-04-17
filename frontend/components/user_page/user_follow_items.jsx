import React from 'react';
import { Link } from 'react-router-dom';

const FollowingItems = ({ sneaker, followSneaker, unFollowSneaker, getAllFollowing}) => {
    let followButtonText = "Follow";
    let followButtonAction = () => followSneaker(sneaker.id);
    if (sneaker.followed_by_current_user) {
        followButtonText = "Unfollow";
        followButtonAction = () => unFollowSneaker(sneaker.id).then(getAllFollowing())
    }
    return(
        <div className="user-following-items">
            <Link to={`/sneakers/${sneaker.id}`} className="user-follow-link">
                    <img src={sneaker.photoUrl} className="user-follow-link-img"/>
                    <span>{sneaker.name}</span>
            </Link>    
            <button onClick={followButtonAction}>
                {followButtonText}
            </button>
        </div>
    )
}

export default FollowingItems;