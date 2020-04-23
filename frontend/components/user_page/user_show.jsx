import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import FollowingItems from "./user_follow_items";
import PurchasedItems from "./user_purchased_items";


class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.getAllPurchased()
        this.props.getAllFollowing()
    }

    render(){
        const{followingSneakers, purchasedSneakers, unFollowSneaker, followSneaker, getAllFollowing } = this.props
        const followingSneaker = followingSneakers.map(sneaker => (
            <FollowingItems key={sneaker.id} sneaker={sneaker} unFollowSneaker={unFollowSneaker} followSneaker={followSneaker} getAllFollowing={getAllFollowing}/>
        ))
        const PurchasedSneaker = purchasedSneakers.map(purchasedItem => (
            <PurchasedItems key={purchasedItem.id} purchasedItem={purchasedItem}/>
        ))
        return(
            <div className="user-show-page">
                <div className="homepage-nav-bar" id="index-show-nav">
                    <div className="homepage-nav-bar-logo" id="index-show-navbar-logo-search">
                        <Link to="/" className="homepage-nav-bar-logo-link" id="logo-indexshow">
                            <img src={window.coplogoURL} id="sessionform-coplogo"/>
                        </Link>
                    </div>
                    
                    <div className="homepage-nav-bar-links" id="index-show-page-navbar-contain">
                        <NavBarContainer />
                    </div>
                </div>
                <div className="user-showpage-body">
                    <div className="user-showbody-userinfo">
                        <i className="fas fa-user-circle fa-5x"></i>
                        <span>{this.props.user.username}</span>
                    </div>
                    <div className="user-showpage-body-content">
                        <div className="user-showbody-follow">
                            <span className="user-follow-link-title" >Following:</span>
                            {followingSneaker}
                        </div>
                        <div className="user-showbody-bought">
                            <span className="user-follow-link-title">Order History:</span>
                            {PurchasedSneaker}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;