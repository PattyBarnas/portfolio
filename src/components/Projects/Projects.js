import "./Projects.css";
import shop from "../Images/Portfolio-shop.png";
import firetek from "../Images/FiretekHVAC.jpg";
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
