import React from "react";
import "./Projects.css";
import shop from "../Images/Portfolio-shop.png";
import warnersImg from "../Images/project-work.webp";
import internshipImg from "../Images/internship-project.webp";

import { motion } from "motion/react";

const cardVariants = {
  offscreen: {
    y: 550,
    opacity: 0,
    scale: 0.4,
    rotate: -8,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>
          I love to create custom web experiences. I prioritize performance, UX,
          clean code, accessibility, and scalability to make sure every project.
        </p>
      </div>

      <div className="main-container">
        <motion.div
          className="project-container"
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true, margin: "0px 0px 300px 0px" }}
        >
          <div className="project-image">
            <img src={shop} alt="E-commerce project" className="project-ecom" />
          </div>
          <div className="project-content">
            <h3 className="project-subheading">E-commerce Store</h3>

            <p className="project-description">
              A full-stack e-commerce application built with React and Node.js,
              featuring a secure REST API, MongoDB database, user
              authentication, shopping cart, Stripe payments, and responsive UI.
            </p>
            {/* <ul className="project-features">
              <li>Authentication</li>
              <li>Stripe Integration</li>
              <li>Cart & Check Out</li>
              <li>State Management</li>
              <li>Database Schema</li>
              <li>Notifications</li>
            </ul> */}

            <div className="btn-container">
              <div className="btn b1">
                <a href="https://github.com/PattyBarnas/My-Shop">View</a>
              </div>
              <div className="btn b1">
                <a href="https://github.com/PattyBarnas/My-Shop">GitHub</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-container"
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{ once: true, margin: "0px 0px 300px 0px" }}
        >
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
          <div className="project-image">
            <img
              src={warnersImg}
              alt="Clipboard project"
              className="warners-img"
            />
          </div>
        </motion.div>

        <motion.div
          className="project-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "0px 0px 300px 0px" }}
          variants={cardVariants}
        >
          <div className="project-image">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
