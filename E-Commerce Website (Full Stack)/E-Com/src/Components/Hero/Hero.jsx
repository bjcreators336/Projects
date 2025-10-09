import React from "react";
import "./Hero.css";
import heroImage from "../../assets/Resume.Pic.2-removebg-preview.png";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-image-O">
          <div
            className="hero-image-I"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          <div className="container-blueprints">
            <div className="blueprint-item">
              <h2>1.5+</h2> Years of Experience
            </div>
            <div className="blueprint-item">
              <h2>MERN</h2> Stack Developer
            </div>
            <div className="blueprint-item">
              <h2>5+</h2> Projects Completed
            </div>
          </div>
          <div className="hero-content-main">
            <h1 className="hero-content-title ">
              Make <span className="hero-content-title-span">Designs</span> That
              Vibrate, Inspire & Connect
            </h1>
            <p className="hero-content-para">
              Hi! I'm Faizan Asif, with more than 1.5 years of experience, I'm
              ready to be a part of your wonderful project. Let's connect!
            </p>
            <div className="hero-content-btns">
              <button className="hire-me-btn">
                <i className="fa-solid fa-caret-left"></i>Hire Me!
                <i className="fa-solid fa-caret-right"></i>
              </button>
              <button className="view-portfolio-btn">
                <i className="fa-solid fa-caret-left"></i>View Portfolio
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-line"></div>
    </>
  );
}

export default Hero;
