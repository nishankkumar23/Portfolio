import {React, useState, useEffect} from "react";
import "./Header.css";
import Brandicon from "/assets/favicon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";


const Loader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  // Calculate loader size based on scroll position
  const loaderSize = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;;

  return (
      <div className = "page-scrolled" style = {{width: `${loaderSize}%`}} />
  );
};


const Header = () => {
  const openWeb = (link, newtab = false) => {
    window.open(link, newtab?"_blank":"_self");
  };

  return (
    <div className="component-header">
      <Loader />
      <div onClick = {()=>openWeb("https://soumyajit-dev.vercel.app/")} className="brand">
        <img src={Brandicon} alt = "Brandicon" />
        <div className="brand-name">SOUMYAJIT.DEV</div>
      </div>
      <div className="resume" onClick = {()=>openWeb("https://drive.google.com/file/d/10tRSrvS2gWFM98FE_cTBo9b0NNcRh52X/view?usp=sharing", true)} >
        <FontAwesomeIcon className="fa-icon" icon = {faAddressBook} size="2x" />
        <div className="resume-label">MY RESUME</div>
      </div>
    </div>
  );
};

export default Header;
