import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import AccountDropdown from './account_dropdown';

export const NavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
            <div className="navbar-account-dropdown">
                Account
                <AccountDropdown logout={logout} />
            </div>
        ) : (
        <div className="navbar-no-account-dropdown">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
        </div>
    );
    $(window).scroll(function(){
        $('.homepage-nav-bar').toggleClass('scrolled', $(this).scrollTop() > 100);
    });

    return (
        <div className="navbar-element">
                 <div>
                     <a href="">Browse</a>
                 </div>
                 <div>
                    <a href="https://stockx.com/news/">News</a>
                 </div>
                 <div>
                    <a href="https://stockx.com/text-me-the-app">App</a>
                 </div>
                 <div>
                    <a href="https://stockx.com/portfolios">Portfolios</a>
                 </div>
                <div>
                    <a href="">About</a>
                </div>
                <div>
                    <a href="">Help</a>
                </div>
                <div>
                    {display}
                </div>
                <div>
                    <a href="">Sell</a>
                </div>
        </div>
    )
}