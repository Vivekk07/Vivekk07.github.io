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
        <p className="line">Currently Working at:</p>
        <span className="type-animation animating">
          Vistaar<span className="transparentSpacer">i</span>Digital
        </span>
        <p className="pulsate">
          <img
            src="https://www.vistaardigital.com/wp-content/uploads/2020/06/vistaar-logo.jpg"
            alt=""
            className="companyLogo"
          />
        </p>
      </div>
    </div>
  );
}

export default Header;
