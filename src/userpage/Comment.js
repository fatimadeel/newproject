import React from 'react';
import './Posts.css'


export const Comments = (props) => {
    return (
        // <div class="panel-google-plus-comment">
        //     <img class="img-circle" src="https://lh3.googleusercontent.com/uFp_tsTJboUY7kue5XAsGA=s46" alt="User-Image" />
            <div class="panel-google-plus-textarea">
                <textarea rows="4"></textarea>
                <button type="submit" class="[ btn btn-success disabled ]">Post comment</button>
                <button type="reset" class="[ btn btn-default ]">Cancel</button>
            </div>
              //<div class="clearfix"></div>
        // </div>   
       )
}

export default Comments;