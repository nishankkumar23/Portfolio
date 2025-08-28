import React from "react";
import "./Experience.css";
import { Educard } from "../Education/Education";


const Experience = () => {
    return (
        <div
            className="content"
            style={{
                padding: "3rem 0",
            }}
        >
            <div className="head-wideline">
                <div className="heading hiderx">Experience</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="exp-data">
                {/* <Expcard data={CodeIIEST} />
                <Expcard data={GDSC} /> */}
                <Educard
                    data={{
                        degree: "CodeIIEST x GDG IIEST",
                        projects: [
                            {
                                project: "Webgame Challenge",
                                duration: "Nov 2024",
                            },
                            {
                                project: "Winter of opensource",
                                duration: "Dec 2024",
                            },
                            {
                                project: "CodeIIEST website",
                                duration: "Feb 2024",
                            },
                        ],
                        bullets: [
                            "Core member of CodeIIEST and development lead of GDG IIEST.",
                            "Organiser and Judging panel for Webgame Challenge and Winter of Opensource.",
                            "Collaborated and supervised the design and development of the official website of CodeIIEST- the coding club of IIEST Shibpur.",
                        ],
                    }}
                />
                <Educard
                    data={{
                        degree: "Rebeca",
                        projects: [
                            {
                                project: "Main site (Design + dev)",
                                duration: "Mar 2024",
                            },
                            {
                                project: "Admin panel (Dev)",
                                duration: "Feb 2025",
                            },
                        ],
                        bullets: [
                            "Designed and developed the website of Rebeca- the annual cultural fest of IIEST Shibpur.",
                            "Contributed to both frontend and backend code, along with developing an admin panel for organisers to handle data regarding their events."
                        ],
                    }}
                />
                <Educard
                    data={{
                        degree: "Instruo",
                        projects: [
                            {
                                project: "Main site (Design + dev)",
                                duration: "Dec 2024",
                            },
                        ],
                        bullets: [
                            "Organiser and Judging panel for Hacknovare- an inter-college hackathon.",
                            "Speaheaded the design and development of Instruo's official website.",
                        ],
                    }}
                />
            </div>
        </div>
    );
};

const Expcard = ({ data }) => {
    const openWeb = () => {
        window.open(data.companyWeb, "_blank");
    };
    return (
        <div className="exp-wrapper hiderx">
            <div className="company">
                <div className="company-icon left-to-right">
                    <img src={data.logo} alt="company-logo" />
                </div>
                <div onClick={openWeb} className="company-name left-to-right">
                    {data.company}
                </div>
                <div className="duration left-to-right">{data.duration}</div>
            </div>
            <div className="exp-text">
                <div className="exp-headlines">{data.role}</div>
                <div className="description right-to-left">{data.description}</div>
                <div className="techstack">
                    {data.tech.map((value, index) => {
                        return (
                            <div className="tech right-to-left" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                                {value}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;
