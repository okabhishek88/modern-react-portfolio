// Author - Abhishek Chauhan
import "./Skills.css"
import Navbar from "../components/Navbar.jsx"
import html from "/icons/html.svg"
import css from "/icons/css.svg"
import bootstrap from "/icons/bootstrap.svg"
import tailwind from "/icons/tailwind.svg"
import js from "/icons/javascript.svg"
import api from "/icons/api.svg"
import git from "/icons/git.svg"
import github from "/icons/github.svg"
import linux from "/icons/linux.svg"
import node from "/icons/node.svg"
import express from "/icons/express.svg"
import sql from "/icons/sql.svg"
import mysql from "/icons/mysql.svg"
import mongodb from "/icons/mongodb.svg"
import postman from "/icons/postman.svg"
import vite from "/icons/vite.svg"
import cloudinary from "/icons/cloudinary.svg"
import react from "/icons/react.svg"
import mui from "/icons/mui.svg"
import vercel from "/icons/vercel-n.svg"
import { useState } from "react"

const Skills = () => {
    const [listSkills] = useState([
        {
            icon: html,
            name: "HTML",
        },
        {
            icon: css,
            name: "CSS",
        },
        {
            icon: bootstrap,
            name: "Bootstrap",
        },
        {
            icon: tailwind,
            name: "Tailwind",
        },
        {
            icon: js,
            name: "JavaScript",
        },
        {
            icon: api,
            name: "API",
        },
        {
            icon: git,
            name: "GIT",
        },
        {
            icon: github,
            name: "GitHub",
        },
        {
            icon: linux,
            name: "Linux",
        },
        {
            icon: node,
            name: "Node",
        },
        {
            icon: express,
            name: "Express",
        },
        {
            icon: sql,
            name: "SQL",
        },
        {
            icon: mysql,
            name: "MySQL",
        },
        {
            icon: mongodb,
            name: "MongoDB",
        },
        {
            icon: postman,
            name: "Postman",
        },
        {
            icon: vite,
            name: "Vite",
        },
        {
            icon: cloudinary,
            name: "Cloudinary",
        },
        {
            icon: react,
            name: "React",
        },
        {
            icon: mui,
            name: "Material UI",
        },
        {
            icon: vercel,
            name: "Vercel",
        },
    ])
    return (
        <>
            <Navbar />
            <section className="skills">
                <div className="title">
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                        <span style={{ color: "#e945e3" }}>Skills</span> that I know:
                    </p>
                </div>
                <div className="des">
                    <p style={{ fontSize: "1rem", color: "#eee5" }}>
                        &lt; I am a motivated and reliable person who gets things done, no
                        matter the situation. I work well in a team, but I can also take
                        charge when needed. I handle pressure easily and always meet
                        deadlines. I am adaptable and ready to tackle any challenge that comes
                        my way. &#47;&gt;
                    </p>
                </div>
                <div className="list">
                    {
                        listSkills.map((value, key) => {
                            return (
                                <div key={key} className="item">
                                    <img
                                        src={value.icon}
                                        alt={value.name}
                                        style={{ width: 70, height: 70 }}
                                    />
                                    <h4>{value.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <p className="des" style={{ fontSize: "1rem", color: "#eee5" }}>I learn and update myself daily, continuously improving my skills to keep up with the latest trends in technology.</p>
                </div>
                <div className="space"></div>
            </section>
        </>
    )
}

export default Skills