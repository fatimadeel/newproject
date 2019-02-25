import React from 'react';
import './Posts.css'



export const Comments = (props) => {

    let textAreaValue = "";

    var handleChange = (event) => {
        // console.log('event', event.target.value);
        textAreaValue = event.target.value;
    }

    const doPost = () => {
        props.doPost(textAreaValue);
    }


    return (
            <div className="panel-google-plus-textarea">
                <textarea rows="4" onChange={handleChange}></textarea>
                <button className="button" type="submit" value="submit" onClick={doPost.bind(this)}>Post comment</button>
            </div>
       )
}


export default Comments;