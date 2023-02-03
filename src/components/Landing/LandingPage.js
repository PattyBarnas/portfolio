import "./LandingPage.css";
import React from "react";
import Button from "../UIElements/Buttons";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="heading-1">
        Hello, my name is <span>Patryk.</span>
      </h1>
      <p className="heading-2">I'm a Full Stack Web Developer.</p>
      <Button className="landing" type="button">
        View my work
      </Button>
    </div>
  );
};
export default LandingPage;
