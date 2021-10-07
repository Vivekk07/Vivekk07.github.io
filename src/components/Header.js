import React from "react";
import "./Header.css";
import "./HeaderAnimation.css";
import photo from "../assets/photo.png";

function Header() {
  return (
    <div className="header__container">
      <div className="my__name">
        <img alt="" src={photo} height="60" />
        <h1>Vivek Kanade</h1>
      </div>
      {/* <h2 className="tagline">Currently open for opportunities</h2> */}

      {/* <div className="words word-1 tagline">
        <span>Currently open for opportunities</span>
      </div> */}
      <div className="tagline">
        <p className="line">Currently open for</p>
        <span className="type-animation animating">opportunities</span>
        <p className="pulsate">🔎</p>
      </div>
    </div>
  );
}

export default Header;
