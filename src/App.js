import React, { Component } from 'react';
import './App.css';

import Logga from './userpage/userlogin';

// import img from './Header.png';
// import img1 from './footer.png';


class App extends Component {

  render() {
    return (
           <div>
           <img src = {require('./Header.png')} />
           <Logga />
           <img src = {require('./footer.png')} />
           </div>
    );

    // return React.createElement ('div', {className:'App'}, React.createElement('h1', null, 'Does it works well now?'))
  }
}

export default App;
