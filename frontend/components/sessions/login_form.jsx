import React from "react"


class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDemo = this.handleDemo.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    handleDemo(e) {
        e.preventDefault();
        const user = {email: "beno@123.com", password: "123456"}
        this.props.processForm(user)
    }

    render(){
        const er = this.props.errors
        return(
            <div>
                <h2>Log In</h2>
                <h3>{er}</h3>
                <form>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleDemo}>Demo User</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;