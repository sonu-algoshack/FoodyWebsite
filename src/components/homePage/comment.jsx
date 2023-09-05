import React from "react";

import './comment.css';

const Comment = ({textareaContent, textareaChanging, addComment}) => {
    return (
        <div id="doComment">
            <div id="letsComment">Let's Comments</div>
            <textarea name="" id="textarea" cols="20" rows="8" className="commentText" value={textareaContent} onChange={textareaChanging}></textarea>
            <div className="itemComment buttons" onClick={addComment}>Comment</div>
        </div>
    )
}

export default Comment;