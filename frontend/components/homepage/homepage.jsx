import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import SneakerIndexItem from "../sneaker_index/sneaker_index_item"

class Homepage extends React.Component{
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

        const selectedSneaker = sneaker.slice(4, 9)


        return(
            <div className="homepage">
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
                <div className="homepage-aj6">
                    <img src={window.aj6URL} id="aj6-pic"/>
                    <h1>Buy & Sell <br/>Authentic Sneakers</h1>
                </div>
                <div className="homepage-body">
                    <div>
                        <ul>
                            <div>Sneakers</div>
                            <div>Streetwear</div>
                            <div>Collectibles</div>
                            <div>Handbags</div>
                            <div>Watches</div>
                        </ul>
                    </div>
                    <Link to="/sneakers" className="homepage-view-all-sneaker">See All</Link>
                </div>
            </div>
        )
    }
}

export default Homepage;