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
<<<<<<< HEAD
                        <img src={window.aj6URL} id="aj6-pic"/>
=======
                        {/* <img src={window.aj6URL} id="aj6-pic"/> */}
>>>>>>> edbfaa7a36cb67838049eba7d1509156cfe52876
                        <h1>Buy & Sell <br/>Authentic Sneakers</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;