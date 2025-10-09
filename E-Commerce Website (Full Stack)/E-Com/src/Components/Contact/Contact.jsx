import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";
import "./Contact.css";

const emailAddress = "muhammad.f336s@gmail.com";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");
    try {
      const response = await fetch("http://localhost:3000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!name || !email || !message) {
        setStatusMessage("Please fill in all fields.");
        return;
      }
      if (response.ok) {
        setStatusMessage("Message sent successfully! Thank you");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      setStatusMessage(
        "An error occurred while sending the message, Please Try Again Later"
      );
    }
    setTimeout(() => setStatusMessage(""), 3000);
  };

  return (
    <>
      <div className="contact-main-back">
        <div className="contact-main-div1">
          <p className="contact-main-h">Let's Start your Project</p>
          <p className="contact-main-p">
            Got project in mind? Let's connect and discuss your next idea!
          </p>
          <div className="contact-main-div2">
            <div className="input-main">
              <input
                className="inputs"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <input
                className="inputs"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <input
                className="inputs"
                type="text"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />{" "}
              <button className="send-btn" onClick={handleSubmit}>
                Send Message
              </button>
              <div className="message">{statusMessage}</div>
            </div>
            <div className="blocks">
              <p className="block-h">Connect Me Directly!</p>
              <div className="block block-location">
                <GoLocation className="contact-icon location" />
                <strong>Location:</strong>
                {"\u00A0"}Lahore, Punjab, Pakistan
              </div>
              <div className="block block-email">
                <TfiEmail className="contact-icon email" />
                <strong>{"\u00A0"}Email:</strong>
                {"\u00A0"}

                <a
                  className="email-link"
                  href={`mailto:${emailAddress}`}
                  target="_blank" // Optional: Opens the email client in a new context (often ignored by mailto)
                  rel="noopener noreferrer" // Good practice for security when using target="_blank"
                >
                  {emailAddress}
                </a>
              </div>
              <div className="block block-media">
                <div className="block-elements">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
