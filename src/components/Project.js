import React from "react";
import "./Project.css";

function Project({ logo, title, link, code }) {
  return (
    <div className="project__container">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="img__container"
      >
        <img alt="" src={logo} width="50" height="50" />
      </a>
      <div className="project__info">
        <a href={link} target="_blank" rel="noreferrer">
          <h4>{title}</h4>
        </a>
      </div>
      <div className="code__link">
        <i>
          <a href={code} target="_blank" rel="noreferrer">
            Code
          </a>
        </i>
      </div>
    </div>
  );
}

export default Project;
