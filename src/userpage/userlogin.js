import React, { Component } from 'react';
import './userlogin.css';

class Logga extends Component {
         
         loggaInHandler = function ()
          {
            console.log('Was clicked');
          }

     render ()
       {
        return (
        <div className = "loginpage">
         <label htmlFor="email">EMail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
         <input type="text" name="email" id="email" /> <br/>

         <label htmlFor="password">Password:&nbsp;&nbsp;&nbsp;</label> 
         <input type="text" name="password" id="password" /> <br/><br/>
     
         <button onClick = {this.loggaInHandler}>Logga in</button>
       </div>)
       }
}

export default Logga;