import { React, useRef, useEffect } from "react";
import "./Education.css";

const School = {
    degree: "High School / Secondary Certificate Program",
    institution: "Ketan Convent School, Aligarh",
    branch: "Science",
    duration: "Mar 2021 - Mar 2023",
    bullets: [
        "Grade: X: 94% | XII: 78%",
    ],
};
const College = {
    degree: "Bachelor's degree",
    institution: "Indian Institute of Information Technology, Agartala",
    branch: "Computer Science",
    duration: "2023 - 2027",
    bullets: [
        "Member, Coding Club (Competitive Programming & Hackathons)",
        "Participant, College Technical Fest & Hackathons",
        "Member, Sports Committee – State-level Taekwondo Gold Medalist",
    ],
};

const Education = () => {
    return (
        <div id="#1" className="edu-content">
            <div className="head-wideline">
                <div className="heading hiderx">Education</div>
                <div className="wideline right-to-left"></div>
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
            <div className="card-header right-to-left">
                <div className="headlines right-to-left">
                    <div className="degree right-to-left">{data.degree}</div>
                    <div className="institution right-to-left">{data.institution}</div>
                    {data.projects ? (
                        data.projects.map((p) => {
                            return (
                                <div className="byline-info right-to-left">
                                    <div>{p.project}</div>
                                    <div>{p.duration}</div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="byline-info right-to-left">
                            <div>{data.branch}</div>
                            <div>{data.duration}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="bullets right-to-left">
                <menu>
                    {data.bullets?.map((value, index) => {
                        return (
                            <li style={{ animationDelay: `${index * 0.1}s` }} key={index} className="right-to-left">
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
