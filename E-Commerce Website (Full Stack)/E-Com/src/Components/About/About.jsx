import React from "react";
import "./About.css";
import PGC from "../../assets/PGC-logo.png";
import VU from "../../assets/VU.png";
import BQ from "../../assets/logo.png";
import SkillSet from "../../assets/SkillSet.png";
import { TypeAnimation } from "react-type-animation";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const sentences = [
  "Hello!",
  "My name is Hafiz Muhammad Faizan,",
  "I'm a passionate MERN Stack Developer with a strong focus on creating dynamic and responsive web applications.",
  "I love bringing ideas to life through code and constantly strive to learn and implement the latest technologies.",
  "With a solid foundation in MongoDB, Express.js, React, and Node.js, I'm adept at building scalable and efficient full-stack solutions.",
  "My expertise includes designing intuitive user interfaces, developing robust backend APIs, and managing databases.",
  "I'm always excited to take on new challenges and contribute to innovative projects.",
];

const sequence = [];
let currentString = "";
for (let i = 0; i < sentences.length; i++) {
  currentString = currentString + (i > 0 ? " " : "") + sentences[i];
  sequence.push(currentString);
  sequence.push(1000);
}

const About = () => {
  return (
    <div className="About">
      <div className="about-name-profession">
        <h1 className="about-main-name">Hafiz Muhammad Faizan</h1>
        <h4 className="about-main-profession">MERN Stack Developer</h4>
      </div>
      <div className="Who-Am-I">
        <div className="h1">
          <a className="Who-Am-I-link" href="">
            {" "}
            <p className="Who-Am-I-text">Who Am I</p>
          </a>
        </div>
        <a href="" className="question-mark">
          {""}?
        </a>
        <div className="My-Discription">
          <div className="My-Discription-div">
            <TypeAnimation
              sequence={sequence}
              wrapper="p"
              speed={50}
              className="My-Discription-text"
            />
          </div>
        </div>
      </div>
      <div className="Qualification-heading">
        <a className="Qualification-link" href="">
          {" "}
          <i className="fa-solid fa-user-graduate Qualification-icon"></i>
          <div className="Qualification-text">QUALIFICATION</div>
        </a>
      </div>
      <div className="Qualification-description">
        <a href="https://pgc.edu/" target="_blank" rel="noopener noreferrer">
          <div className="Qualification-discription-section">
            <img src={PGC} alt="PGC Logo" className="pgc-logo" />
            <div className="PGC-section">
              <h2>Intermediate Education</h2>
              <h3>Fsc.Pre-Engineering </h3>
              <h4>Completed in July 2025</h4>
            </div>
          </div>
        </a>
        <a
          href="https://www.vu.edu.pk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="Qualification-discription-section">
            {" "}
            <img src={VU} alt="VU Logo" className="vu-logo" />
            <div className="VU-section">
              <h2 className="QH">Virtual University of Pakistan</h2>
              <h3 className="QH">Bachlors in Computer Science</h3>
              <h4 className="QH"> Currently Enrolled</h4>
            </div>
          </div>
        </a>
        <a
          href="https://banoqabil.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="Qualification-discription-section">
            {" "}
            <img src={BQ} alt="BQ Logo" className="bq-logo" />
            <div className="BQ-section">
              <h2 className="QH">MERN Stack Bootcamp</h2>
              <h4 className="QH">Currnetly Enrolled</h4>
            </div>
          </div>
        </a>
      </div>
      <div className="SkillSet">
        <div className="SkillSet-heading">
          <a className="SkillSet-link" href="">
            <img src={SkillSet} alt="SkillSet Logo" className="SkillSet-logo" />
            <div className="SkillSet-text">SKILL SET</div>
          </a>
        </div>
        <div className="Skill-item-g1">
          <div className="SkillSet-buttons">
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noopener noreferrer"
              className="SkillSet-item"
              id="html"
            >
              <i className="fa-brands fa-html5 icons html"></i>
              HTML
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noopener noreferrer"
              className="SkillSet-item "
              id="css"
            >
              <i className="fa-brands fa-css3 icons css"></i> CSS
            </a>
            <a
              href="https://www.w3schools.com/js/"
              target="_blank"
              rel="noopener noreferrer"
              className="SkillSet-item "
              id="js"
            >
              <i className="fa-brands fa-js icons js"></i> JS
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="SkillSet-item"
              id="react"
            >
              <i className="fa-brands fa-react icons react"></i>
              React
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="SkillSet-item bootstrap"
              id="bootstrap"
            >
              <i className="fa-brands fa-bootstrap icons bootstrap"></i>
              <p className="Bootstrap-text">Bootstrap</p>
            </a>
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="SkillSet-item"
              id="nodeJs"
            >
              <i className="fa-brands fa-node-js icons nodeJs"></i> Node.js
            </a>
          </div>
          <div className="Skill-item-g2">
            <div className="SkillSet-buttons">
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item "
                id="express"
              >
                EXPRESS
                <i className="fa-brands fa-node-js icons express"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="github"
              >
                <i className="fa-brands fa-github icons github"></i>
                <p className="Github-text">GITHUB</p>
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="mongodb"
              >
                <BiLogoMongodb className="icons mongodb" />
                MongoDB
              </a>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="git"
              >
                <i className="fa-brands fa-git-alt icons git"></i> GIT
              </a>
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item "
                id="figma"
              >
                <i className="fa-brands fa-figma icons figma"></i> Figma
              </a>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="python"
              >
                <i className="fa-brands fa-python icons python"></i> Python
              </a>
            </div>
          </div>
          <div className="Skill-item-g3">
            <div className="SkillSet-buttons">
              <a
                href="https://helpx.adobe.com/photoshop/user-guide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="photoshop"
              >
                <SiAdobephotoshop className="icons photoshop" /> Photoshop
              </a>
              <a
                href="https://helpx.adobe.com/illustrator/user-guide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="illustrator"
              >
                <SiAdobeillustrator className="icons illustrator" />
                Illustrator
              </a>
              <a
                href="https://www.canva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="canva"
              >
                <SiCanva className="icons canva" /> Canva
              </a>
              <a
                href="https://www.adobe.com/creativecloud.html"
                target="_blank"
                rel="noopener noreferrer"
                className="SkillSet-item"
                id="creativeCloud"
              >
                <SiAdobecreativecloud className="icons creativeCloud" />{" "}
                Creative Cloud
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
