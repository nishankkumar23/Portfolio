import React, { useState, useEffect } from 'react'
import "./Homepage.css"

const Homepage = () => {
  const openWeb = () => {
    window.open("https://github.com/Soumyajit0803", "_blank");
  };
  return (
    <div className="page-wrap">
      <div className="content">
        <div className="salutation">
          Hi, I'm
        </div>
        <div className="name">Soumyajit</div>
        <div className="hobby">
          I am a
          <Dynamic />
        </div>
        <div className="about">Crafting elegant digital realms by day,<br /> grinding algorithms by night</div>
        <div className="btn-group">
          <a onClick = {openWeb} style={{textDecoration: "none", color: "inherit"}}>GITHUB</a>
          <a style={{textDecoration: "none"}} href = "#contact">CONTACT</a>
        </div>
      </div>
    </div>
  )
}

const Dynamic = () => {
  const [holder, setHolder] = useState(0);
  const [index, setIndex] = useState(0);
  let values = ["UI/UX Designer", "Web developer", "CP enthusiast", "Skillful artist"];
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < values[holder].length) {
        setTypedText(prevTypedText => prevTypedText + values[holder][index]);
        
        setIndex(index+1);
        
      }
      else {
        clearInterval(interval);
        setTimeout(() => {
          setTypedText("");
          setIndex(0);
          setHolder(holder => (holder + 1) % values.length);
        }, 2000); // Delay before starting typing the next string
      }
    }, 100); // Typing speed (adjust as needed)
    return () => clearInterval(interval);
  }, [holder, values]);

  return <div className="dynamic">{typedText}</div>;
};


export default Homepage;