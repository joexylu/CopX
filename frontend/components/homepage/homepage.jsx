import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <NavBarContainer />
                <p>this is Homepage!!!!!!!!!!</p>
            </div>
        )
    }
}

export default Homepage;