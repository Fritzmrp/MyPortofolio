import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Fritz Marpaung{" "}
      </a>
      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.facebook.com/yanda.sitorus"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/fritzmarpaung/?next=%2F"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small> &copy; Fritz Marpaung. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
