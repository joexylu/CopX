import React from 'react';
import { Link } from 'react-router-dom';

const AccountDropdown = props => {
    return (
        <ul className="accountdrop-list">
            <Link to={`/users/${props.currentUser.id}`} id="accountdrop-list-userprofile">Profile</Link>
            <li><button onClick={() => props.logout()} id="accountdrop-list-session-btn">Sign out</button></li>
        </ul>
    )
}

export default AccountDropdown;