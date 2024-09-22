import "./Projects.css";
import shop from "../Images/Portfolio-shop.png";
import firetek from "../Images/FiretekHVAC.png";
import clothingInc from "../Images/ClothingInc.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects-heading">Projects</h3>
      <div className="clipboard-container">
        <img src={shop} alt="Clipboard project" className="project-clipboard" />
        <div className="clipboard-content">
          <p className="clipboard-header">
            <span>E-commerce store</span> - Built using React, CSS, Node.js,
            Express.js
          </p>

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
          <p className="firetek-header">
            <span>Firetek</span> - Fully Responsive, built using React, React
            Router, Node.js, CSS
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
          <p className="clothing-header">
            <span>Clothing Inc</span> - Built using React.js, Context Hook,
            Integrated with Stripe.js, CSS.
          </p>

          <div className="btn-container">
            <div className="btn b1">
              <a href="https://pattybarnas.github.io/ClothingInc/">View</a>
            </div>
            <div className="btn b1">
              <a href="https://github.com/PattyBarnas/ClothingInc">GitHub</a>
            </div>
          </div>
          <div class="curves">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
