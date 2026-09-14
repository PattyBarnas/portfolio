import "./LandingPage.css";
import React from "react";
import sunImg from "../Images/hero-sun-gif.webp";
import TabbedWorkEducation from "../TabbedWorkEducation/TabbedWorkEducation";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <img className="sun-img" src={sunImg} alt="sun bouncing" />
        <h2>Web developer from Chicago, IL.</h2>
        <h1 className="heading-1">
          Hi, I’m <span className="sketch-highlight">Patryk.</span>
        </h1>

        <p className="header-text">
          I work across the full stack. Specializing in Next.js, React,
          TypeScript, JavaScript, Node.js, and Java
          <span className="sketch-highlight"> SEO, GEO, & SEM</span> experience
        </p>
        <TabbedWorkEducation />
        {/* <a
          href="#section-projects"
          // className="btn-landing btn-white btn-animated"
        >
          View my Work
        </a> */}
      </div>
    </div>
  );
};
export default LandingPage;
