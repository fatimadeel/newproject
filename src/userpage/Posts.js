import React from 'react';
import './Posts.css'


export const Posts = (props) => {
    
    return (

        <div class="container">
            <div class="row">
                <div class="[ col-xs-12 col-sm-offset-1 col-sm-5 ]">
                    <div class="[ panel panel-default ] panel-google-plus">
                        <div class="panel-heading">
                            {/* <img class="[ img-circle pull-left ]" src="https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg" alt="Mouse0270" /> */}
                            <h3>{props.header} </h3>
                            <h5><span>Shared publicly</span> - <span>{props.time}</span> </h5>
                        </div>
                        <div class="panel-body">
                            <p>{props.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;
