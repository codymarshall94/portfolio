import React from "react";
import "../css/homecomponent.css";

function HomeComponent() {
  return (
    <div className="d-flex justify-content-center home-container" id="home">
      <div className="border-gradient home-page-frame">
        <div className="header-one">
          <h1>Cody Marshall</h1>
        </div>
        <div className="header-two">
          <h2>Creates Stuff</h2>
        </div>
        <div className="header-three">
            <span className="home-page-message">Aspiring Front End Developer</span>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
