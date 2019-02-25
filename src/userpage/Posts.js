import React from 'react';
import './Posts.css'


export const Posts = (props) => {
    
    return (

        <div className="container">
            <div className="row">
                <div className="[ col-xs-12 col-sm-offset-1 col-sm-5 ]">
                    <div className="[ panel panel-default ] panel-google-plus">
                        <div className="panel-heading">
                            <h3>{props.header} </h3>
                            <h5><span>Shared publicly</span> - <span>{props.time}</span> </h5>
                        </div>
                        <div className="panel-body">
                            <p>{props.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;
