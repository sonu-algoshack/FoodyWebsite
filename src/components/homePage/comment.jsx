import React, { useState } from "react";

import './comment.css';

const Comment = () => {
    // comments 
    const [comments, setComments] = useState([]);

    // comment clicked
    const [textareaContent, setTextareaContent] = useState("")
    const textareaChanging = (e) => setTextareaContent(e.target.value)

    // show all comments
    const addComment = () => {
        if (textareaContent.trim() == "") { }
        else {
            const add = [textareaContent.trim(), ...comments];
            setComments(add);
            setTextareaContent("")
        }
    }

    const showComments = comments.map((everySingleComment) => {
        return (
            <div className="commentParent">
                <div className="everySingleComment"> {everySingleComment} </div>
            </div>
        )
    })
    return (
        <>
            <div id="doComment">
                <div id="letsComment">Let's Comments</div>
                <textarea name="" id="textarea" cols="20" rows="8" className="commentText" value={textareaContent} onChange={textareaChanging}></textarea>
                <div className="itemComment buttons" onClick={addComment}>Comment</div>
            </div>
            <div id="commentsText">Our Customer Thoughts About US</div>

            <div id="comments" className="">
                {showComments}
            </div>
        </>
    )
}

export default Comment;