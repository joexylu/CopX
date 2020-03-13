import React from 'react';
import { Link } from 'react-router-dom';


class ListingItemsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllListingitems(this.props.sneakerId)
    }

    render(){
        const item = this.props.listingItems.map(listItem => (
            <Link to={`/listingitems/${listItem.id}`}>
                <h1>{listItem.size}</h1>
                <h1>{listItem.price}</h1>
            </Link>
        ))
        return(
            <div className="listing-index">
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
                

                
            </div>
        )
    }
}

export default ListingItemsIndex;