import React from "react";

import "./Projects.css";
import shop from "../Images/Portfolio-shop.png";
import firetek from "../Images/FiretekHVAC.png";
import clothingInc from "../Images/ClothingInc.jpg";

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
          <ul>
            <li>Authentication Workflow</li>
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

      <div className="firetek-container">
        <div className="firetek-content">
          <h3 className="project-subheading">Firetek</h3>
          <p className="firetek-header">
            - Fully Responsive, built using React, React Router, Node.js, CSS
          </p>

          <div className="btn-container">
            <div className="btn b1">
              <a href="https://pattybarnas.github.io/firetek-react/">View</a>
            </div>
            <div className="btn b1">
              <a href="https://github.com/PattyBarnas/firetek-react">GitHub</a>
            </div>
          </div>
        </div>
        <img
          src={firetek}
          alt="Clipboard project"
          className="project-firetek"
        />
      </div>
      <div className="clothing-container">
        <img
          src={clothingInc}
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
              <a href="https://pattybarnas.github.io/ClothingInc/">View</a>
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
