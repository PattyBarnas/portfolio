import "./About.css";
import React from "react";
import imageOfMe from "../Images/portfolio-photo.png";
import Icons from "./Icons";
const About = () => {
  return (
    <div className="about">
      <h3 className="about-heading">About</h3>
      <div className="about-me">
        <img src={imageOfMe} alt="me"></img>
        <p>
          Ever since I was a child I was fascinated with technology. I attended
          Governor's State University and completed my bachelor's studying
          Computer Science. During my school semester, I found a passion for web
          development and started taking courses online. I love learning and
          seeing myself progress, if you're willing to work and stay consistent
          you can achieve anything!
        </p>
      </div>
      <div className="about-skills">
        <Icons />
      </div>
    </div>
  );
};

export default About;
