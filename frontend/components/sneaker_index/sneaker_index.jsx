import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container"
import SneakerIndexItem from "./sneaker_index_item"

class SneakersIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllSneakers()
    }

    render(){

        const sneaker = this.props.sneakers.map(sneaker => (
            <SneakerIndexItem sneaker={sneaker}/>
        ))

        return(
            <div className="sneaker-index-page">
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
                <div className="index-welcome">
                    <div className="index-welcome-line">
                        <h1>SNEAKER</h1>
                        <h2>On CopX, every sneaker you want is always available. Buy and sell new sneakers from Air Jordan, Adidas, Nike and more!</h2>
                    </div>
                    <img src={window.indexaj1URL} className="indexaj1-pic"/>
                </div>
                <div className="index-body">
                    <div className="index-body-column">

                    </div>
                    <div className="index-body-sneakers">
                        {sneaker}
                    </div>
                </div>
            </div>
        )
    }
}

export default SneakersIndex;