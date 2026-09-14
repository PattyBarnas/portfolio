import "./cta.css";
import Skills from "../Skills/Skills";
const CTA = () => {
  return (
    <div className="cta-container">
      <h3>Get in Touch.</h3>

      <div className="skills-container">
        <Skills></Skills>
      </div>
      <a href="mailto:patrykbarnas@yahoo.com">Send Email</a>
    </div>
  );
};

export default CTA;
