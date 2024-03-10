import React from "react";
import "./Contact.css";
import Linkedin from "../../assets/tech-stack/linkedin.svg";
import Gmail from "../../assets/tech-stack/gmail.svg";
import Github from "../../assets/tech-stack/github.svg";

const Contact = () => {
  const openWeb = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div id="contact" className="contact-wrap hiderx">
      <div className="say-hello">SAY HELLO !</div>
      <div className="contact-body">
        Did I miss anything?
        <br />
        Want to include me in your amazing project?
        <br />
        <br />
        Let's connect and explore the boundless productivity we can achieve together!
      </div>
      <div className="contact-list">
        <div
          onClick={() => openWeb("https://www.linkedin.com/in/soumyajit-karmakar-68362526b/")}
          className="contact-icon bullethide"
        >
          <img src={Linkedin} alt="linkedin" />
        </div>

        <div onClick={() => openWeb("mailto:sona832004@gmail.com")} className="contact-icon bullethide">
          <img src={Gmail} alt="gmail" />
        </div>
        
        <div onClick={() => openWeb("https://github.com/Soumyajit0803")} className="contact-icon bullethide">
          <img src={Github} alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
