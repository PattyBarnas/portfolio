import "./ContactForm.css";
import React, { useRef, useState } from "react";
import Button from "../UIElements/Button";
import messageMe from "../Images/phone-men.svg";
import Modal from "../UIElements/Modal";
import Backdrop from "../UIElements/Backdrop";
import emailjs from "@emailjs/browser";

// API Keys need to be updated
let publicKey = "qm_baMBq4t7rgLwj_";
let serviceId = "service_5gp0f0g";
let templateId = "template_kd4fbvn";

const isEmpty = (val) => val.trim() === "";
const isEmail = (value) =>
  value.trim() !== "" && value.length > 5 && value.includes("@");

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    email: true,
    message: true,
  });
  let nameRef = useRef();
  let emailRef = useRef();
  let messageRef = useRef();
  let form = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let enteredName = nameRef.current.value;
    let enteredEmail = emailRef.current.value;
    let enteredMessage = messageRef.current.value;

    let enteredNameValid = !isEmpty(enteredName);
    let enteredEmailValid = isEmail(enteredEmail);
    let enteredMessageValid = !isEmpty(enteredMessage);

    setFormInputValid({
      name: enteredNameValid,
      email: enteredEmailValid,
      message: enteredMessageValid,
    });

    const formIsValid = enteredName && enteredEmailValid && enteredMessageValid;

    if (!formIsValid) return;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    nameRef.current.value =
      emailRef.current.value =
      messageRef.current.value =
        "";

    setFormSubmitted(true);
  };

  const closeModalHandler = () => {
    setFormSubmitted(false);
  };

  let nameInputControl = `control ${
    formInputValid.name ? "" : "control-invalid"
  }`;
  let emailInputControl = `control ${
    formInputValid.email ? "" : "control-invalid"
  }`;
  let messageInputControl = `control ${
    formInputValid.message ? "" : "control-invalid-text"
  }`;

  return (
    <div className="back">
      {formSubmitted && <Backdrop onClose={closeModalHandler} />}
      {formSubmitted && <Modal onClose={closeModalHandler} />}
      <h4 className="contact-heading">Send me a message!</h4>
      <p className="questions-heading">
        Have any questions or proposals? just want to say hello? Please do 😄.
      </p>

      <form onSubmit={formSubmitHandler} ref={form}>
        <img src={messageMe} className="phone-img" alt="images of a phone" />

        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            name="from_name"
            className={nameInputControl}
            type="text"
            id="name"
            ref={nameRef}
          ></input>
          {!formInputValid.name && (
            <p className="invalid-message">Please enter a valid name.</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            ref={emailRef}
            className={emailInputControl}
          ></input>
          {!formInputValid.email && (
            <p className="invalid-message">Email must contain @.</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="40"
            ref={messageRef}
            className={messageInputControl}
          ></textarea>
          {!formInputValid.message && (
            <p className="invalid-message">
              Please don't leave the message empty
            </p>
          )}
        </div>
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;
