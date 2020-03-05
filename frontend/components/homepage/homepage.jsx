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
                <nav className="homepage-nav-bar">
                    <div className="homepage-nav-bar-logo">
                        <Link to="/" className="homepage-nav-bar-logo-link">
                            <img src="/assets/coplogo.png" alt="copx-logo"/>
                        </Link>
                    </div>
                    <div className="homepage-nav-bar-links">
                        <NavBarContainer />
                    </div>
                </nav>
                <div className="homepage-body">
                    <div className="homepage-aj6">
                        <img src="/assets/homepage-aj6.jpeg" alt="copx-logo" id="aj6-pic"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;