import React from 'react';
import { Link } from 'react-router-dom';

const FollowingItems = ({ sneaker, followSneaker, unFollowSneaker, getAllFollowing}) => {
    let followButtonText = "Follow";
    let followButtonAction = () => followSneaker(sneaker.id);
    if (sneaker.followed_by_current_user) {
        followButtonText = "Following";
        followButtonAction = () => unFollowSneaker(sneaker.id).then(getAllFollowing())
    }
    return(
        <div>
            <Link to={`/sneakers/${sneaker.id}`} className="user-follow-link">
                <div className="user-follow-link-div">
                    <img src={sneaker.photoUrl} className="user-follow-link-img"/>
                    <div className="user-follow-link-info">
                        <h2>{sneaker.name}</h2>
                    </div>
                </div>
            </Link>    
            <button onClick={followButtonAction}>
                {followButtonText}
            </button>
        </div>
    )
}

export default FollowingItems;