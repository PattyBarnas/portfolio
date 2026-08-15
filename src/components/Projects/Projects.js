import React from "react";

import "./Projects.css";
import shop from "../Images/Portfolio-shop.png";
import warnersImg from "../Images/project-work.webp";
import internshipImg from "../Images/internship-project.webp";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>
          I love to create custom web experiences that are intuitive, engaging,
          and built around the needs of users. I prioritize performance, UX,
          clean code, accessibility, and scalability to make sure every project.
        </p>
      </div>

      <div className="project-container">
        <div>
          <img src={shop} alt="E-commerce project" className="project-ecom" />
        </div>
        <div className="project-content">
          <h3 className="project-subheading">E-commerce Store</h3>

          <p className="project-description">
            A full-stack e-commerce application built with React and Node.js,
            featuring a secure REST API, MongoDB database, user authentication,
            shopping cart, Stripe payments, and responsive UI.
          </p>
          <ul className="project-features">
            <li>Authentication</li>
            <li>Stripe Integration</li>
            <li>Cart & Check Out</li>
            <li>State Management</li>
            <li>Database Schema</li>
            <li>Notifications</li>
          </ul>

          <div className="btn-container">
            <div className="btn b1">
              <a href="https://github.com/PattyBarnas/My-Shop">View</a>
            </div>
            <div className="btn b1">
              <a href="https://github.com/PattyBarnas/My-Shop">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <h3 className="project-subheading">Warner's Decking</h3>
          <p className="project-description">
            A fully responsive decking website built with React and Node.js,
            featuring smooth navigation, reusable components, and a clean,
            modern design optimized for desktop and mobile users
          </p>

          <div className="btn-container">
            <div className="btn b1">
              <a href="https://warnersdecking.com/">View</a>
            </div>
            {/* <div className="btn b1">
              {/* <a href="https://github.com/PattyBarnas/warners-react">GitHub</a> */}
            {/* </div> */}
          </div>
        </div>
        <div>
          <img
            src={warnersImg}
            alt="Clipboard project"
            className="warners-img"
          />
        </div>
      </div>

      <div className="project-container">
        <div>
          <img
            src={internshipImg}
            alt="Clothing Store project"
            className="project-clothing"
          />
        </div>
        <div className="project-content">
          <h3 className="project-subheading">The Commons XR</h3>
          <p className="project-description">
            An immersive XR experience built to showcase interactive 3D
            environments, combining modern web technologies with engaging
            visuals and intuitive user interactions.
          </p>

          <div className="btn-container">
            <div className="btn b1">
              <a href="https://thecommonsxr.com/">View</a>
            </div>
            <div className="btn b1">
              <a href="https://github.com/PattyBarnas/ClothingInc">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
