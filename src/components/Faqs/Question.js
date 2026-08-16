import React from "react";
import "./Question.css";

function Question({ question, answer }) {
  return (
    <li>
      <div> daddys is here{question}</div>
      <div>{answer}</div>
    </li>
  );
}

export default Question;
