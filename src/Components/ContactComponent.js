import React from "react";
import "../css/contactcomponent.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function ContactComponent() {
  return (
    <div
      className="container contact d-flex justify-content-center flex-column"
      id="contact"
    >
      <div className="section-header">
        <h3>Lets Keep This Simple</h3>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center mt-5">
          <span className="gradient-text">@codymarshall@gmail.com</span>
        </div>
        <div className="d-flex justify-content-center">
          <a
            className="nav-link social-icon px-1"
            href="https://github.com/codymarshall94"
          >
            <AiFillGithub color="#3FBC9D" />
          </a>
          <a
            className="nav-link social-icon px-1"
            href="https://www.linkedin.com/in/cody-marshall-8aa8b315a/"
          >
            <AiFillLinkedin color="#ECE2BF" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
