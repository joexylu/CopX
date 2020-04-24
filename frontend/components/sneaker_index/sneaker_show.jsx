import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container"
import Footer from "../footer/footer"
// import ListItemsIndexContainer from "../listingItems/listitems_index_container"
import SneakerFollowButton from "./sneaker_show_follow";

class SneakerShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            size: "All",
            price: "",
            id: ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleDrop = this.handleDrop.bind(this)
        this.handleToBuy = this.handleToBuy.bind(this)
    }

    componentDidMount(){
        this.props.getListingItems(this.props.sneakerId)
        this.props.getSneaker(this.props.sneakerId)  
        window.scrollTo(0, 0)
    }

    handleToBuy(e){
        e.preventDefault()
        if (this.state.id === ""){
            alert("Please Select A Size First")
        } else{
            this.props.history.push(`/listingitems/${this.state.id}`)
        }
    }

    handleClick(e){
        e.preventDefault()
        const info = e.currentTarget.value.split(",")
        return(
            this.setState({
                id: info[0],
                size: info[1],
                price: info[2]
            })
        )
    }

    handleDrop(){
        $('.show-items-dropdown-content').toggleClass('show');
    }

    render(){
        const items = this.props.ListingItems

        return(
            <div className="sneaker-show-page">
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
                <div className="sneaker-show-body">
                    <div className="sneaker-show-body-head">
                        <div className="sneaker-show-body-head-url-share">
                            <div className="sneaker-show-body-head-url">
                                <Link to="/">HOME</Link>
                                <span> / </span>
                                <Link to="/sneakers">SNEAKER </Link>
                                <span> /{this.props.sneaker.brand} /{this.props.sneaker.style} /{this.props.sneaker.name}</span>
                            </div>
                            <div className="sneaker-show-body-head-social">
                                <div className="show-head-dropdown">
                                    <button className="show-head-dropbtn">
                                        <i className="fas fa-arrow-up"></i>
                                        SHARE
                                    </button>
                                    <div className="show-head-dropdown-content">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <span>|</span>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <span>|</span>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                        <span>|</span>
                                        <a href="#"><i className="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                                <SneakerFollowButton sneaker={this.props.sneaker} followSneaker={this.props.followSneaker} unFollowSneaker={this.props.unFollowSneaker} isCurrentUser={this.props.isCurrentUser}/>
                            </div>
                        </div>

                        <div className="sneaker-show-body-head-name">
                            <h1>{this.props.sneaker.name}</h1>
                        </div>

                        <div className="sneaker-show-body-head-info">
                            <div className="sneaker-show-body-head-condition">
                                <h1>Condition:</h1>
                                <h1 id="sneaker-show-body-head-green">New</h1>
                            </div>
                            <span>|</span>
                            <div className="sneaker-show-body-head-ticker">
                                Ticker: {this.props.sneaker.ticker}
                            </div>
                            <span>|</span>
                            <div className="sneaker-show-body-head-authentic">
                                <h1 id="sneaker-show-body-head-green">100% Authentic</h1>
                            </div>
                        </div>
                        
                        <div className="sneaker-show-body-head-listing-bid-buy">
                            <div className="sneaker-show-body-head-listing-sizes">
                                <label>Size</label>
                                {/* need a drop down here */}
                                <div className="sneaker-show-body-head-listing-select">
                                    <button onClick={this.handleDrop} className="show-listing-select-dropbtn">
                                        {/* <span>{this.state.size}</span> */}
                                        {this.state.size}
                                        <i className="fas fa-angle-down"></i>
                                    </button>
                                    <div id="show-items-Dropdown" className="show-items-dropdown-content">

                                        <ul className="show-items-dropdown-list">
                                        {
                                            items && items.map(listItem => (
                                                    <button onClick={this.handleClick} value={[listItem.id, listItem.size, listItem.price]} key={listItem.id} id="select-btn">
                                                        <h1>{listItem.size}</h1>
                                                        <h2>${listItem.price}</h2>
                                                    </button> 
                                            ))
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sneaker-show-body-head-lastsale">
                                <div className="show-lastsale-info">
                                    <span>Last Sale</span>
                                    <h1>$---</h1>
                                    <div className="show-lastsale-info-updown">
                                        <i className="fas fa-caret-up"></i>
                                        <span>+$--</span>
                                        <span>(%---)</span>
                                    </div>
                                </div>
                                <div className="show-lastsale-size">
                                    <h1>Size {this.state.size}</h1>
                                    <span>|</span>
                                    <a>View All Sales</a>
                                </div>
                            </div>
                            <div className="sneaker-show-body-head-buy">
                                <button onClick={this.handleToBuy} className="sneaker-show-buy-btn">
                                    <div>
                                        <h1>${this.state.price}</h1>
                                        <span>Lowest Ask</span>
                                    </div>
                                    <span id="sneaker-show-buy-btn-divide"></span>
                                    <div>
                                        <h1>Buy</h1>
                                        <span>or Bid</span>
                                    </div>    
                                </button>
                                <div className="sneaker-show-body-head-buy-salesize">
                                    <h1>Size {this.state.size}</h1>
                                    <span></span>
                                    <a>View All Asks</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="sneaker-show-body-img">
                        <img src={this.props.sneaker.photoUrl} />
                    </div>

                    <div className="sneaker-show-body-sneakerinfo">
                        <div className="sneaker-show-body-sneakerinf-left">
                            <div className="sneaker-show-body-sneakerinf-detail">
                                <span>COLORWAY</span>
                                <span>{this.props.sneaker.colorway}</span>
                            </div>
                            <div className="sneaker-show-body-sneakerinf-detail">
                                <span>RETAIL PRICE</span>
                                <span>{this.props.sneaker.retail_price}</span>
                            </div>
                            <div className="sneaker-show-body-sneakerinf-detail">
                                <span>RELEASE DATE</span>
                                <span>{this.props.sneaker.release_date}</span>
                            </div>
                        </div>
                        <div className="sneaker-show-body-sneakerinf-right">
                            <p>
                                {this.props.sneaker.description}
                            </p>
                        </div>
                    </div> 
                </div>
            
                <div className="sneaker-show-divider">
                    <div className="sneaker-product-summary">
                        <ul>
                            <li>
                                <i className="fas fa-temperature-high"></i>
                                <span>52 WEEK HIGH $--- | LOW $---</span>
                            </li>
                            <li>
                                <i className="fas fa-chart-bar"></i>
                                <span>TRADE RANGE (12 MOS.) $XXX - $XXX</span>
                            </li>
                            <li>
                                <i className="fas fa-balance-scale"></i>
                                <span>VOLATILITY X.X%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SneakerShow;