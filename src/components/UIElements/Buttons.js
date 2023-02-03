import "./Buttons.css";
import React from "react";

const Button = (props) => {
  return (
    <button
      className={`button button--${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
