import React from "react";
import "../css/contactcomponent.css";

function ContactComponent() {
  return (
    <div className="container contact d-flex justify-content-center flex-column" id="contact">
      <div className="section-header">
        <h3>Contact</h3>
      </div>
      <div className="container">
          <div className="d-flex justify-content-center flex-column align-items-center mt-5">
              <span className="gradient-text">
                  Still Learning But Im Ready!
              </span>
              <span className="gradient-text">
                  @codymarshall@gmail.com
              </span>
          </div>
      </div>
    </div>
  );
}

export default ContactComponent;
