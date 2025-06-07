import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectBanner from "./ProjectBanner/ProjectBanner";

const ProjectData = [
    {
        name: "CoinPROBE",
        byline: "React cryptocurrency tracking app, to track key stats about top 100 Cryptocoins. Used Coingecko API for data.",
        github: "https://github.com/Soumyajit0803/CoinPROBE",
        link: "https://coinprobe.vercel.app/",
        tags: ["React JS", "Chart JS", "axios"],
    },
    {
        name: "CodeIIEST",
        byline: "Website for CodeIIEST- the official coding club of IIEST Shibpur. Contains details about the club as well as present members, cp leaderboards, event details etc.",
        github: "https://github.com/dsc-iiest/codeiiest-gdsc",
        link: "https://www.codeiiest.in/",
        tags: ["React JS", "MUI"],
    },
    {
        name: "Rebeca",
        byline: "Website for REBECA- the annual cultural fest of IIEST, Shibpur. Contains event as well as artists information, along with a list of all current event coordinators. Also made a full stack admin panel for managing event details.",
        github: "https://github.com/Soumyajit0803/rebeca-v2",
        link: "https://rebeca.in/",
        tags: ["React JS", "MUI", "Node JS", "Express", "Mongoose", "Ant design", "JWT"],
    },
    {
        name: "Instruo",
        byline: "Website for Instruo- annual techno-management fest of IIEST, Shibpur. Contains event details and member information.",
        github: "https://github.com/Abhijit004/InstruoMain2k24",
        link: "https://instruo2k25.vercel.app/",
        tags: ["React JS", "MUI", "Ant design"],
    },
    {
        name: "GCSJ",
        byline: "Website for necessary information about Google Cloud Study Jams, DSC IIEST chapter. Maintained the leaderboard throughout Sept '23 - Oct '23.",
        github: "https://github.com/dsc-iiest/gcsj-website",
        link: "https://gcsj-iiests.vercel.app/",
        tags: ["React JS", "MUI"],
    },
];

const Projects = () => {
    return (
        <div className="content">
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
