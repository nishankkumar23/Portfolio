import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectBanner from "./ProjectBanner/ProjectBanner";

const ProjectData = [
    {
        name: "CoinPROBE",
        byline: "React cryptocurrency tracking app, to track key stats about top 100 Cryptocoins. Used Coingecko API for data.",
        github: "https://github.com/nishankkumar23/CoinPROBE",
        link: "https://coin-probo-cryptocurrency-tracker.vercel.app/",
        tags: ["React JS", "Chart JS", "axios"],
    },
];

const Projects = () => {
    return (
        <div id="#4" className="content">
            <div className="head-wideline">
                <div className="heading hiderx">Projects</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="proj-display">
                {/* <ProjectBanner projectStats={CoinPROBE} flip={0} />
                <ProjectBanner projectStats={GCSJ} flip={1} />
                <ProjectBanner projectStats={Tictactoe} flip={0} />
                <ProjectBanner projectStats={Calculator} flip={1} /> */}
                {ProjectData.map((project, idx) => (
                    <ProjectBanner projectStats={project} flip={idx & 1} />
                ))}
            </div>
        </div>
    );
};

const Projectcard = ({ data, animationStyle }) => {
    const openWeb = (link) => {
        window.open(link, "_blank");
    };
    return (
        <div className={`proj-card ${animationStyle}`}>
            <div onClick={() => openWeb(data.link)} className="view">
                <img src={`./assets/${data.demo}.png`} alt={data.demo} />
            </div>
            <div className="proj-name">
                <div className={animationStyle}>{data.name}</div>
            </div>
            <div className="proj-duration">
                <div className={animationStyle}>{data.byline}</div>
                <div onClick={() => openWeb(data.github)} className={"github " + animationStyle}>
                    <FontAwesomeIcon icon={faGithub} />
                    <div className="label">Github</div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
