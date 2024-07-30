import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const frontendSkills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "Bootstrap", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "Tailwind", level: "Experienced" },
  { name: "ReactJs", level: "Experienced" },
  { name: "Git/GitHub", level: "Experienced" },
];
const backendSkills = [
  { name: "PHP", level: "Experienced" },
  { name: "Laravel", level: "Experienced" },
  { name: "Python", level: "Experienced" },
  { name: "C#", level: "Experienced" },
  { name: "Java", level: "Experienced" },
  { name: "Node Js", level: "Intermediate" },
  { name: "RestAPI", level: "Intermediate" },
  { name: "MySQL", level: "Experienced" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-End Development</h3>
          <div className="experience_content">
            {frontendSkills.map((skill) => (
              <article key={skill.name} className="experience_details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            {backendSkills.map((skill) => (
              <article className="experience_details">
                <BsPatchCheckFill className="icons" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
