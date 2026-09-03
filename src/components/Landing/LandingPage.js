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
        <h2>Software Engineer. SEO. PPC.</h2>

        <p className="header-text">
          I build applications and UX focusing on performance, (from servers
          side to client side) scalability, and security. I have experience in{" "}
          <span className="sketch-highlight">SEO,GEO, & SEM</span> CRMs
          (Salesforce Admin & Developer I), Ai. I love to build UI interfaces
          using technologies like Next.js, React, or and JavaScript/TypeScript
          Framework. I've worked with Java
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
