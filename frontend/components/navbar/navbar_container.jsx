import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from './navbar'
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchProps)(NavBar);