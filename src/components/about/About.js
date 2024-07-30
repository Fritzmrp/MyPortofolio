import React from "react";
import "./About.css";
import me2 from "../../pic/FritzMarpaung.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={me2} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            I am a dedicated Web Developer with extensive experience in
            designing and implementing complex web applications. My expertise
            includes developing dynamic eCommerce platforms and delivering
            high-quality solutions through a blend of technical skills and
            collaborative teamwork. I have a proven track record of building
            user-facing components and admin-facing components using React JS,
            Node JS, and Express JS, ensuring smooth and efficient functionality
            across all aspects of web development. With a strong foundation in
            continuous improvement and effective communication, I am committed
            to driving success and innovation within any development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
