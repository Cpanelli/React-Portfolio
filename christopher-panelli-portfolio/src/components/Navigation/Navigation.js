import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
