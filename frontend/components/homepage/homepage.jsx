import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <div className="homepage-nav-bar">
                    <div className="homepage-nav-bar-logo">
                        <Link to="/" className="homepage-nav-bar-logo-link">
                            <img src={window.coplogoURL} id="sessionform-coplogo"/>
                        </Link>
                    </div>
                    <div className="homepage-nav-bar-links">
                        <NavBarContainer />
                    </div>
                </div>
                <div className="homepage-body">
                    <div className="homepage-aj6">
                        <img src={window.aj6URL} id="aj6-pic"/>
                        <h1>Buy & Sell <br/>Authentic Sneakers</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;