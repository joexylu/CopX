import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import SneakerIndexItem from "../sneaker_index/sneaker_index_item"
import Footer from "../footer/footer"

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllSneakers()
    }
    
    render(){

        const sneaker = this.props.sneakers.map(sneaker => (
            <div className="homepage-sneakers">
                <SneakerIndexItem sneaker={sneaker}/>
            </div>
        ))

        const selectedSneaker1 = sneaker.slice(2, 7)
        const selectedSneaker2 = sneaker.slice(7,12)

        const imageSources = ["./homepage-ads.jpg", "./homepage-ads2.jpg", "./homepage-ads4.jpg", "./homepage-ads5.jpg"]

        let index = 0;
        setInterval(function(){
            if (index === imageSources.length) {
                index = 0;
            }
            document.getElementById("homepage-ads").src = imageSources[index];
            index++;
        } , 3000);

        return(
            <div className="homepage">
                <div className="homepage-nav-bar">
                    <div className="homepage-nav-bar-logo">
                        <Link to="/" className="homepage-nav-bar-logo-link">
                            <img src={window.coplogoURL} id="sessionform-coplogo"/>
                        </Link>
                        <img src={window.copxlogowhiteURL} id="sessionform-copxlogowhite"/>
                    </div>
                    <div className="homepage-nav-bar-links">
                        <NavBarContainer />
                    </div>
                </div>
                <div className="homepage-aj6">
                    <img src={window.aj6URL} id="aj6-pic"/>
                </div>
                <div className="homepage-body">
                    <div className="homepage-category-selector">
                        <ul className="homepage-body-sneaker-selection">
                            <div id="homepage-sneaker-bold">Sneakers</div>
                            <div>Streetwear</div>
                            <div>Collectibles</div>
                            <div>Handbags</div>
                            <div>Watches</div>
                        </ul>
                    </div>
                    <div className="homepage-rolling-picture">
                        <img src="./homepage-ads.jpg" id="homepage-ads"/>
                    </div>
                    <div className="homepage-content-body">
                        <div className="homepage-popular-brands-head">
                            <span>Popular Brands <i className="fas fa-question-circle"></i></span>
                            <Link to="/sneakers" className="homepage-view-all-sneaker">See All</Link>
                        </div>
                        <ul className="homepage-brands-place">
                            <div className="home-page-brands">
                                <img src={window.ajhomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Jordan</span>
                            </div>
                            <div className="home-page-brands">
                                <img src={window.nikehomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Nike</span>
                            </div>
                            <div className="home-page-brands">
                                <img src={window.adidashomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Adidas</span>
                            </div>
                            <div className="home-page-brands">
                                <img src={window.yeezyhomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Yeezy</span>
                            </div>
                        </ul>

                        <div className="homepage-popular-brands-head">
                            <span>Most Popular <i className="fas fa-question-circle"></i></span>
                            <Link to="/sneakers" className="homepage-view-all-sneaker">See All</Link>
                        </div>
                        <ul className="homepage-sneakers-place">
                               {selectedSneaker1} 
                        </ul>
                        <div className="homepage-popular-brands-head">
                            <span>Recommended for You <i className="fas fa-question-circle"></i></span>
                            <Link to="/sneakers" className="homepage-view-all-sneaker">See All</Link>
                        </div>
                        <ul className="homepage-sneakers-place">
                               {selectedSneaker2} 
                        </ul>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage;