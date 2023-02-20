import "./Modal.css";
import React from "react";

const Modal = (props) => {
  return (
    <div className="modal" onClick={props.onClose}>
      <h5>You message has been sent!</h5>
      <p>
        Thank you for your message, I am looking forward to reading it! Have a
        great rest of your day 😀.
      </p>
      <p className="modal-name">-Patryk Barnas</p>
    </div>
  );
};

export default Modal;
