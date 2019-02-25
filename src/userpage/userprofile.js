import React, { Component } from 'react';

//import img from './profile.jpg';

import './userprofile.css';

import { Posts } from './Posts';
import Comments from './Comment';


class Profile extends Component {

    // ...... States for posts ...........
        state = 
            {
                postfeedback: [
                    {id:12, header: "John", body: "I ate lunch!", time: "50 mins" },
                    {id:13, header: "Charlie", body: "Something happened!", time: "25 mins" },
                    {id:14, header: "Charlott", body: "I am great!", time: "5 mins" }
                ]
            }

    // ....... BOTH MOHAMMAD's HELPED (POST COMMENT - Function ).............
            doPosthandler = (vary) => {

                // New copy of array at new address
                let tempPostfeedback = [...this.state.postfeedback];
                tempPostfeedback.push ({id:Math.random(), header: "Fatima", body: vary, time: "Just now" });
                this.setState({
                    postfeedback: tempPostfeedback
                })
            } 
            
            
    render() {
        return (
            <div className ="profilepage">
            {/* ......... Logout button ............ */}
                  <button className="logout" type="submit" value="submit" onClick={this.props.doLogout.bind(this)}>LogOut</button>

            {/* .......... Profile banner ............ */}
                  <img src = {require('./profile.jpg')} alt="Profile img"/>

            {/* ............. Show hardcoded posts ............... */} 
                  <div>
                  {this.state.postfeedback.map (post => {
                      return <Posts 
                              key={post.id}
                              header={post.header}
                              body={post.body}
                              time={post.time}/>})}         
                  </div> 
            {/* ............ Record new comment ............ */}  
                 <Comments doPost={this.doPosthandler}/> />
            </div>
         ) }
}

export default Profile;


