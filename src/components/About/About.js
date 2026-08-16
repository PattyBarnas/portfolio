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
    strings: ["About Me.", "Thanks For Visting"],
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
            I'm Patryk — a full-stack developer who thinks like an SEO
            strategist and builds like an engineer. I hold a Bachelor's in
            Computer Science from Governors State University, with development
            being part of my life since childhood, shaped by watching my uncle
            and brother build software of their own. What sets my work apart is
            the intersection of two disciplines that rarely meet: full-stack
            engineering and technical SEO. I build fast, scalable applications
            using React, Next.js, Node.js, Java, and Spring Boot
          </p>
          <p className="about-me-description">
            I don't stop at "does it work." I dig into Core Web Vitals and site
            architecture to make sure what I build actually gets discovered.
            That's driven real results: a 225% increase in organic traffic, a
            40% reduction in ad costs with 300%+ ROAS, and a 350+ page site
            migration without losing SEO equity. I'm also a certified Salesforce
            Administrator and Platform Developer I, and I've led Agile teams
            through sprint planning and delivery. I lean heavily on AI tools to
            accelerate my learning and stay current in a field that moves fast.
          </p>

          <ul className="about-highlights">
            <li> B.S. in Computer Science - Governors State University</li>
            <li>
              Ship full-stack apps end-to-end with React, Next.js, Node.js,
              Java, Spring Boot & MySQL
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
