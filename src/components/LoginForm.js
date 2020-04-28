import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  submitLogin = (e) => {
    e.preventDefault();
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin(this.state.username, this.state.password);
    }
  }

  inputUsername = (e) => {
    this.setState({username: e.target.value})
  }

  inputPassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submitLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.inputUsername} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.inputPassword} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
