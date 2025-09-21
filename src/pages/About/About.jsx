import React from "react";
import "./About.css";
import AboutStamp from "../../assets/about-stamp.svg"


const About = () => {
    return (
        <div id="#0" className="about-content">
            <div className="head-wideline">
                <div className="heading hiderx">About Me</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="typography hiderx">
                <div>
                    <p>Welcome to my corner of the Internet!</p>
                    <br />
                    I'm Nishank Kumar, a passionate Computer Science student at Indian Institute of Information Technology, Agartala (2023-2027).
                    My journey through academia has been an exhilarating exploration of various fields, but my heart
                    lies at the intersection of web development, design and competitive programming.
                    <br />
                    <br />
                    With a strong foundation in the MERN stack, I thrive on building dynamic web apps that blend
                    functionality with aesthetics. For design I consider Figma as my digital canvas, crafting many
                    elegant website UIs. Apart from development, I love to take part in CP contests on Codeforces.
                    <br />
                    <br />
                    I'm an active member of the Coding Club, participate in college technical fests & hackathons, 
                    and I'm also a state-level Taekwondo Gold Medalist. I completed my schooling from Ketan Convent School, 
                    Aligarh with 94% in X and 78% in XII.
                    <br />
                    <br />
                    Scroll down to learn more about me!
                </div>
                <img src={AboutStamp} style= {{
                    padding: "1rem",
                    width: "100%",
                    height: "100%",

                }} />
            </div>
        </div>
    );
};

export default About;
