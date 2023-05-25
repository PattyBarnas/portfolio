import "./About.css";
import React, { useState, useRef, useEffect } from "react";
import imageOfMe from "../Images/image.jpg";
import resume from "../Resume/PatrykBarnas.docx";

const About = () => {
  const ref = useRef();
  let [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.isIntersecting && setVisible(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
  }, []);

  return (
    <div className="about">
      <h3 className="about-heading">About me</h3>

      <div className={`about-me ${visible ? "about-me-animate" : ""}`}>
        <img src={imageOfMe} alt="me" ref={ref}></img>
      </div>
      <div
        className={`about-me-content ${
          visible ? "about-me-content-animate" : ""
        }`}
      >
        <p id="about-me-p">Get to know me!</p>
        <p className="about-me-description">
          Hello 👋, thank you for visiting my page. My name is Patryk and I'm a
          full stack web developer with a passion for Frontend Development and
          Design. I studied at Governors State University and received my
          bachelor of Computer Science. I love how the web can connect with
          people, this inspires me to become better and continue learning so
          that I can make an impact. Most of my focus goes towards the MERN
          stack, although I have experience with MySQL databases.
        </p>

        <div className="btn b1 about-btn">
          <a href={resume} download="Resume">
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
