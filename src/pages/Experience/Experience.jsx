import React from "react";
import "./Experience.css";

const CodeIIEST = {
  company: "CodeIIEST",
  companyWeb: "https://codeiiest.github.io/",
  logo: "public/assets/codeiiest.png",
  duration: "Feb 2024 - Present",
  role :"Web developer",
  description: "Currently contributing towards designing and developing of the CodeIEIST official website page.",
  tech: ["React", "Figma", "Vite"]
}
const GDSC = {
  company: "DSC IIEST",
  companyWeb: "https://gdsc.community.dev/indian-institute-of-engineering-science-and-technology-shibpur-howrah/",
  logo: "public/assets/gdsc.png",
  duration: "Sept 2023 - Oct 2023",
  role :"Web developer",
  description: "Collaborated in the design and development of the Google Cloud Study Jams chapter of DSC IIEST group.",
  tech: ["React", "MUI", "Figma"]
}

const Experience = () => {
  // console.log(CodeIIEST);
  return (
    <div className="exp-content">
      <div className="heading hiderx">EXPERIENCE</div>
      <div className="exp-data">
        <Expcard data = {CodeIIEST} />
        <Expcard data = {GDSC} />
      </div>
    </div>
  );
};

const Expcard = ({data}) => {

  const openWeb = () => {
    window.open(data.companyWeb, "_blank");
  };
  return (
    <div className="exp-wrapper hiderx">
      <div className="company">
        <img className="company-icon descend-hide" src = {data.logo} alt = "company-logo" />
        <div onClick = {openWeb} className="company-name descend-hide">{data.company}</div>
        <div className="duration descend-hide">{data.duration}</div>
      </div>
      <div className="exp-text">
        <div className="exp-headlines">
          {data.role}
        </div>
        <div className="description bullethide">
          {data.description}
        </div>
        <div className="techstack">
          {data.tech.map((value, index)=>{
            return (
              <div 
                className="tech bullethide" 
                key = {index} 
                style = {{animationDelay: `${index*0.05}s`}}
                >{value}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
