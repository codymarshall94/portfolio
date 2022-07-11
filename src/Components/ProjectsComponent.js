import React from "react";
import "../css/projectscomponent.css";
import doubleup from "../images/doubleup.png";
import { BsGear } from "react-icons/bs";

function ProjectsComponent() {
  return (
    <div id="projects" className="projects container">
      <div className="section-header">
        <h3>Projects</h3>
        <div className="container">
          <div className="row mt-2">
            <div className="col-sm-12 col-md-6 col-lg-4 project-item-container">
              <div className="border-gradient project-item">
                <img
                  className="project-img"
                  src={doubleup}
                  alt="double up game screenshot"
                />
              </div>
              <div className="project-text">
                <span className="project-text-color">Double Up Game</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 project-item-container">
              <div className="border-gradient project-item">
                <BsGear />
              </div>
              <div className="project-text">
                <span className="project-text-color">In Devlopment</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 project-item-container">
              <div className="border-gradient project-item">
                <BsGear />
              </div>
              <div className="project-text">
                <span className="project-text-color">In Devlopment</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 project-item-container">
              <div className="border-gradient project-item">
                <BsGear />
              </div>
              <div className="project-text">
                <span className="project-text-color">In Devlopment</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 project-item-container">
              <div className="border-gradient project-item">
                <BsGear />
              </div>
              <div className="project-text">
                <span className="project-text-color">In Devlopment</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 project-item-container">
              <div className="border-gradient project-item">
                <BsGear />
              </div>
              <div className="project-text">
                <span className="project-text-color">In Devlopment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
