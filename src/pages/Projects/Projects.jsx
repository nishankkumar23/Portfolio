import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectBanner from "./ProjectBanner/ProjectBanner";

const CoinPROBE = {
    name: "CoinPROBE",
    demo: "coinprobe",
    byline: "React cryptocurrency tracking app, to track key stats about top 100 Cryptocoins. Used Coingecko API for data.",
    github: "https://github.com/Soumyajit0803/CoinPROBE",
    link: "https://coinprobe.vercel.app/",
};
const GCSJ = {
    name: "GCSJ IIEST",
    demo: "gcsj",
    byline: "Website for necessary information about Google Cloud Study Jams, DSC IIEST chapter. Maintained the leaderboard throughout Sept '23 - Oct '23.",
    github: "https://github.com/dsc-iiest/gcsj-website",
    link: "https://gcsj-iiests.vercel.app/",
};
const Tictactoe = {
    name: "Tic-tac-toe",
    demo: "tic-tac-toe",
    byline: "A fun two-player tic-tac-toe game that also tracks player scores throughout multiple attempts. Made in React, taking help from React doc's tutorial.",
    github: "https://github.com/Soumyajit0803/tic-tac-toe",
    link: "https://soumyajit0803.github.io/tic-tac-toe/",
};
const Calculator = {
    name: "Calculator",
    demo: "calculator",
    byline: "A basic calculator with glassmorphism UI made without any library, using only HTML, CSS and Vanilla Javascript.",
    github: "https://github.com/Soumyajit0803/Basic-calculator",
    link: "https://soumyajit0803.github.io/Basic-calculator/",
};

const Projects = () => {
    return (
        <div className="content">
            <div className="head-wideline">
                <div className="heading hiderx">Projects</div>
                <div className="wideline bullethide"></div>
            </div>
            <div className="proj-display">
                {/* <Projectcard data={CoinPROBE} animationStyle={"descend-hide"} />
                <Projectcard data={Calculator} animationStyle={"bullethide"} />
                <Projectcard data={GCSJ} animationStyle={"descend-hide"} />
                <Projectcard data={Tictactoe} animationStyle={"bullethide"} /> */}
                <ProjectBanner />
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
