import React from "react";
import "./Techstack.css";

const Techstack = () => {
    const dev = [
        "html",
        "css",
        "javascript",
        "mui",
        "react",
        "node-js",
        "figma",
        "python",
        "java",
        "c",
        "chartjs",
        "mongodb",
        "expressjs",
    ];
    return (
        <div className="content">
            <div className="head-wideline">
                <div className="tech-heading hiderx">My Skills</div>
                <div className="wideline bullethide"></div>
            </div>
            <div className="tech-content hiderx">
                <p>
                    I am more of a learn-by-doing person, and use my tech skills for achieving best results. Always
                    eager to learn more!
                </p>
                <div className="info-wrapper">
                    <Techinfo techList={dev} />
                </div>
            </div>
        </div>
    );
};

const Techinfo = ({ techList }) => {
    var animationStyle = "descend-hide";
    return (
        <div className="tech-info">
            <div className="tech-icons hiderx">
                {techList.map((value, index) => {
                    return (
                        <div
                            key={value}
                            style={{ opacity: "0", animationDelay: `${index * 0.1}s` }}
                            className={animationStyle}
                        >
                            <img src={`/assets/tech-stack/${value}.svg`} alt={value} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Techstack;
