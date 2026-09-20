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
      { threshold: 0.2 },
    );
    observer.observe(ref.current);
  }, []);

  const div = document.getElementById("typewriter");
  const typewriter = new Typewriter(div, {
    strings: ["Programming For 6 Years.", "I Work With JavaScript."],
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
          <div>
            <h2 id="about-me-heading">Full-stack web developer</h2>

            <p className="about-me-description">
              When I build website I think like a SEO strategist. I hold a
              Bachelor's in Computer Science. What sets my work apart is the
              intersection of two disciplines: full-stack engineering and
              technical SEO. I build fast, scalable applications using React,
              Next.js, Node.js, PHP, Java, and Spring Boot
            </p>

            <ul className="about-highlights">
              <li> B.S. in Computer Science - Governors State University</li>

              <li> Certified Salesforce Admin & Platform Developer I</li>
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
