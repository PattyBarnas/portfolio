import "./LandingPage.css";
import React from "react";
import Button from "../UIElements/Buttons";

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
      </div>
    </div>
  );
};
export default LandingPage;
