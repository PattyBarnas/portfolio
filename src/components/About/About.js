import "./About.css";
import React, { useState, useRef, useEffect, useMemo } from "react";
import imageOfMe from "../Images/portfolio-photo.jpg";
import Icons from "./Icons";

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
      <h3 className="about-heading">About</h3>
      <div className={`about-me ${visible ? "about-me-animate" : ""}`}>
        <img src={imageOfMe} alt="me" ref={ref}></img>

        <p>
          Ever since I was young I was fascinated with technology. I pursued
          determination, concentration, and masturbation. During my school
          years, I found a passion for web development and started taking
          courses online. I love learning and seeing myself progress, if you're
          willing to work and stay consistent you can achieve anything!
        </p>
      </div>
      <div className="about-skills">
        <Icons visible={visible} />
      </div>
    </div>
  );
};

export default About;
