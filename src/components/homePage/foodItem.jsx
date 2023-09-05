import React, { useState } from "react";
import "./foodItem.css";

const FoodItem = ({ foodDetail, makeFavourite, removeFavourite, makeLike, removeLike, comments, setComments }) => {
    
    // like clicked
    const [like, setLike] = useState("Like");
    const likeClicked = () => {
        if (like === "Like") {
            makeLike(foodDetail);
            setLike("Dislike");
        }
        else {
            removeLike(foodDetail);
            setLike("Like");
        }
    }

    // favourite clicked
    const [fav, setFav] = useState("Favourite");
    const favouriteClicked = () => {
        if (fav === "Favourite") {
            makeFavourite(foodDetail);
            setFav("UnFavourite");
        }
        else {
            removeFavourite(foodDetail);
            setFav("Favourite");
        }
    }

    // textarea changed
    const [textareaContent, setTextareaContent] = useState("")
    const textareaChanging = (e) => {
        setTextareaContent(e.target.value);
    }

    // comment clicked
    const addComment = () => {
        console.log(comments);
        if (textareaContent.trim() == ""){}
        else {
            const add = [textareaContent.trim(), ...comments];
            setComments(add);
            console.log(comments)
            setTextareaContent("")
        }
    }

    const { id, dishName, price, avatar } = foodDetail;
    return (
        <div className="foodItem">
            <img src={avatar} className="foodImage" />
            <div className="foodNamePrice">
                <div className="foodName">{dishName}</div>
                <div className="foodPrice">{price}</div>
            </div>
            <div className="itemLikeFavourite">
                <div className="itemLike buttons" onClick={likeClicked}>{like}</div>
                <div className="itemFavourite buttons" onClick={favouriteClicked}>{fav}</div>
            </div>
            <textarea name="" id="" cols="20" rows="3" className="commentText" value={textareaContent} onChange={textareaChanging}></textarea>
            <div className="itemComment buttons" onClick={addComment}>Comment</div>
        </div>
    )
}

export default FoodItem;