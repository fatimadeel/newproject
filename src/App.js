import React, { Component } from 'react';
import './App.css';
import Login from './userpage/userlogin';

class App extends Component {
  render() {
    return (
      <Login />
    );

    // return React.createElement ('div', {className:'App'}, React.createElement('h1', null, 'Does it works well now?'))
  }
}

export default App;
