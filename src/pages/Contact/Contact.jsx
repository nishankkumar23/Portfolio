import React from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const openWeb = (link) => {
        window.open(link, "_blank");
    };
    return (
        <div id="#5" className="contact-wrap hiderx">
            <div className="head-wideline">
                <div className="heading hiderx">Say hello!</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="contact-body">
                Did I sound interesting so far?
                <br />
                Whether you're curious about my work or looking to collaborate on something exciting, I'm always open to new opportunities.
                <br />
                <br />
                Let's connect and create something impactful together!

            </div>

            <div className="contact-list">
                <div className="right-to-left">
                    <FontAwesomeIcon
                        className="font-awesome"
                        icon={faLinkedin}
                        size="2x"
                        color="#ffad33"
                        onClick={() => openWeb("https://www.linkedin.com/in/nishank-kumar-a234002a4/")}
                    />
                </div>

                <div className="right-to-left">
                    <FontAwesomeIcon
                        className="font-awesome"
                        icon={faEnvelope}
                        size="2x"
                        color="#ffad33"
                        onClick={() => openWeb("mailto:nishank232006@gmail.com")}
                    />
                </div>

                <div className="right-to-left">
                    <FontAwesomeIcon
                        className="font-awesome"
                        icon={faGithub}
                        size="2x"
                        color="#ffad33"
                        onClick={() => openWeb("https://github.com/nishankkumar23")}
                    />
                </div>
            </div>
            <p className="signature">Made with {<FontAwesomeIcon icon={faHeart} color="#ffad33" />} by <i>Nishank Kumar</i>.</p>
        </div>
    );
};

export default Contact;
