import React from "react"
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, receiveErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)