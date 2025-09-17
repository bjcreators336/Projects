import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="Nav">
        <a href="/" className="home">
          <b>ICONEX</b>
          <i className="fa-solid fa-code"></i>
        </a>
        <div className="nav-items">
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Portfolio</a>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </div>
        <div className="nav-icons">
          <a href="/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-square-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
