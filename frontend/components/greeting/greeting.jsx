import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = ({currentUser, logout}) => {
    const display = currentUser ? (
            <div>
                <p>Hi, {currentUser.username}</p>
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
            <h1>CopX</h1>
            <div>
                {display}
            </div>
        </div>
    )
}