import React from "react";
import "../css/projectscomponent.css";

function ProjectsComponent() {
  return (
    <div id="projects" className="projects container">
      <div className="section-header">
        <h3>Projects</h3>
        <div class="container">
          <div class="row gx-5 mt-2">
            <div class="col">
              <div className="border-gradient project-item">
              </div>
              <div className="project-text">
                <span className="project-text-color">Project One</span>
              </div>
            </div>
            <div class="col">
              <div className="border-gradient project-item">
              </div>
              <div className="project-text">
                <span className="project-text-color">Project Two</span>
              </div>
            </div>
            <div class="col">
              <div className="border-gradient project-item">
              </div>
              <div className="project-text">
                <span className="project-text-color">Project Three</span>
              </div>
            </div>
          </div>
          <div class="row gx-5 mt-2">
            <div class="col">
              <div className="border-gradient project-item">
              </div>
              <div className="project-text">
                <span className="project-text-color">Project Four</span>
              </div>
            </div>
            <div class="col">
              <div className="border-gradient project-item">
              </div>
              <div className="project-text">
                <span className="project-text-color">Project Five</span>
              </div>
            </div>
            <div class="col">
              <div className="border-gradient project-item">
              </div>
              <div className="project-text">
                <span className="project-text-color">Project Six</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
