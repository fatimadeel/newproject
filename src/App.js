import React, { Component } from 'react';
import './App.css';

import Logga from './userpage/userlogin';
import Profile from './userpage/userprofile';

// import img from './Header.png';
// import img1 from './footer.png';


class App extends Component {

  state = {
    loginp: false,
    email: '',
    password: ''
  }

  dologinhandler = () => {
    this.setState({ loginp: true });
  }
  dologouthandler = () => {
    this.setState({ loginp: false });
  }

  render() {

    return (
           <div>
           {/* .......... Display header .......... */}
           <img src = {require('./Header.png')} alt="Header img"/>

            {/* .......... Login Page / navigate to component 'Profile' if logged in successfully ............ */}
            { this.state.loginp ? 
                // if(loginp === true) printout or show the profile screen by rendering <Profile>  
                <Profile doLogout={this.dologouthandler}/>            
                :
                // else printout or show the profile screen by rendering <Logga> 
                <Logga doLogin={this.dologinhandler}/>
            }

           {/* ............ Display footer ............. */}
           <img src = {require('./footer.png')} alt="Footer img"/>
           </div>
    );
    
  }
}

export default App;
