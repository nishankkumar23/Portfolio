import React from "react";
import "./ProjectBanner.css";
import CoinProbe from "../../../../public/assets/coinprobe-banner.png";

const ButtonGroup = ({ github, demo }) => {
    return (
        <div className="project-btn">
            <div className="github-btn" onClick={() => window.open(github, "_blank")}>
                github
            </div>
            <div className="demo-btn" onClick={() => window.open(demo, "_blank")}>
                demo
            </div>
        </div>
    );
};

const ProjectTag = ({ tag }) => {
    return <div className="ptag">{tag}</div>;
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
                <div className="project-head">{projectStats?.name}</div>
                <div className="project-desc">{projectStats?.byline}</div>
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
                        {projectStats?.tags?.map((v) => (
                            <ProjectTag tag={v} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="banner">
                <img src={CoinProbe} />
            </div>
        </div>
    );
};

export default ProjectBanner;
