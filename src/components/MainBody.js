import React from "react";
import Intro from "./Intro";
import "./MainBody.css";
import Project from "./Project";

function MainBody() {
  return (
    <div className="body__container">
      <div className="subBody__container">
        <Intro />
        <div className="bodyProject__container">
          <Project
            title="TrailerFlix"
            logo="https://raw.githubusercontent.com/Vivekk07/TrailerFlix/master/public/favicon.ico"
            link="https://ivivek.me/TrailerFlix/"
            code="https://github.com/Vivekk07/TrailerFlix"
          />
          <Project
            title="Punchat"
            logo="https://raw.githubusercontent.com/Vivekk07/PunChat/main/public/favicon.ico"
            link="https://pun-chat.web.app/"
            code="https://github.com/Vivekk07/PunChat"
          />
          <Project
            title="Tailwind Image Gallery"
            logo="https://raw.githubusercontent.com/Vivekk07/Tailwind-Image-Gallery/master/public/favicon.ico"
            link="https://ivivek.me/Tailwind-Image-Gallery/"
            code="https://github.com/Vivekk07/Tailwind-Image-Gallery"
          />
          <Project
            title="blogLy"
            logo="https://raw.githubusercontent.com/Vivekk07/blogLy/main/public/favicon.ico"
            link="https://blog-ly.vercel.app/"
            code="https://github.com/Vivekk07/blogLy"
          />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
