import { useState } from "react";
import "./TabbedWorkEducation.css";
import WorkHistory from "./WorkHistory";

const TabbedWorkEducation = (props) => {
  const [active, setActive] = useState(1);

  const onActiveHandler = (tab) => {
    console.log(tab);
    setActive(tab);
  };

  return (
    <div>
      <div className="tab-container">
        <button
          className={`tab-btn ${active === 1 ? "active" : ""}`}
          onClick={() => onActiveHandler(1)}
        >
          Work
        </button>
        <button
          data-tab={2}
          className={`tab-btn ${active === 2 ? "active" : ""}`}
          onClick={() => onActiveHandler(2)}
        >
          Education
        </button>
      </div>
      <section className="tab-details">
        {active === 1 && WorkHistory}
        {/* {} */}
      </section>
    </div>
  );
};

export default TabbedWorkEducation;

// 2 btns for
