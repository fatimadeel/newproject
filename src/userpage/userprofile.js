import React, { Component } from 'react';

//import img from './profile.jpg';

import './userprofile.css';

import { Posts } from './Posts';
import Comments from './Comment';


class Profile extends Component {

    // States for posts 
        state = 
            {
                postfeedback: [
                    {header: "John", body: "I ate lunch!", time: "50 mins" },
                    {header: "Charlie", body: "Something happened!", time: "25 mins" },
                    {header: "Charlott", body: "I am great!", time: "5 mins" }
                ]
            }
          
    render() {
        return (
            <div className ="profilepage">
                  <button className="logout" type="submit" value="submit" onClick={this.props.doLogout.bind(this)}>LogOut</button>


                  <img src = {require('./profile.jpg')} alt="Profile img"/>
                  
                  <div>
                  {this.state.postfeedback.map  (post => {
                      return <Posts header={post.header}
                              body={post.body}
                              time={post.time}/>})}         
                  </div>  
                  <Comments />
            </div>
         ) }
}

export default Profile;


