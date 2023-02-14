import "./LandingPage.css";
import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1 className="heading-1">
          Hello, I'm <span>Patryk.</span>
        </h1>

        <p className="heading-2">I'm a full stack web developer.</p>
        <a href="#/" className="btn btn-white btn-animated">
          View my Work
        </a>

        <div className="arrow-down">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
