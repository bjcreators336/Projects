import React from "react";
import "./Footer.css";
//

function copy() {
  return (
    <>
      <div className="copy-main">
        <div className="footer-logo">
          {" "}
          <a href="/" className="home-main">
            <b>ICONEX</b>
            <i className="fa-solid fa-code"></i>
          </a>
        </div>
        <div className="copy-right">
          <p>
            Copyright © 2024 <strong>BJ.Creators & Developers</strong> <br />{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default copy;
