
import React, { Component } from 'react';
import './userlogin.css';

class Logga extends Component {
   
    
     loggaInHandler = function (e)
      {
        e.preventDefault();

        if ((this.emailval.value) === "fatima@gmail.com" && (this.passval.value) === "fatima")
        {
        this.props.doLogin();
        // console.log('working');

        } else 
            {
           return alert('Incorrect credentials entered.');
           }
        }


    render() {
        return (
            <div className="loginpage">
                 <form onSubmit={this.loggaInHandler.bind(this)}>
                    <label htmlFor="email">EMail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="email" id="email" ref={(eref) => this.emailval = eref }/> <br/>
                    

                    <label htmlFor="password">Password:&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="password" id="password" ref={(pref) => this.passval = pref } /> <br/><br/>
        

                    <button type="submit" value="submit">Logga in</button>
                </form>
                <p>-------------------- eller ---------------------</p>
                <button onClick={this.loggaInHandler}>Skapa nytt konto</button>
            </div>)

    }
}

export default Logga;





