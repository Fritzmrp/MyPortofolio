import React from "react";
import Cv from "../cv/Cv";
import profile from "../../pic/FritzMarpaung2.jpg";
import HeaderSections from "../headersections/HeaderSections";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Fritz Marpaung</h1>
        <h5 className="text-light">Web Developer | Frontend Developer</h5>
        <Cv />
        <HeaderSections />
        <div className="me">
          <img src={profile} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
