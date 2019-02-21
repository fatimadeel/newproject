import React, { Component } from 'react';

//import img from './profile.jpg';
import './userprofile.css';
import { Posts } from './Posts';

class Profile extends Component {

    render() {
        return (
            <div className ="profilepage">
                  <img src = {require('../profile.jpg')} alt="Profile img"/>
                 
                 <Posts project={"hello world"}/>
                 <Posts/>
             
                

            </div>)
    }
}

export default Profile;


