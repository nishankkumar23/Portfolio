import React from "react";
import "./ProjectBanner.css";
import CoinProbe from "../../../../public/assets/coinprobe.png";

const ButtonGroup = () => {
    return (
        <div className="project-btn">
            <div className="github-btn">github</div>
            <div className="demo-btn">demo</div>
        </div>
    );
};

const ProjectTag = ()=>{
    return <div className="ptag">Hello</div>
}

const ProjectBanner = () => {
    return (
        <div className="projectbanner">
            <div className="content">
                <div className="project-head">CoinProbe</div>
                <div className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate fugiat eos sed quaerat
                    veritatis sit eligendi tenetur ut dolores distinctio sunt non harum soluta exercitationem deserunt,
                    at, delectus animi.
                </div>
                <div className="extras">
                    <ButtonGroup />
                    <div className="project-tags">
                        <ProjectTag />
                        <ProjectTag />
                        <ProjectTag />
                        <ProjectTag />
                        <ProjectTag />
                        <ProjectTag />
                    </div>
                </div>
            </div>
            <div className="banner">{/* <img src={CoinProbe} /> */}</div>
        </div>
    );
};

export default ProjectBanner;
