import "./About.css";
import React, { useState, useRef, useEffect } from "react";
import imageOfMe from "../Images/patryk-barnas-portfolio.webp";
// import resume from "../Resume/PatrykBarnas.docx";
import resume from "../Resume/PB.pdf";
import Typewriter from "typewriter-effect/dist/core";

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
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
  }, []);

  const div = document.getElementById("typewriter");
  const typewriter = new Typewriter(div, {
    strings: ["About Me.", "Full-stack developer with a technical SEO edge"],
    autoStart: true,
    loop: true,
    pauseFor: 3000,
  });
  typewriter.typeString("").pauseFor(3000).start();

  return (
    <>
      <div className="about">
        <div id="typewriter" className="about-heading"></div>
        <div className={`about-me ${visible ? "about-me-animate" : ""}`}>
          <img src={imageOfMe} alt="me" ref={ref}></img>
        </div>
        <div
          className={`about-me-content ${
            visible ? "about-me-content-animate" : ""
          }`}
        >
          <h2 id="about-me-heading">Meet Patryk</h2>
          <p className="about-me-description">
            Hey there 👋, thank you for visiting my page. My name is Patryk and
            I enjoy solving problems writing code. I completed a Bachelor of
            Computer Science degree at Governors State University. Development
            has been a passion of mine ever since I was a young kid who was
            influenced by my uncle and brother who are also developers.
            Nowadays, I continue to challenge myself by learning and applying it
            to solve complex problems. It inspires me how coding can reach so
            many people, the possibilities feel endless!
          </p>
          <ul className="about-highlights">
            <li> B.S. in Computer Science - Governors State University</li>
            <li>
              Full-stack apps built with React, Next.js & Node.js, MySQL, Java,
              Spring Boot
            </li>
            <li> Certified Salesforce Admin & Platform Developer I</li>
            <li> Grew organic traffic 225% through data-driven SEO</li>
            <li> Cut ad costs 40% while boosting ROAS 300%+</li>
          </ul>

          <div className="btn b1 about-btn">
            <a href={resume} download="Resume">
              RESUME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
