import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <a href="https://github.com/Vivekk07" target="_blank" rel="noreferrer">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a href="mailto:k.vivekk07@gmail.com" target="_blank" rel="noreferrer">
        <i className="far fa-envelope fa-2x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/vivekk07/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in fa-2x"></i>
      </a>
      <a href="https://twitter.com/vivekk_07" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a
        href="https://open.spotify.com/user/vivekk.7?si=a09cc1d39c8b4edf"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-spotify fa-2x"></i>
      </a>
      <a href="https://discord.gg/9A5trFPq" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-discord fa-2x"></i>
      </a>
    </div>
  );
}

export default Footer;
