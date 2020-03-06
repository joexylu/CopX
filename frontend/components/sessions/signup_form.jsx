import React from "react";
import {Link} from "react-router-dom"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)//.then(this.props.history.push("/"))
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    render(){
        const er = this.props.errors
        return(
            <div className="session-form">
                <div className="sessionform-header">
                    <Link to="/" className="picture-link">
                        <img src={window.coplogoURL} id="sessionform-coplogo" />
                    </Link>
                </div>

                <div className="sessionform-body">
                    <div className="form-square">
                        <div className="form-links">
                            <button id="border-dark">
                                <Link to="/signup" id="no-underline-selected">Sign Up</Link>
                            </button> 
                            <button>
                                <Link to="/login" id="no-underline">Log In</Link>
                            </button>
                        </div>
                        <form className="form-submits">
                            <div className="form-socialmedialink">
                                <button>
                                    <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }}/>
                                    <a href="http://www.twitter.com" id="no-underline-social">Sign Up With Twitter</a>
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }}/>
                                    <a href="http://www.facebook.com" id="no-underline-social">Sign Up With Facebook</a>
                                </button>
                            </div>
                            <h3 className='or-line'>OR</h3>
                            <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleInput('username')}/>
                            <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')}/>
                            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
                            <p>{er}</p>
                            <button onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;