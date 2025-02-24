// Author - Abhishek Chauhan
import "./About.css"
import { MdDoubleArrow } from "react-icons/md"
import ldin from "/icons/li-i.svg"
import github from "/icons/gh-i.svg"
import insta from "/icons/ig-i.svg"
import leet from "/icons/lc-i.svg"
import email from "/icons/em-i.svg"
import Navbar from "../components/Navbar.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"

const About = () => {
    const [listSocial] = useState([
        {
            name: "Linkedin",
            icon: ldin,
            to: "https://www.linkedin.com/in/okabhishek88/"
        },
        {
            name: "GitHub",
            icon: github,
            to: "https://github.com/okabhishek88/"
        },
        {
            name: "Leetcode",
            icon: leet,
            to: "https://leetcode.com/u/okabhishek88/"
        },
        {
            name: "Instagram",
            icon: insta,
            to: "https://www.instagram.com/chai20cuit/"
        },
        {
            name: "Email",
            icon: email,
            to: "mailto:okabhishek88@gmail.com"
        }
    ])
    return (
        <section className="Education">
            <Navbar />
            <div className="title">
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    My <span style={{ color: "#e945e3" }}>education</span> background:
                </p>
            </div>
            <div className="des">
                <p>
                    &lt; In this section, I highlight my educational journey &#47;&gt;
                </p>
            </div>
            <div className="edu">
                <div className="edutext">
                    <ul className="timeline">
                        <li className="timeline-event">
                            <div className="timeline-event-copy">
                                <div className="titleyear">
                                    <MdDoubleArrow />
                                    <p className="timeline-event-thumbnail">
                                        July 2021 - July 2024
                                    </p>
                                </div>
                                <div className="cgap">
                                    <h3>B.TECH - Computer Science and Engineering</h3>
                                    <p>Score: 77%, CPI - 8.48, Division: First (Honors)</p>
                                    <p>
                                        Specialization - Blockchain Technology, Internet of Things &
                                        Cybersecurity
                                    </p>
                                    <p>
                                        College: Shri Shankaracharya Technical Campus, Bhilai,
                                        Chhattisgarh
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-event">
                            <div className="timeline-event-copy">
                                <div className="titleyear">
                                    <MdDoubleArrow />
                                    <p className="timeline-event-thumbnail">
                                        July 2017 - July 2020
                                    </p>
                                </div>
                                <div className="cgap">
                                    <h3>Diploma in Mechanical Engineering</h3>
                                    <p>Score: 75%, CPI - 8.36, Division: First (Honors)</p>
                                    <p>
                                        College: Shri Shankaracharya Technical Campus, Bhilai,
                                        Chhattisgarh
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="odiv">
                    <div>
                        <h3>Connect with me:</h3>
                    </div>
                    <div className="slinks">
                        {
                            listSocial.map((value, index) => {
                                return (
                                    <div key={index} className="ldiv">
                                        <Link to={value.to}>
                                            <img src={value.icon} style={{ width: "50px", height: "50px" }} alt="icons" className="icon-3d" />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About
