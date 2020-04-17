import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container"


class PurchasedItemShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getPurchased(this.props.purchaseId)
        window.scrollTo(0, 0)
    }

    render(){
        const {purchaseditem} = this.props
        return(
            <div className="purchaseItem-showpage">
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
                <div className="purchaseItem-show-body">
                    <div className="purchaseItem-show-body-1">
                        <Link to={`/sneakers/${purchaseditem.sneaker_id}`} className="purchaseItem-show-link">
                            <img src={purchaseditem.photoUrl} className="purchaseItem-show-img"/>
                            <span>{purchaseditem.sneakerName}</span>
                        </Link>
                        <div className="purchaseItem-show-size">
                            <span>U.S. Men's Size: {purchaseditem.size}</span>
                            <span>|</span>
                            <span>Condition: New</span>
                            <span>|</span>
                            <span>100% Authentic</span>
                        </div>
                        <span className="purchaseItem-orderNum">Order Number: {purchaseditem.order_number}</span>
                        <span className="purcahseItem-delivery">Order Processed Successfully</span>
                    </div>
                    <div className="purchaseItem-show-body-2">
                        <div className="purchaseItem-show-price-row">
                            <span>Your Purchase Price</span>
                            <span>${purchaseditem.price}</span>
                        </div>
                        <div className="purchaseItem-show-price-row">
                            <span>Shipping</span>
                            <span>$13.95</span>
                        </div>
                        <div className="purchaseItem-show-price-row">
                            <span>Sales Tax</span>
                            <span>${purchaseditem.price*0.08}</span>
                        </div>
                        <div className="purchaseItem-show-price-row">
                            <span>Authentication Fee</span>
                            <span>$0.00</span>
                        </div>
                        <div className="purchaseItem-show-price-row">
                            <span>Total</span>
                            <span>${purchaseditem.price*0.08 + purchaseditem.price + 13.95}</span>
                        </div>
                    </div>
                    <div className="purchaseItem-show-body-3">
                        <Link to={`/users/${this.props.userId}`} className="purchaseItem-show-userpage">
                            To Order History
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PurchasedItemShow;