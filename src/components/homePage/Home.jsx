import React, { useState, useEffect } from "react";
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

import foodData from "../assets/foodDetails.json";
import FoodItem from "./foodItem";
import Header from "../header/header";
import Comment from "./comment";

export let foodDetails = Array.from(foodData);

const Home = ({setSignupCss, setHomeCss}) => {
    // Like and dislike food items
    const [likeFoodDetails, setLikeFoodDetails] = useState([]);
    // adding like
    const makeLike = (addData) => setLikeFoodDetails([addData, ...likeFoodDetails]);
    // removing like
    const removeLike = (removeData) => {
        const index = likeFoodDetails.indexOf(removeData);
        const remove = [...likeFoodDetails];
        remove.splice(index, 1);
        setLikeFoodDetails([...remove]);
        console.log("removed");
    }


    // favourite and unfavourite food items
    const [favouriteFoodDetails, setFavouriteFoodDetails] = useState([]);
    // adding fav
    const makeFavourite = (addData) => setFavouriteFoodDetails([addData, ...favouriteFoodDetails]);
    // removing fav
    const removeFavourite = (removeData) => {
        const index = favouriteFoodDetails.indexOf(removeData);
        const removed = [...favouriteFoodDetails];
        removed.splice(index, 1);
        setFavouriteFoodDetails([...removed]);
        console.log(favouriteFoodDetails);
    }

    // comments 
    const [comments, setComments] = useState([]);
    const showComments = comments.map((everySingleComment) => {
        return (
            <div className="commentParent">
                <div className="everySingleComment"> {everySingleComment} </div>
            </div>
        )
    })

    // Complete Menu
    const foods = foodDetails.map((foodDetail) => {
        return (
            <FoodItem foodDetail={foodDetail} makeFavourite={makeFavourite} removeFavourite={removeFavourite} makeLike={makeLike} removeLike={removeLike} />
        )
    })
    // Only Favourite Foods
    const favouriteFoods = favouriteFoodDetails.map((foodDetail) => {
        return (
            <FoodItem foodDetail={foodDetail} makeFavourite={makeFavourite} removeFavourite={removeFavourite} makeLike={makeLike} removeLike={removeLike} />
        )
    })
    // Only Liked Foods
    const likeFoods = likeFoodDetails.map((foodDetail) => {
        return (
            <FoodItem foodDetail={foodDetail} makeFavourite={makeFavourite} removeFavourite={removeFavourite} makeLike={makeLike} removeLike={removeLike} />
        )
    })

    const [homeClass, setHomeClass] = useState("");
    const [likeClass, setLikeClass] = useState("displayNone");
    const [favouriteClass, setFavouriteClass] = useState("displayNone");

    const displayNone = "displayNone";
    // show home page function
    const showHomePage = () => {
        setHomeClass("")
        setLikeClass(displayNone);
        setFavouriteClass(displayNone);
    }
    // show home page function
    const showLikePage = () => {
        setHomeClass(displayNone)
        setLikeClass("");
        setFavouriteClass(displayNone);
    }
    // show home page function
    const showFavouritePage = () => {
        setHomeClass(displayNone)
        setLikeClass(displayNone);
        setFavouriteClass("");
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

    return (
        <div id="completeHomePage">
            <Header showHomePage={showHomePage} showLikePage={showLikePage} showFavouritePage={showFavouritePage} setHomeCss={setHomeCss} setSignupCss={setSignupCss} />
            <div id="homePage" className={homeClass}>
                <div className="pageWelcomeMsg" >Hello welcome to home page</div>
                <div id="foodItems">{foods}</div>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores. Aspernatur dolore nemo nobis sit mollitia corporis, quisquam quam sint animi deleniti unde, error iste a? Sed nesciunt assumenda mollitia delectus neque expedita alias. A maxime alias suscipit optio dicta non laboriosam numquam quibusdam quae modi velit rerum sapiente nihil illum, aliquam quidem nobis natus vel necessitatibus, eos, obcaecati sit soluta. Natus labore. */}
            </div>

            <div id="favouritePage" className={favouriteClass}>
                <div className="pageWelcomeMsg" >Hello welcome to Favourite Page</div>
                <div id="favouriteFood">{favouriteFoods}</div>
            </div>

            <div id="likePage" className={likeClass}>
                <div className="pageWelcomeMsg" >Hello welcome to Like Page</div>
                <div id="likedFood">{likeFoods}</div>
            </div>

            <div id="doComment"><Comment textareaContent={textareaContent} textareaChanging={textareaChanging} addComment={addComment} /></div>

            <div id="commentsText">Our Customer Thoughts About US</div>

            <div id="comments" className="">
                {showComments}
            </div>
        </div>
    )
}

export default Home;