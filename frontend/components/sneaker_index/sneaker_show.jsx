import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container"

class SneakerShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSneaker(this.props.sneakerId)
    }

    render(){
        // debugger
        // let brand = this.props.sneaker.brand
        return(
            <div className="sneaker-show-page">
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
                                <button className="show-head-button">
                                    <span>
                                        <i className="fas fa-plus"></i>
                                        PORTFOLIO
                                    </span>
                                </button>
                                <button className="show-head-button">
                                    <span>
                                        <i className="fas fa-plus"></i>
                                        FOLLOW
                                    </span> 
                                </button>
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
            </div>
        )
    }
}

export default SneakerShow;