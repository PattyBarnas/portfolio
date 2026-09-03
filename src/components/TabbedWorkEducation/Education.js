import "./Education.css";

const Education = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">March 2026</span>
            <h3>Project Kickoff</h3>
            <p>
              Initial planning phases, team assembly, and requirement gathering
              completed successfully.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">June 2026</span>
            <h3>Beta Release</h3>
            <p>
              Launched the core application prototype to early adopters for
              interface testing.
            </p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">September 2026</span>
            <h3>Global Launch</h3>
            <p>
              The platform is live for all users worldwide with seamless
              deployment integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
