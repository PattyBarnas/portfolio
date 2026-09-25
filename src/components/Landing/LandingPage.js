import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <h2>Web developer from Chicago, IL. </h2>
        <h1 className="heading-1">
          Hi, I’m <span className="sketch-highlight">Patryk.</span>
        </h1>

        <p className="header-text">
          My background is in software development. Over the past two years I’ve
          gained hands-on experience in
          <span className="sketch-highlight"> digital marketing</span>.
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
