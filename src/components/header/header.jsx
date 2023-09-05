import React from "react";

import './header.css';

const Header = ({ showHomePage, showLikePage, showFavouritePage }) => {
    return (
        <>
            <div id="header">
                <div id="logo" className="headerTexts"><span className="logoWelcome">Welcome </span>Foody</div>
                <div id="sections">
                    <div id="home" className="headerTexts" onClick={showHomePage}>Home</div>
                    <div id="like" className="headerTexts" onClick={showLikePage}>Like</div>
                    <div id="favourite" className="headerTexts" onClick={showFavouritePage}>Favourite</div>
                </div>
                <div id="signupDetails">
                    <div id="userEmail"> {localStorage.getItem("userEmailId")} </div>
                </div>
            </div>
        </>
    )
}

export default Header;