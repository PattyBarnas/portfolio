import React from "react";
import phoneFrame from "../Images/hold-phone.png";
import "./Skills.css";

const SKILLS = [
  "Java",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Spring Boot",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Git",
  "Unit Testing",
  "Data structures",
];

function Skills() {
  return (
    <section className="skills">
      <div className="phone">
        <img className="phone-frame" src={phoneFrame} alt="" />

        <div className="phone-screen">
          <div className="screen-header">
            <h3>Technologies I Work With.</h3>
            <p>
              Hi, I have a experience working with custom code - TypeScript /
              JavaScript, Node.js, Express.js, Java, and more. I worked with CMS
              like Wix and WordPress utilizing their REST APIs.
            </p>
          </div>

          <div className="scroll-track">
            {[0, 1].map((n) => (
              <div className="scroll-slide" key={n} aria-hidden={n === 1}>
                {SKILLS.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            ))}
          </div>

          <a href="mailto:patrykbarnas@yahoo.com">Send Email</a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
