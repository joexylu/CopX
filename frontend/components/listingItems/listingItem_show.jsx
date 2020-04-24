import React from 'react';
import { Link } from 'react-router-dom';
import ItemPurchaseButton from "./purchase_listingitem";


class ListingItemShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getListingitem(this.props.match.params.itemId)
    }

    render(){
        // debugger
        const {item} = this.props
        return(
            <div className="listing-index-page">
                <div className="homepage-nav-bar" id="index-show-nav">
                    <div className="homepage-nav-bar-logo" id="index-show-navbar-logo-search">
                        <Link to="/" className="homepage-nav-bar-logo-link" id="logo-indexshow">
                            <img src={window.coplogoURL} id="sessionform-coplogo"/>
                        </Link>
                    </div>
                    <div className="homepage-nav-bar-links" id="list-index-page-navbar-contain">
                        <a>FAQ</a>
                    </div>
                </div>
                <div className="listing-show-body">
                    <div className="listing-left-part">
                        <div className="listing-left-part-head">
                            <h1>{item.sneakerName}</h1>
                            <div className="left-part-head-bidding-info">
                                <span>Highest Bid: </span>
                                <h2>$---</h2>
                                <span> | Lowest Ask: </span>
                                <h2>${item.price}</h2>
                            </div>
                            <div className="left-part-head-size">
                                <span>U.S. Size</span>
                                <h2>{item.size}</h2>
                            </div>
                        </div>
                        <div className="listing-left-part-body">
                            <img src={item.photoUrl} alt=""/>
                        </div>
                    </div>
                    <div className="listing-rigtht-part">
                        <div className="listing-rigtht-part1">
                            <Link to={`/sneakers/${item.sneaker_id}`}>
                                <span>U.S. Size {item.size}</span>
                                <i className="fas fa-pencil-alt"></i>
                            </Link>
                        </div>
                        <div className="listing-rigtht-part2">
                            <div className="right-part-buybid-switch">
                                <a>Place Bid</a>
                                <div>Buy Now</div>
                            </div>
                            <div className="right-part-price-amount">
                                <span>$</span>
                                <span>{item.price}</span>
                            </div>
                            <div className="right-part-bid-warning">
                                <span>You are about to purchase this product at the lowest Ask price</span>
                            </div>
                            <div className="right-part-affirm-promo">
                                <a>Buy Now</a>
                                <span> as low as $49/mo with Affirm. </span>
                                <a> Prequalify now 
                                    <i className="far fa-question-circle"></i>
                                </a>
                            </div>
                            <div className="right-part-order-summary">
                                <div className="right-part-order-summary-shipping">
                                    <span>Shipping</span>
                                    <span>$13.95</span>
                                </div>
                                <div className="right-part-order-summary-tax">
                                    <span>Sales Tax</span>
                                    <span>${(parseFloat(item.price)*0.085).toFixed(2)}</span>
                                </div>
                                <div className="right-part-order-summary-authfee">
                                    <span>Authentication Fee</span>
                                    <span>Free</span>
                                </div>
                                <div className="right-part-order-summary-discount">
                                    <span>Discount Code</span>
                                    <a href="">Add Discount +</a>
                                </div>
                                <div className="right-part-order-summary-total">
                                    <span>Total</span>
                                    <span>${(parseFloat(item.price)*1.085+13.95).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="listing-rigtht-part3">
                            <div className="rigtht-part-payment">
                                <div className="rigtht-part-payment-icon">
                                    <i className="far fa-credit-card"></i>
                                    <span>Card ending in XXXX</span>
                                </div>
                                <a>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                            </div>
                            <div className="right-part-address">
                                <div className="rigtht-part-address-icon">
                                    <i className="fas fa-home"></i>
                                    <span>XXXXXXXXXX</span>
                                </div>
                                <a>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="listing-show-footer">
                    <div className="listing-show-footer-btns">
                        <Link to={`/sneakers/${item.sneaker_id}`}className="listing-show-footer-btns-cancel">Cancel</Link>
                        {/* <a href="">Purcahse</a> */}
                        <ItemPurchaseButton item={this.props.item} isCurrentUser={this.props.isCurrentUser} makePurchased={this.props.makePurchased}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingItemShow;