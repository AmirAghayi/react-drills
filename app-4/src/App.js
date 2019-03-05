import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind( this );

  }


  handleUsenameChange( name ){
     this.setState({
       username: name
     });
  }




  handlePasswordChange(pass){
     this.setState({
       password: pass
     });
  }


  handleLogin(){
    console.log(`Logging in with username: ${ this.state.username} and password: ${ this.state.password }`);
 }


  render() {
    return (
        <div className="App">

          <br />

            <div>
              <h1>Username: 
                <input
                type="text"
                onChange={ (e) => this.handleUsenameChange(e.target.value) }
                /> 
              </h1>
            </div>

            <div>
              <h1>Password: 
                <input 
                type="password"
                onChange={ (e) => this.handlePasswordChange(e.target.value) }
                />
              </h1>
            </div>

            <div>
              <button
              onClick={this.handleLogin }
              >Login</button>
            </div>

        </div>
    );
  }
}

export default App;
