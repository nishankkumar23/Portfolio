import React from "react";
import "./ProjectBanner.css";
import CoinProbe from "../../../../public/assets/coinprobe-banner.png";

const ButtonGroup = ({ github, demo, flip }) => {
    const pattern = flip ? "right-to-left" : "left-to-right";
    return (
        <div className={`project-btn ${pattern}`}>
            <div className="github-btn" onClick={() => window.open(github, "_blank")}>
                github
            </div>
            <div className="demo-btn" onClick={() => window.open(demo, "_blank")}>
                demo
            </div>
        </div>
    );
};

const ProjectTag = ({ tag, delay, flip }) => {
    const pattern = flip ? "right-to-left" : "left-to-right";

    return (
        <div
            className={`ptag ${pattern}`}
            style={{
                animationDelay: `${delay * 0.1}s`,
            }}
        >
            {tag}
        </div>
    );
};

const ProjectBanner = ({ projectStats, flip = 0 }) => {
    return (
        <div
            className="projectbanner"
            style={{
                flexDirection: flip ? "row-reverse" : "row",
            }}
        >
            <div
                className="project-content"
                style={{
                    textAlign: flip ? "left" : "right",
                }}
            >
                <div className={"project-head" + (flip ? " right-to-left" : " left-to-right")}>
                    {projectStats?.name}
                </div>
                <div className={"project-desc" + (flip ? " right-to-left" : " left-to-right")}>
                    {projectStats?.byline}
                </div>
                <div
                    className="extras"
                    style={{
                        alignItems: flip ? "flex-start" : "flex-end",
                    }}
                >
                    <ButtonGroup demo={projectStats?.link} github={projectStats?.github} />
                    <div
                        className="project-tags"
                        style={{
                            justifyContent: flip ? "left" : "right",
                        }}
                    >
                        {projectStats?.tags?.map((v, idx) => (
                            <ProjectTag tag={v} delay={idx} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={"banner" + (flip?" right-to-left":" left-to-right")}>
                <img src={CoinProbe} />
            </div>
        </div>
    );
};

export default ProjectBanner;
