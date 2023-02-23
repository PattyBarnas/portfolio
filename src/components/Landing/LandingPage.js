import "./LandingPage.css";
import React, { useState } from "react";
import beach from "../Images/beach.mp4";
import clouds from "../Images/beach12.mp4";
import BackgroundVideo from "./BackgroundVideo.js";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1 className="heading-1">
          Hello, I'm <span>Patryk.</span>
        </h1>

        <p className="heading-2">I'm a full stack web developer.</p>
        <a
          href="#section-projects"
          className="btn-landing btn-white btn-animated"
        >
          View my Work
        </a>
      </div>

      {/* <div className="arrow-down">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </div> */}
    </div>
  );
};
export default LandingPage;
