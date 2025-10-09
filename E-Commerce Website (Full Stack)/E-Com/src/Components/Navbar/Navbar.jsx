import React, { useState } from "react";
import "./Navbar.css";

// The direct DOM manipulation has been removed.

function Navbar() {
  // 1. State to track the currently hovered item
  const [hoveredItem, setHoveredItem] = useState(null);

  // It's better to manage nav items as data
  const navLinks = ["About", "Services", "Portfolio", "Projects", "Contact"];

  const handleMouseOver = (itemName) => {
    setHoveredItem(itemName);
    console.log(`Hovering over: ${itemName}`);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div className="Nav">
        <a href="/" className="home">
          <b>ICONEX</b>
          <i className="fa-solid fa-code"></i>
        </a>
        {/* 3. Add onMouseLeave to the container to reset the hover state */}
        <div className="nav-items" onMouseLeave={handleMouseLeave}>
          {/* Use map to create the links, making it easier to manage */}
          {navLinks.map((link) => (
            <a
              href="/"
              key={link}
              // 2. Set the hovered item when the mouse is over this specific link
              onMouseOver={() => handleMouseOver(link)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="nav-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61555711623770"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://x.com/MuhammadF920736"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://github.com/bjcreators336"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>{" "}
          </a>
          <a
            href="https://www.instagram.com/bj.creators/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadf336"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-linkedin"></i>
          </a>{" "}
        </div>
      </div>
      {/* 4. (Optional) Display the currently hovered item */}
      <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
        {hoveredItem
          ? `You are hovering over: ${hoveredItem}`
          : "Hover over a navigation link"}
      </div>
    </>
  );
}

export default Navbar;
