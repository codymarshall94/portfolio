import React from "react";
import "../css/navcomponent.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";

function NavComponent() {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link
            className="nav-logo navbar-brand"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            CM
          </Link>

          {/* Start of Navbar Toggler*/}

          <button
            id="toggle-btn"
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="active nav-link-gradient"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarMenu"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="active nav-link-gradient"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarMenu"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link
                  className="active nav-link-gradient"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarMenu"
                >
                  Contact
                </Link>
              </li>
              <div className="d-flex">
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="nav-link social-icon"
                    href="https://github.com/codymarshall94"
                  >
                    <AiFillGithub color="#3FBC9D" />
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="nav-link social-icon"
                    href="https://www.linkedin.com/in/cody-marshall-8aa8b315a/"
                  >
                    <AiFillLinkedin color="#ECE2BF" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
