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
          I work across the full stack, specializing in Next.js, React,
          TypeScript, JavaScript, Node.js, and Java.
          <span className="sketch-highlight"> SEO, GEO, & SEM</span> experience.
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
