import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Christopher Panelli</h1>
      <nav>
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
    </header>
  );
}

export default Header;
