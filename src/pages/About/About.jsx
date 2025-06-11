import React from "react";
import "./About.css";
import AboutStamp from "../../assets/about-stamp.svg"


const About = () => {
    return (
        <div className="about-content">
            <div className="head-wideline">
                <div className="heading hiderx">About Me</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="typography hiderx">
                <div>
                    <p>Welcome to my corner of the Internet!</p>
                    <br />
                    I'm Soumyajit Karmakar, a passionate college student with a zest for creativity and problem-solving.
                    My journey through academia has been an exhilarating exploration of various fields, but my heart
                    lies at the intersection of web development, design and competitive programming.
                    <br />
                    <br />
                    With a strong foundation in the MERN stack, I thrive on building dynamic web apps that blend
                    functionality with aesthetics. For design I consider Figma as my digital canvas, crafting many
                    elegant website UIs. Apart from development, I love to take part in CP contests on various online
                    platforms.
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
