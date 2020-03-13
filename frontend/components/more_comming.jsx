import React from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router'


class MoreComming extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }
  
    componentDidMount() {
      this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
    }
  
    componentWillUnmount() {
      clearTimeout(this.id)
    }
  
    render() {
      return this.state.redirect
        ? <Redirect to="/" />
        : <div className="">
            
        </div>
    }
}

export default MoreComming;