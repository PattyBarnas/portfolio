import "./LandingPage.css";
import React from "react";
import sunImg from "../Images/hero-sun-gif.webp";
import TabbedWorkEducation from "../TabbedWorkEducation/TabbedWorkEducation";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <img className="sun-img" src={sunImg} alt="sun bouncing" />
        <h1 className="heading-1">
          Hi, I’m <span className="sketch-highlight">Patryk.</span>
        </h1>
        <h2>30 yo web developer from Chicago, IL.</h2>

        <p className="header-text">
          I'm 30 yo from Chicago, IL. Web developer working across the full
          stack. Specializing in React, Next.js, JavaScript, Node.js. I also
          have
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
