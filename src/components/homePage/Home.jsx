import React, { useState, useEffect } from "react";
import './Home.css';

import foodData from "../assets/foodDetails.json";
import FoodItem from "./foodItem";
import Header from "../header/header";
import Comment from "./comment";

export let foodDetails = Array.from(foodData);

const Home = ({ setSignupCss, setHomeCss }) => {
    // Like and dislike food items
    const [likeFoodDetails, setLikeFoodDetails] = useState([]);
    // adding like
    const makeLike = (addData) => setLikeFoodDetails([addData, ...likeFoodDetails]);
    // removing like
    const removeLike = (removeData) => {
        const index = likeFoodDetails.indexOf(removeData);
        const remove = [...likeFoodDetails];
        remove.splice(index, 1);
        setLikeFoodDetails(remove);
    }


    // favourite and unfavourite food items
    const [favouriteFoodDetails, setFavouriteFoodDetails] = useState([]);
    // adding fav
    const makeFavourite = (addData) => setFavouriteFoodDetails([addData, ...favouriteFoodDetails]);
    // removing fav
    const removeFavourite = (removeData) => {
        const index = favouriteFoodDetails.indexOf(removeData);
        const removed = [...favouriteFoodDetails];
        setFavouriteFoodDetails(removed.splice(index, 1));
        console.log("hy");
    }

    // Complete Menu
    const foods = foodDetails.map((foodDetail) => {
        return (
            <FoodItem foodDetail={foodDetail} makeFavourite={makeFavourite} removeFavourite={removeFavourite} makeLike={makeLike} removeLike={removeLike} />
            )
    })
    // Only Favourite Foods
    const favouriteFoods = favouriteFoodDetails.map((foodDetail) => {
        return (
            <FoodItem foodDetail={foodDetail} makeFavourite={makeFavourite} removeFavourite={removeFavourite} />
            )
    })
    // Only Liked Foods
    const likeFoods = likeFoodDetails.map((foodDetail) => {
        return (
            <FoodItem foodDetail={foodDetail} makeLike={makeLike} removeLike={removeLike} />
            )
    })
    
    const displayNone = "displayNone";
    const [homeClass, setHomeClass] = useState("");
    const [likeClass, setLikeClass] = useState("displayNone");
    const [favouriteClass, setFavouriteClass] = useState("displayNone");
    // show home page function
    const showHomePage = () => { setHomeClass(""); setLikeClass(displayNone); setFavouriteClass(displayNone) }
    // show like page function
    const showLikePage = () => { setHomeClass(displayNone); setLikeClass(""); setFavouriteClass(displayNone) }
    // show favourite page function
    const showFavouritePage = () => { setHomeClass(displayNone); setLikeClass(displayNone); setFavouriteClass("") }

    return (
        <div id="completeHomePage">
            <Header showHomePage={showHomePage} showLikePage={showLikePage} showFavouritePage={showFavouritePage} setHomeCss={setHomeCss} setSignupCss={setSignupCss} />
            <div id="homePage" className={homeClass}>
                <div className="pageWelcomeMsg" >Welcome to home page</div>
                <div id="foodItems">{foods}</div>
            </div>

            <div id="favouritePage" className={favouriteClass}>
                <div className="pageWelcomeMsg" >Welcome to Favourite Page</div>
                <div id="favouriteFood">{favouriteFoods}</div>
            </div>

            <div id="likePage" className={likeClass}>
                <div className="pageWelcomeMsg" >Welcome to Like Page</div>
                <div id="likedFood">{likeFoods}</div>
            </div>

            <Comment />
        </div>
    )
}

export default Home;