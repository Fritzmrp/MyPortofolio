import React from "react";
import "./Portfolio.css";

import img1 from "../../pic/IL_Shop.jpg";
import img2 from "../../pic/Sampah.jpg";
import img3 from "../../pic/UpSize.jpg";
import img4 from "../../pic/Java.jpg";
import img5 from "../../pic/MadumaTani.jpg";
import img6 from "../../pic/Lokerku.jpg";
import img7 from "../../pic/Laketoba.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Website E-commerce Infinite Shop",
    github: "https://github.com/Suandika12/Infinite_Shop",
    demo: "#",
  },
  {
    id: 2,
    image: img2,
    title: "Website Waste Classification",
    github: "https://github.com/Fritzmrp/TugasAkhirTekcertan",
    demo: "#",
  },
  {
    id: 3,
    image: img3,
    title: "Website Cafe UpSize",
    github:
      "https://github.com/Fritzmrp/Pengembangan-Sistem-Informasi-Cafe-UpSize",
    demo: "#",
  },
  {
    id: 4,
    image: img4,
    title: "Application Deskstop Based Library",
    github: "https://github.com/Fritzmrp/Desktop-Libraries-application",
    demo: "#",
  },
  {
    id: 5,
    image: img5,
    title: "Website Maduma Tani Farmer",
    github: "https://github.com/Fritzmrp/Sistem-Informasi-Kelompok-Maduma-Tani",
    demo: "#",
  },
  {
    id: 6,
    image: img6,
    title: "Website Lokerku",
    github: "https://github.com/Fritzmrp/Website-Lokerku",
    demo: "#",
  },
  {
    id: 7,
    image: img7,
    title: "Website Lake Toba Tourism Information",
    github: "https://github.com/Fritzmrp/Pariwisata-Toba-Samosir",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
