import React, { Component } from 'react';
import './App.css';

import Logga from './userpage/userlogin';
import Profile from './userpage/userprofile';

// import img from './Header.png';
// import img1 from './footer.png';


class App extends Component {

  state = {
    loginp : false,
    email: '',
    password: '' }

  dologinhandler = () => 
  {
    this.setState({ loginp: true });
  }


  render() {

    return (
           <div>
           <img src = {require('./Header.png')} alt="Header img"/>
            { this.state.loginp ? 
                <Profile />            
                :
                <Logga doLogin={this.dologinhandler}/>
            }

           <img src = {require('./footer.png')} alt="Footer img"/>
           </div>
    );

    // return React.createElement ('div', {className:'App'}, React.createElement('h1', null, 'Does it works well now?'))
  }
}

export default App;
