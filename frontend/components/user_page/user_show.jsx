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
            <FollowingItems sneaker={sneaker} unFollowSneaker={unFollowSneaker} followSneaker={followSneaker} getAllFollowing={getAllFollowing}/>
        ))
        const PurchasedSneaker = purchasedSneakers.map(purchasedItem => (
            <PurchasedItems purchasedItem={purchasedItem}/>
        ))
        return(
            <div className="user-show-page">
                <div className="homepage-nav-bar" id="index-show-nav">
                    <div className="homepage-nav-bar-logo" id="index-show-navbar-logo-search">
                        <Link to="/" className="homepage-nav-bar-logo-link" id="logo-indexshow">
                            <img src={window.coplogoURL} id="sessionform-coplogo"/>
                        </Link>
                        <input type="text" placeholder="Search for brand, color, etc" id="search-bar-indexshow"/>
                    </div>
                    
                    <div className="homepage-nav-bar-links" id="index-show-page-navbar-contain">
                        <NavBarContainer />
                    </div>
                </div>
                <div className="user-showpage-body">
                    <div className="user-showbody-userinfo">
                        {this.props.user.username}
                    </div>
                    <div className="user-showbody-follow">
                        {followingSneaker}
                    </div>
                    <div className="user-showbody-bought">
                        {PurchasedSneaker}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;