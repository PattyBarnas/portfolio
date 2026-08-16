import "./LandingPage.css";
import React from "react";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1 className="heading-1">
          Hi, I’m <span className="sketch-highlight">Patryk.</span> I’m a
          Software Engineer.
        </h1>

        <p className="header-text">
          I build scalable full-stack software and pair it with hands-on{" "}
          <span className="sketch-highlight">SEO & SEM</span> experience -
          turning technical skill into measurable business growth.
        </p>
        <a
          href="#section-projects"
          // className="btn-landing btn-white btn-animated"
        >
          View my Work
        </a>
      </div>
    </div>
  );
};
export default LandingPage;
