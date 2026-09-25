import "./About.css";
import React, { useState, useRef, useEffect } from "react";
import imageOfMe from "../Images/patryk-barnas-portfolio.webp";
import imageOfMe2 from "../Images/puerto-rico.webp";
import imageOfMe3 from "../Images/surfing.webp";
import Typewriter from "typewriter-effect/dist/core";
import TabbedWorkEducation from "../TabbedWorkEducation/TabbedWorkEducation";
import Skills from "../Skills/Skills";

const About = () => {
  const ref = useRef();
  let [visible, setVisible] = useState(false);
  // let [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.isIntersecting && setVisible(true);
      },
      { threshold: 0.03 },
    );
    observer.observe(ref.current);
  }, []);

  const div = document.getElementById("typewriter");
  const typewriter = new Typewriter(div, {
    strings: ["7 Years of Programming.", "Result Driven."],
    autoStart: true,
    loop: true,
    pauseFor: 3000,
  });
  typewriter.typeString("").pauseFor(3000).start();

  return (
    <>
      <div className="about">
        <div id="typewriter" className="about-heading" />
        <div className="about-container">
          <div className="img-container">
            <img src={imageOfMe} alt="me" ref={ref}></img>
            <img src={imageOfMe3} alt="me" ref={ref}></img>
            <img src={imageOfMe2} alt="me" ref={ref}></img>
          </div>
          <div className="description-containter">
            <h2 id="about-me-heading">Software Development And Marketing</h2>

            <p className="about-me-description">
              I have a Bachelor's degree in Computer Science and a background in
              software development, working with Java, C#, PHP, React, Next.js,
              JavaScript, TypeScript, MySQL, and MongoDB.
            </p>
            <p className="about-me-description">
              Over the past two years, I’ve expanded into digital marketing,
              working with local SEO, Google Ads, social media advertising, web
              development, and CRM automations that help businesses manage leads
              and day-to-day processes.
            </p>

            <ul className="about-highlights">
              <li>CRMs - Certified Salesforce Admin & Platform Developer I</li>
              <li>CMS - I worked with WordPress, Wix, and SquareSpace.</li>
              <li>SEO, Google Ads, Local Service Ads & Social Media Ads</li>
              <li>CRM Development & Custom Automations</li>
            </ul>

            {/* <div className="btn b1 about-btn">
              <a href={resume} download="Resume">
                RESUME
              </a>
            </div> */}
          </div>
        </div>
        <div className="dashboard-container">
          <div>
            <TabbedWorkEducation />
          </div>
          <div>{/* <Skills /> */}</div>
        </div>
        <div className={`about-me ${visible ? "about-me-animate" : ""}`}></div>
        <div
          className={`about-me-content ${
            visible ? "about-me-content-animate" : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default About;
