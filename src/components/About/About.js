import "./About.css";
import React, { useState, useRef, useEffect, useMemo } from "react";
import imageOfMe from "../Images/portfolio-photo.jpg";
import Icons from "./Icons";
import { DarkTheme } from "../../config/Themes";

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
      <h3 className="about-heading">About ME</h3>
      <p className="about-heading-p">
        Here you will find out more about me, mostly in terms of technology and
        programming.
      </p>
      <div className={`about-me ${visible ? "about-me-animate" : ""}`}>
        <p id="about-me-p">Get to know me!</p>
        <img src={imageOfMe} alt="me" ref={ref}></img>

        <div className="about-me-content">
          <p>
            Hello 👋, thank you for visiting my page. My name is Patryk and I'm
            a full stack web developer with a passion for Frontend Development
            and Design. I studied at Governors State University and received my
            bachelor of Computer Science. I love how the web can connect with
            people, this makes me strive to become better and never stop
            learning. The technologies I use are React.js, JavaScript,
            CSS3/SCSS, Node.js, Express.js, WordPress/ReactPress, MongoDB, MySQL
            (MERN).
          </p>
        </div>
      </div>
      <div className="about-skills">
        <Icons visible={visible} />
      </div>
    </div>
  );
};

export default About;
