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
        return(
            <div>
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
                <div>
                    here is the sneaker you want to buy
                </div>
            </div>
        )
    }
}

export default SneakerShow;