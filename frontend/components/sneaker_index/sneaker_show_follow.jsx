import React from 'react';
import { withRouter } from 'react-router'

class SneakerFollowButton extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { sneaker, followSneaker, unFollowSneaker, isCurrentUser } = this.props
        let followButtonText = "Follow";
        let followButtonAction = () => followSneaker(sneaker.id);
        if (isCurrentUser){
            if (sneaker.followed_by_current_user) {
                followButtonText = "Following";
                followButtonAction = () => unFollowSneaker(sneaker.id);
            }
        } else {
            followButtonAction = () => (
                this.props.history.push("/login")
            )
        }
        return(
            <button onClick={followButtonAction} className="show-head-button">
                <span>
                    {/* <i className="fas fa-plus"></i> */}
                    {followButtonText}
                </span>
            </button>
        )
    }
}

export default withRouter(SneakerFollowButton);
  