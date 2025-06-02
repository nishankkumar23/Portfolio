import { React, useRef, useEffect } from "react";
import "./Education.css";

const School = {
    degree: "Higher Secondary",
    institution: "Kendriya Vidyalaya Barrackpore (ARMY)",
    branch: "Computer Science",
    duration: "March 2022",
    bullets: [
        "Participated in many Sit-and-Drawing Competitions",
        "Ranked #1 in my school, in both 10th and 12th CBSE Board Examinations",
    ],
};
const College = {
    degree: "Bachelor of Technology",
    institution: "IIEST, Shibpur",
    branch: "Information Technology",
    duration: "2022-26",
    bullets: [
        "Participated in many drawing, coding and design contests.",
        "Actively led the building of various college websites related to clubs, department and events.",
        "Collaborated in building website for CP-DSA bootcamp held by our college.",
        "Mentoring batchmates in the web development bootcamp held by our college.",
        "Actively collaborating in design and development of the website for CodeIIEST",
    ],
};

const Education = () => {
    return (
        <div className="edu-content">
            <div className="head-wideline">
                <div className="heading hiderx">Education</div>
                <div className="wideline bullethide"></div>
            </div>
            <div className="all-cards">
                <Educard data={School} />
                <Educard data={College} />
            </div>
        </div>
    );
};

export const Educard = ({ data }) => {
    return (
        <div className="card-wrapper">
            <div className="card-header bullethide">
                <div className="headlines bullethide">
                    <div className="degree bullethide">{data.degree}</div>
                    <div className="institution bullethide">{data.institution}</div>
                    {data.projects ? (
                        data.projects.map((p) => {
                            return (
                                <div className="byline-info bullethide">
                                    <div>{p.project}</div>
                                    <div>{p.duration}</div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="byline-info bullethide">
                            <div>{data.branch}</div>
                            <div>{data.duration}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="bullets bullethide">
                <menu>
                    {data.bullets?.map((value, index) => {
                        return (
                            <li style={{ animationDelay: `${index * 0.1}s` }} key={index} className="bullethide">
                                {value}
                            </li>
                        );
                    })}
                </menu>
                
            </div>
        </div>
    );
};

export default Education;
