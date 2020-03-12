import React from 'react';
import { Link } from 'react-router-dom';


class ListingItemShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getListingitem(this.props.match.params.itemId)
    }

    render(){
        return(
            <div className="listing-index-page">
                <div className="homepage-nav-bar" id="index-show-nav">
                    <div className="homepage-nav-bar-logo" id="index-show-navbar-logo-search">
                        <Link to="/" className="homepage-nav-bar-logo-link" id="logo-indexshow">
                            <img src={window.coplogoURL} id="sessionform-coplogo"/>
                        </Link>
                    </div>
                    <div className="homepage-nav-bar-links" id="list-index-page-navbar-contain">
                        <a href="">FAQ</a>
                    </div>
                </div>
                <div className="listing-show-body">

                </div>
            </div>
        )
    }
}

export default ListingItemShow;