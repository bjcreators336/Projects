import "./Portfolio.css";
import code from "../../assets/c.jpg";
import coins from "../../assets/e.jpg";
import rps from "../../assets/j.jpg";
import amazon from "../../assets/i.jpg";
const btn = (
  <a
    href="https://github.com/bjcreators336/Projects"
    target="_blank"
    rel="noopener noreferrer"
    // Call the new function and pass the event (e) and the URL
    onClick={(e) =>
      openInNewTabWorkaround(e, "https://github.com/bjcreators336/Projects")
    }
  >
    <button className="btn">
      GITHUB<i className="fa-brands fa-github"></i>
    </button>
  </a>
);
function Portfolio() {
  return (
    <>
      <div className="projects-main-div">
        <div className="projects-headings">
          <p className="projects-main-text">My Foundational Projects</p>{" "}
          <p className="projects-main-text2">
            <i> "Showcasing core logic and Problem Solving Skills". </i>
          </p>
          <div className="projects-main-text3">
            {" "}
            font-family :<span className="a1">"Roboto"</span>, sans-serif; font-size :{" "}
            <span className="a1">300 </span>, letter-Spacing{" "}
            <span className="a1">: 1px</span>;{" "}
          </div>
        </div>
        <div className="projects-display-main">
          {/* PROJECT 1: Centered Text Applied */}
          <div className="projects-display project1">
            <div className="centered-project-text">
              <p className="a">Test.Io</p>
              <p className="b">
                A Fully functional Text manipulating web application
              </p>
            </div>
            <div className="front-face">
              <img className="code-img" src={code} alt="" />
            </div>
            <div className="back-face">
              <p className="more-details">More details here.</p>
              <div className="main-btns">
                <a
                  href="https://bjcreators336.github.io/Deployment/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Call the new function and pass the event (e) and the URL
                  onClick={(e) =>
                    openInNewTabWorkaround(
                      e,
                      "https://bjcreators336.github.io/Deployment/#"
                    )
                  }
                >
                  <button className="live-btn">
                    Live Preview<i className="fa-solid fa-angles-right"></i>
                  </button>
                </a>
                <div className="btn">{btn}</div>
              </div>
            </div>
          </div>

          {/* PROJECT 2: Centered Text Applied */}
          <div className="projects-display project1">
            <div className="centered-project-text">
              <p className="a">BJc-Converter</p>
              <p className="b">
                A Real-time Currency Converter with live API support
              </p>
            </div>
            <div className="front-face">
              <img className="code-img" src={coins} alt="" />
            </div>
            <div className="back-face">
              <p className="more-details">More details here.</p>
              <div className="main-btns">
                <a
                  href="https://bjc-converter.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Call the new function and pass the event (e) and the URL
                  onClick={(e) =>
                    openInNewTabWorkaround(
                      e,
                      "https://bjc-converter.netlify.app/"
                    )
                  }
                >
                  <button className="live-btn">
                    Live Preview<i className="fa-solid fa-angles-right"></i>
                  </button>
                </a>
                <div className="btn">{btn}</div>
              </div>
            </div>
          </div>

          {/* PROJECT 3: Centered Text Applied */}
          <div className="projects-display project1">
            <div className="centered-project-text">
              <p className="a">Rock Paper Scissors</p>
              <p className="b">
                A simple yet engaging Rock Paper Scissors game
              </p>
            </div>
            <div className="front-face img3m">
              <img className="code-img img3" src={rps} alt="" />
            </div>
            <div className="back-face">
              <p className="more-details">More details here.</p>
              <div className="main-btns">
                <a
                  href="http://rps-game-v3.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Call the new function and pass the event (e) and the URL
                  onClick={(e) =>
                    openInNewTabWorkaround(e, "http://rps-game-v3.netlify.app/")
                  }
                >
                  <button className="live-btn">
                    Live Preview<i className="fa-solid fa-angles-right"></i>
                  </button>
                </a>
                <div className="btn">{btn}</div>
              </div>
            </div>
          </div>

          {/* PROJECT 4: Centered Text Applied */}
          <div className="projects-display project1">
            <div className="centered-project-text">
              <p className="a a0">
                <span className="e">amazon</span> <span className="c">.CLONE</span>{" "}
              </p>
              <p className="d">My First Project</p>
              <p className="b">
                Basic Layout of Amazon.com made with pure HTML and CSS
              </p>
            </div>
            <div className="front-face">
              <img className="code-img " src={amazon} alt="" />
            </div>
            <div className="back-face">
              <p className="more-details">More details here.</p>
              <div className="main-btns">
                <a
                  href="https://bjc-amazon.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Call the new function and pass the event (e) and the URL
                  onClick={(e) =>
                    openInNewTabWorkaround(e, "https://bjc-amazon.netlify.app/")
                  }
                >
                  <button className="live-btn">
                    Live Preview<i className="fa-solid fa-angles-right"></i>
                  </button>
                </a>
                <div className="btn">{btn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-line"></div>
    </>
  );
}

export default Portfolio;
