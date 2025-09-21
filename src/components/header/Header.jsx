import { React, useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileInvoice,
    faHome,
    faPaperPlane,
    faSchool,
    faCode,
    faBrush,
    faBriefcase,
    faPenRuler,
    faInfo,
} from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    // Calculate loader size based on scroll position
    const loaderSize = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    return <div className="page-scrolled" style={{ width: `${loaderSize}%` }} />;
};

const Header = () => {
    const openWeb = (link, newtab = false) => {
        window.open(link, newtab ? "_blank" : "_self");
    };

    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Get the section number from the div id
                        const sectionIndex = parseInt(entry.target.id.replace("#", ""));
                        setActiveSection(sectionIndex);
                        console.log("Section intersecting: ", sectionIndex);
                    }
                });
            },
            {
                threshold: 0.1,
                // rootMargin: "-50px 0px -50px 0px",
            }
        );

        // Observe all divs with numeric ids
        const divSections = [0, 1, 2, 3, 4, 5].map((index) => document.querySelector(`div[id="#${index}"]`));

        divSections.forEach((div) => {
            if (div) {
                observer.observe(div);
            }
        });

        return () => {
            divSections.forEach((div) => {
                if (div) {
                    observer.unobserve(div);
                }
            });
        };
    }, []);

    const handleSelect = (index) => {
        const section = document.querySelector(`div[id="#${index}"]`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const icons = [faHome, faSchool, faCode, faPenRuler, faBriefcase, faInfo];

    return (
        <div className="component-header">
            <div className="page-progress">
                {icons.map((icon, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={icon}
                        onClick={() => handleSelect(index)}
                        color={activeSection === index ? "#000" : "var(--brand)"}
                        style={{
                            border: "1px solid var(--brand)",
                            backgroundColor: activeSection === index ? "var(--brand)" : "#000",
                            borderRadius: "100px",
                            width: "16px",
                            height: "16px",
                            padding: "8px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: activeSection === index ? "0 0 10px var(--brand)" : "none",
                        }}
                    />
                ))}
            </div>
            <div
                className="resume"
                onClick={() =>
                    openWeb("https://drive.google.com/file/d/10tRSrvS2gWFM98FE_cTBo9b0NNcRh52X/view?usp=sharing", true)
                }
            >
                <FontAwesomeIcon className="fa-icon" icon={faFileInvoice} />
                <div className="resume-label">MY RESUME</div>
            </div>
        </div>
    );
};

export default Header;
