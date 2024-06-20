import {React, useRef, useEffect} from "react";
import "./Education.css";

const School = {
  degree: "Higher Secondary",
  institution: "Kendriya Vidyalaya Barrackpore (ARMY)",
  branch: "Computer Science",
  duration: "March 2022",
  bullets: [
    "Participated in many Sit-and-Drawing Competitions",
    "Ranked #1 in my school, in both 10th and 12th CBSE Board Examinations",
  ]
}
const College = {
  degree: "Bachelor of Technology",
  institution: "IIEST, Shibpur",
  branch: "Information Technology",
  duration: "2022-26",
  bullets: [
    "Joint 3rd in SCAGE Agomoni 2023",
    "Achieved 2nd rank in the Portfolio showdown contest",
    "Collaborated in building GCSJ website",
    "Collaborated in building website for CP-DSA bootcamp held by our college.",
    "Mentoring batchmates in the web development bootcamp held by our college.",
    "Actively collaborating in design and development of the website for CodeIIEST"
  ]
}

const Education = () => {
  
  return (
    <div className="edu-content">
      <div className="heading hiderx">EDUCATION</div>
      <div className="all-cards">
        <Educard data = {School} />
        <Educard data = {College} />
      </div>
    </div>
  );
};

export const Educard = ({data}) => {
  return (
    <div className="card-wrapper">
      <div className="card-header bullethide">
        <div className="headlines bullethide">
          <div className="degree bullethide">{data.degree}</div>
          <div className="institution bullethide">{data.institution}</div>
          <div className="byline-info bullethide">
            <div>{data.branch}</div>
            <div>{data.duration}</div>
          </div>
        </div>
      </div>
      <div className="bullets bullethide">
        <menu>
          {data.bullets.map((value, index)=>{
            return <li style = {{animationDelay: `${index*0.1}s`}} key = {index} className="bullethide">{value}</li>
          })}
        </menu>
      </div>
    </div>
  );
};

export default Education;
