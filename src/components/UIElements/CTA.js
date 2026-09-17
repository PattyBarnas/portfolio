import "./cta.css";
import sunImg from "../Images/hero-sun-gif.webp";

const CTA = () => {
  return (
    <div className="cta-container">
      <img className="sun-img" src={sunImg} alt="sun bouncing" />
      <h3>Get in Touch.</h3>

      <a href="mailto:patrykbarnas@yahoo.com">Send Email</a>
    </div>
  );
};

export default CTA;
