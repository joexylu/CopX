import React from 'react';
import { Link } from 'react-router-dom';

const AccountDropdown = props => {
    return (
        <ul className="accountdrop-list">
            <li>Buying</li>
            <li>Selling</li>
            <Link to={`/users/${props.currentUser.id}`}>Profile</Link>
            <li>Following</li>
            <li><button onClick={() => props.logout()}>Sign out</button></li>
        </ul>
    )
}

export default AccountDropdown;