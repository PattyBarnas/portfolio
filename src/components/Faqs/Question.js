import React from "react";
import "./Question.css";

function Question({ question, answer }) {
  return (
    <li className="question-item">
      <h3>{question}</h3>
      <p>{answer}</p>
    </li>
  );
}

export default Question;
