import React from 'react';

const SneakerFollowButton = ({ sneaker, followSneaker, unFollowSneaker }) => {
    let followButtonText = "Follow";
    let followButtonAction = () => followSneaker(sneaker.id);
    if (sneaker.followed_by_current_user) {
        followButtonText = "Following";
        followButtonAction = () => unFollowSneaker(sneaker.id);
    }
    return (
        <button onClick={followButtonAction} className="show-head-button">
            <span>
                {/* <i className="fas fa-plus"></i> */}
                {followButtonText}
            </span>
        </button>
    );
}

export default SneakerFollowButton;
  