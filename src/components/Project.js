import React from "react";
import "./Project.css";

function Project({ logo, title, link, code }) {
  return (
    <div className="project__container">
      <img alt="" src={logo} width="50" height="50" />
      <div className="project__info">
        <h4>{title}</h4>
        <div className="project__links">
          <i>
            <a href={link} target="_blank">
              Link
            </a>
          </i>
          <i>
            <a href={code} target="_blank">
              Code
            </a>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Project;
