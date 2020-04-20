import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container"
import SneakerIndexItem from "./sneaker_index_item"
import Footer from "../footer/footer"

class SneakersIndex extends React.Component{
    constructor(props){
        super(props)
        this.handleGetBrand = this.handleGetBrand.bind(this)
        this.handleAllBrand = this.handleAllBrand.bind(this)
    }

    componentDidMount(){
        this.props.getAllSneakers()
        window.scrollTo(0, 0)
    }

    handleGetBrand(e){
        e.preventDefault()
        const brand = e.currentTarget.value
        return(
            this.props.getAllSneakersByBrand(brand)
        )    
    }

    handleAllBrand(e){
        e.preventDefault()
        return(
            this.props.getAllSneakers()
        )    
    }

    render(){

        const sneaker = this.props.sneakers.map(sneaker => (
            <SneakerIndexItem key={sneaker.id} sneaker={sneaker}/>
        ))
        
        return(
            <div className="sneaker-index-page">
                <div className="homepage-nav-bar" id="index-show-nav">
                    <div className="homepage-nav-bar-logo" id="index-show-navbar-logo-search">
                        <Link to="/" className="homepage-nav-bar-logo-link" id="logo-indexshow">
                            <img src={window.coplogoURL} id="sessionform-coplogo"/>
                        </Link>
                        {/* <input type="text" placeholder="Search for brand, color, etc" id="search-bar-indexshow"/> */}
                    </div>
                    
                    <div className="homepage-nav-bar-links" id="index-show-page-navbar-contain">
                        <NavBarContainer />
                    </div>
                </div>
                <div className="index-welcome">
                    <div className="index-welcome-line">
                        <h1>SNEAKER</h1>
                        <h2>On CopX, every sneaker you want is always available. Buy and sell new sneakers from Air Jordan, Adidas, Nike and more!</h2>
                    </div>
                    <img src={window.indexaj1URL} className="indexaj1-pic"/>
                </div>
                <div className="index-body">
                    <div className="index-body-sidebar">
                        <div className="index-body-sidebar-section">
                            <div className="index-body-sidebar-1">
                                <Link to={`/sneakers`} id="redirect-to-sneaker">
                                    SNEAKERS
                                </Link>
                                <div>
                                    STREETWEAR
                                </div>
                                <div>
                                    COLLECTIBLES
                                </div>
                                <div>
                                    HANDBAGS
                                </div>
                                <div>
                                    WATCHES
                                </div>
                            </div>
                            <div className="index-body-sidebar-2">
                                <div>BRANDS</div>
                            </div>
                            <div className="index-body-sidebar-7">
                                <button onClick={this.handleAllBrand}>
                                    All
                                </button>
                                <button onClick={this.handleGetBrand} value="adidas Yeezy">
                                    ADIDAS
                                </button>
                                <button onClick={this.handleGetBrand} value="Air Jordan">
                                    AIR JORDAN
                                </button>
                                <button>
                                    NIKE
                                </button>
                            </div>
                            {/* <div className="index-body-sidebar-3">SIZE TYPE
                                <div className="index-sidebar-checkbox"> 
                                    <input type="checkbox"/>
                                    <p>Men</p>
                                </div>
                                <div className="index-sidebar-checkbox">
                                    <input type="checkbox"/>
                                    <p>Women</p>
                                </div>
                                <div className="index-sidebar-checkbox">
                                    <input type="checkbox"/>
                                    <label>Child</label>
                                </div>
                                <div className="index-sidebar-checkbox">
                                    <input type="checkbox"/>
                                    <label>Preschool</label>
                                </div>
                                <div className="index-sidebar-checkbox">
                                    <input type="checkbox"/>
                                    <label>Infant</label>
                                </div>
                                <div className="index-sidebar-checkbox">
                                    <input type="checkbox"/>
                                    <label>Toddler</label>
                                </div>
                            </div>
                            <div className="index-body-sidebar-4">
                                <p>SIZES</p>
                                <div>
                                    <button>1</button>
                                    <button>1.5</button>
                                    <button>2</button>
                                    <button>2.5</button>
                                    <button>3</button>
                                    <button>3.5</button>
                                    <button>4</button>
                                    <button>4.5</button>
                                    <button>5</button>
                                    <button>5.5</button>
                                    <button>6</button>
                                    <button>6.5</button>
                                    <button>7</button>
                                    <button>7.5</button>
                                    <button>8</button>
                                    <button>8.5</button>
                                    <button>9</button>
                                    <button>9.5</button>
                                    <button>10</button>
                                    <button>11</button>
                                    <button>12</button>
                                    <button>13</button>
                                    <button>14</button>
                                    <button>15</button>
                                    <button>16</button>
                                </div>
                            </div>
                            <div className="index-body-sidebar-5">PRICES
                                <div>
                                    <input type="checkbox"/>
                                    <label>Under $100</label>
                                </div>
                                <div>
                                    <input type="checkbox"/>
                                    <label>$100 - $200</label>
                                </div>
                                <div>
                                    <input type="checkbox"/>
                                    <label>$200 - $300</label>
                                </div>
                                <div>
                                    <input type="checkbox"/>
                                    <label>$300 - $400</label>
                                </div>
                                <div>
                                    <input type="checkbox"/>
                                    <label>$400 - $500</label>
                                </div>
                                <div>
                                    <input type="checkbox"/>
                                    <label>$500 +</label>
                                </div>
                            </div>
                        
                            <div className="index-body-sidebar-6">RELEASE YEARS
                                    <div>
                                        <input type="checkbox"/>
                                        <label> before 2001 </label>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <label>2001 - $2005</label>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <label>2005 - 2010</label>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <label>2010 - 2015</label>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <label>2015 - 2020</label>
                                    </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="index-body-sneakers">
                        <div className="index-body-sneakers-head">
                            <div className="index-body-sneakers-head-left">
                                <Link to="/">HOME    </Link>
                                <p> / </p>
                                <Link to="/sneakers">SNEAKER</Link>
                            </div>
                            <div className="index-body-sneakers-head-right">
                                <select className="index-select-box">Sorted By:
                                    <option>Featured</option>
                                    <option>Most Popular</option>
                                    <option>New Lowest Asks</option>
                                    <option>New Highest Bid</option>
                                    <option>Release Date</option>
                                </select>
                                <i className="fas fa-th"></i>
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                        <div className="index-body-sneakers-items">
                            <ul className="index-body-sneakers-place">
                               {sneaker} 
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="all-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SneakersIndex;