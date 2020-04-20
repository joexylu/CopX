import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import SneakerIndexItem from "../sneaker_index/sneaker_index_item"
import Footer from "../footer/footer"

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.getAllSneakers()

        const imageSources = ["./homepage-ads4.jpg", "./homepage-ads2.jpg", "./homepage-ads.jpg", "./homepage-ads5.jpg"]
        let index = 0;
        this.timeout = setInterval(function(){
            if (index === imageSources.length) {
                index = 0;
            }
            document.getElementById("homepage-ads").src = imageSources[index];
            index++;
        } , 3000);
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    handleClick(e){
        e.preventDefault()
        const brand = e.currentTarget.value
        this.props.history.push("/sneakers")
    }
    
    render(){

        const sneaker = this.props.sneakers.map((sneaker) => (
            <div key={sneaker.id} className="homepage-sneakers">
                <SneakerIndexItem key={sneaker.id} sneaker={sneaker}/>
            </div>
        ))

        const selectedSneaker1 = sneaker.slice(2, 7)
        const selectedSneaker2 = sneaker.slice(7,12)

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
                            <button onClick={this.handleClick} value={"Air Jordan"} className="home-page-brands" >
                                <img src={window.ajhomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Jordan</span>
                            </button>
                            <button onClick={this.handleClick} value={"Nike"} className="home-page-brands" >
                                <img src={window.nikehomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Nike</span>
                            </button>
                            <button onClick={this.handleClick} value={"Adidas"} className="home-page-brands" >
                                <img src={window.adidashomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Adidas</span>
                            </button>
                            <button onClick={this.handleClick} value={"adidas Yeezy"} className="home-page-brands" >
                                <img src={window.yeezyhomepageURL} id="homepage-brand-img"/>
                                <span className="home-page-brands-name">Yeezy</span>
                            </button>
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