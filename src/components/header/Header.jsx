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

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const icons = [faHome, faPaperPlane, faSchool, faCode, faBriefcase, faPenRuler, faInfo];

    return (
        <div className="component-header">
            <div className="page-progress">
                <Loader />
                {icons.map((icon, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={icon}
                        color={scrollProgress >= index*16 ? "#000" : "var(--brand)"}
                        style={{
                            border: "1px solid var(--brand)",
                            backgroundColor: scrollProgress >= index*16 ? "var(--brand)" : "#000",
                            borderRadius: "100px",
                            width: "16px",
                            height: "16px",
                            padding: "8px",
                        }}
                    />
                ))}
            </div>
            {/* <div onClick={() => openWeb("https://soumyajit-dev.vercel.app/")} className="brand">
                <img src={Brandicon} alt="Brandicon" />
                <div className="brand-name">SOUMYAJIT.DEV</div>
            </div> */}
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
