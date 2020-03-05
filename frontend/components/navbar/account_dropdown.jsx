import React from 'react';
import { Link } from 'react-router-dom';

const AccountDropdown = props => {
    return (
        <ul className="accountdrop-list">
            <li>Security</li>
            <li>Buying</li>
            <li>Selling</li>
            <li>Profile</li>
            <li>Portfolio</li>
            <li>Following</li>
            <li>Setting</li>
            <li><button onClick={() => props.logout()}>Sign out</button></li>
        </ul>
    )
}

export default AccountDropdown;