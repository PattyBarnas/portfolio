import "./Icons.css";
import React from "react";

const Icons = (props) => {
  return (
    <div className="skills">
      <div
        className={`skill-row-1 ${props.visible ? "skill-row-animate" : ""}`}
      >
        <ion-icon name="logo-react"></ion-icon>
        <ion-icon name="logo-css3"></ion-icon>
        <ion-icon name="logo-javascript"></ion-icon>
      </div>

      <div
        className={`skill-row-2 ${props.visible ? "skill-row-animate" : ""}`}
      >
        <ion-icon name="logo-github"></ion-icon>

        <ion-icon name="logo-nodejs"></ion-icon>
        <ion-icon name="logo-javascript"></ion-icon>
      </div>

      <div
        className={`skill-row-3 ${props.visible ? "skill-row-animate" : ""}`}
      >
        <ion-icon name="logo-javascript"></ion-icon>
        <ion-icon name="logo-javascript"></ion-icon>
        <ion-icon name="logo-javascript"></ion-icon>
      </div>
    </div>
  );
};
export default Icons;
