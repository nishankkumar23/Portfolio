import React from "react";
import "./Experience.css";
import { Educard } from "../Education/Education";


const Experience = () => {
    return (
        <div
            id="#3"
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
                <Educard
                    data={{
                        degree: "Runner-up, SIH IIITA Hackathon 2024",
                        branch: "Collaborated with a team to design and implement innovative solutions",
                        duration: "2024",
                        bullets: [
                            "Developed field validation API in Java Spring with Swagger UI & Bruno testing, enabling real-time validation.",
                            "Created SQL tables in Aurora-MySQL & H2, added CRUD APIs, and built editable frontend grid synced to APIs.",
                        ],
                    }}
                />
                <Educard
                    data={{
                        degree: "Viyogi Enterprises – Remote Sensing Division",
                        branch: "Software Engineer Intern · Udyog Vihar, Gurgaon",
                        duration: "Jun 2025 – Jul 2025",
                        bullets: [
                            "Worked as Software Engineer Intern in the Remote Sensing Division.",
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
