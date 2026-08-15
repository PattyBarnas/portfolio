import React from "react";

import "./Projects.css";
import shop from "../Images/Portfolio-shop.png";
import warnersImg from "../Images/project-work.webp";
import internshipImg from "../Images/internship-project.webp";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="clipboard-container">
        <img src={shop} alt="Clipboard project" className="project-clipboard" />
        <div className="clipboard-content">
          <h3 className="project-subheading">E-commerce Store</h3>
          <p className="clipboard-description">
            - React.js, CSS, Node.js, Express.js, MongoDB, Mongoose
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

      <div className="warners-container">
        <div className="warners-content">
          <h3 className="project-subheading">Warner's Decking</h3>
          <p className="warners-header">
            - Fully Responsive, built using React, React Router, Node.js, CSS
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
        <img
          src={warnersImg}
          alt="Clipboard project"
          className="project-warners"
        />
      </div>
      <div className="clothing-container">
        <img
          src={internshipImg}
          alt="Clothing Store project"
          className="project-clothing"
        />
        <div className="clothing-content">
          <h3 className="project-subheading">Clothing Inc</h3>
          <p className="clothing-header">
            Built using React.js, Context Hook, Integrated with Stripe.js, CSS.
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
    </div>
  );
};

export default Projects;
