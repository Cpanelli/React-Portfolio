import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="/path/to/resume.pdf" download>
        Download Resume
      </a>
      <h3>Proficiencies:</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>... (add more as needed)</li>
      </ul>
    </section>
  );
}

export default Resume;
