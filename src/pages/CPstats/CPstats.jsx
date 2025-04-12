import { React, useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import "./CPstats.css";

const Leetcode = {
    platform: "LEETCODE",
    highlightNumber: 1799,
    highlightLabel: "Highest Rating",
    extra: {
        left: "Top",
        number: 6.6,
        start: 99,
        right: "% Users.",
    },
    link: "https://leetcode.com/_Soumyajit_83/",
};
const Codechef = {
    platform: "CODECHEF",
    highlightNumber: 1636,
    highlightLabel: "Highest Rating",
    extra: {
        left: "Best rank",
        number: 142,
        start: 3231,
        right: " /3231",
    },
    link: "https://www.codechef.com/users/s0umyajit",
};

const Codeforces = {
    platform: "CODEFORCES",
    highlightNumber: 1410,
    highlightLabel: "Highest Rating",
    extra: {
        left: "",
        number: 267,
        start: 0,
        right: " Problems solved",
    },
    link: "https://codeforces.com/profile/CF_Soumyajit",
};

const CPstats = () => {
    return (
        <div className="content" style={{
          padding: "3rem 0"
        }}>
            <div className="head-wideline">
                <div className="heading hiderx">CP Stats</div>
                <div className="wideline bullethide"></div>
            </div>
            <div className="cp-cards">
                <CPcard data={Leetcode} />
                <CPcard data={Codechef} />
                <CPcard data={Codeforces} />
            </div>
        </div>
    );
};

const CPcard = ({ data }) => {
    const openWeb = () => {
        window.open(data.link, "_blank");
    };

    return (
        <div onClick={openWeb} className="cp-card-wrap hiderx">
            <div className="cp-card-head">
                <img src={`/assets/${data.platform.toLowerCase()}.svg`} alt={data.platform} />
                <div>{data.platform}</div>
            </div>
            <div className="cp-card-stat">
                <div className="cp-number">
                    <CountUpOnVisible end={data.highlightNumber} />
                </div>
                <div className="cp-label">{data.highlightLabel}</div>
            </div>
            <div className="cp-more">
                {data.extra.left}
                <span>
                    <CountUpOnVisible start={data.extra.start} end={data.extra.number} />
                </span>
                {data.extra.right}
            </div>
        </div>
    );
};

const CountUpOnVisible = ({ start = 0, end }) => {
    const [isVisible, setIsVisible] = useState(false);
    const countUpRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Change this threshold according to your needs
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (countUpRef.current) {
            observer.observe(countUpRef.current);
        }

        return () => {
            if (countUpRef.current) {
                observer.unobserve(countUpRef.current);
            }
        };
    }, []);

    return <div ref={countUpRef}>{isVisible && <CountUp separator="" start={start} end={end} />}</div>;
};

export default CPstats;
