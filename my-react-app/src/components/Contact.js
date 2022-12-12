import React, { useState } from "react";
import { validateEmail } from "../utils/helpers/helpers";

export default function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleBlank(e) {
    if (e.target.name === "Name" || e.target.name === "Message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <form id="contact-form">
          <div>
            <label htmlFor="Name">Your Name:</label>
            <br></br>
            <input
              style={{ width: "100vh" }}
              type="text"
              defaultValue={name}
              onBlur={handleBlank}
              name="Name"
            />
          </div>
          <div>
            <label htmlFor="email">Your Email:</label>
            <br></br>
            <input
              style={{ width: "100vh" }}
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Message">Your Message:</label>
            <br></br>
            <textarea
              style={{ width: "100vh" }}
              name="Message"
              defaultValue={message}
              onBlur={handleBlank}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
