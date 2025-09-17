import React from "react";
import "./Hero.css";
import heroImage from "../../assets/Resume.Pic.2-removebg-preview.png";

function Hero() {
  return (
    // <div>
    //   <h1>Welcome to Our E-Commerce Store</h1>
    //   <p>Shop the latest products at unbeatable prices!</p>
    // </div>
    <>
      <div className="hero-container">
        <div className="hero-image-O">
          <div
            className="hero-image-I"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
