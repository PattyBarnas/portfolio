import "./LandingPage.css";
import React from "react";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1 className="heading-1">
          Hello, I'm <span>Patryk.</span>
        </h1>

        <p className="heading-2">
          I'm a <span className="sketch-highlight ">full stack developer.</span>
        </p>
        <a
          href="#section-projects"
          className="btn-landing btn-white btn-animated"
        >
          View my Work
        </a>
      </div>
    </div>
  );
};
export default LandingPage;
