import React from "react";
import "./Header.css";
import Brandicon from "../../../public/favicon.png";
import Resume from "../../assets/resume.svg";

const Header = () => {
  const openWeb = (link, newtab = false) => {
    window.open(link, newtab?"_blank":"_self");
  };

  return (
    <div className="component-header">
      <div onClick = {()=>openWeb("http://localhost:5173/")} className="brand">
        <img src={Brandicon} alt = "Brandicon" />
        <div className="brand-name">SOUMYAJIT.DEV</div>
      </div>
      <div className="resume" onClick = {()=>openWeb("https://drive.google.com/file/d/1_A-fNAbOyG1VIc5NEIOk46zmAoSj7uuM/view?usp=sharing", true)} >
        <img src={Resume} alt = "resume" />
        <div className="resume-label">MY RESUME</div>
      </div>
    </div>
  );
};

export default Header;
