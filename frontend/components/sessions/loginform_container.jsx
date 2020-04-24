import React from "react"
import { connect } from 'react-redux';
import LoginForm from './login_form'
import { login, receiveErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session || []
})


const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([]))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)