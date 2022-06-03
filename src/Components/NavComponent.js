import React from "react";
import "../css/navcomponent.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";

function NavComponent() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top nav-menu">
        <div class="container-fluid">
          <Link
            className="nav-logo navbar-brand"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            CM
          </Link>

          {/* Start of Navbar Toggler*/}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse bg-dark d-flex justify-content-end align-items-center" id="navbarMenu">
            <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center">
                <Link
                  className="active nav-link-gradient"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
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
                  offset={50}
                  duration={500}
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
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a
                  className="nav-link social-icon"
                  href="https://github.com/codymarshall94"
                >
                  <AiFillGithub color="#3FBC9D" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link social-icon">
                  <AiFillLinkedin color="#ECE2BF" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
