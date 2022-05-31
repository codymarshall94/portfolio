import React from "react";
import "../css/navcomponent.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";

function NavComponent() {
  return (
    <ul className="nav d-flex justify-content-end align-items-center nav-menu">
      <li>
      <Link
          className="nav-logo"
          activeClass="nav-logo"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          CM
        </Link>
      </li>
      <li className="nav-item">
      <Link
          className="nav-link nav-link-gradient active"
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
      <li className="nav-item">
        <a className="nav-link nav-link-gradient" href="#">
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-gradient">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link social-icon">
          <AiFillGithub color="#3FBC9D" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link social-icon">
          <AiFillLinkedin color="#ECE2BF" />
        </a>
      </li>
    </ul>
  );
}

export default NavComponent;
