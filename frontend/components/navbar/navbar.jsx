import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";

export const NavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
            <div>
                <p>Account</p>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
        <div>
            <Link to="/signup">Sign Up</Link>
            <br/>
            <Link to="/login">Log In</Link>
        </div>
    );

    return (
        <div>
            <div>
                {display}
            </div>
        </div>
    )
}