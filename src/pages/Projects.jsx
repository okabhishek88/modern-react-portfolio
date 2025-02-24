// Author - Abhishek Chauhan
import "./Projects.css"
import { useState } from "react"
import Navbar from "../components/Navbar.jsx"
import { MdDoubleArrow } from "react-icons/md"

const Projects = () => {
    const [listProjects] = useState([
        {
            name: "Modern React Portfolio",
            des: "Welcome to my Modern React portfolio! crafted with a mysterious design that draws you in. Built with React, it is responsive and fast, ensuring seamless experiences across all devices. Discover my projects and see how I blend innovative design with the latest technologies to craft visually stunning, high-performance, and user-friendly applications.",
            image: "/images/modern-react-portfolio.png",
            mission: "https://github.com/okabhishek88",
        },
        {
            name: "AI-Powered Code Reviewer",
            des: "This is an AI-driven tool designed to help developers review their code by providing feedback and suggestions for improvement. Powered by Google Gemini AI model, his tool also offers real-time suggestions to improve coding efficiency and it helps identify potential issues, suggest optimizations, and enhance code quality in various programming languages.",
            image: "/images/ai-powered-code-reviewer.png",
            mission: "https://github.com/okabhishek88",
        },
        {
            name: "Decentralized Voting Application",
            des: "A secure and transparent voting system built on blockchain technology. Each vote is securely recorded on an immutable ledger, ensuring privacy and preventing tampering or fraud. Embrace a future of safe, transparent, and reliable voting, free from traditional system vulnerabilities. Secure, fast, and transparent – the perfect solution for modern voting.",
            image: "/images/decentralized-voting-app.png",
            mission: "https://github.com/okabhishek88"
        },
        {
            name: "Home Automation System",
            des: "A smart home automation system powered by IoT, enabling you to control your devices remotely. It allows seamless integration and real-time control of lights and appliances through a user-friendly mobile app. With Blynk's cloud-based platform, you can easily manage your devices from anywhere, anytime. Enjoy a smarter home that adapts to your lifestyle.",
            image: "/images/home-automation-system.png",
            mission: "https://github.com/okabhishek88"
        },
        {
            name: "Video Streaming Platform",
            des: "A fully-featured video streaming platform, offering seamless access to a wide variety of movies and TV shows. Built with modern web technologies, it provides a user-friendly interface, personalized recommendations, and smooth streaming. Enjoy high-quality content on-demand, with features like multi-device support, search functionality, and easy content discovery.",
            image: "/images/video-streaming-app.png",
            mission: "https://github.com/okabhishek88"
        },
        {
            name: "Job Portal Web Application",
            des: "Welcome to the ultimate job portal web application, designed to connect talent with opportunity, built using MERN technologies. It’s where job seekers and employers meet for the perfect match. Explore a world of possibilities with a beautifully crafted design that makes your experience smooth and enjoyable. (Better than Naukri.com :D)",
            image: "/images/job-portal-app.png",
            mission: "https://github.com/okabhishek88",
        },
    ])

    return (
        <section className="projects">
            <Navbar />
            <div className="title">
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    My <span style={{ color: "#e945e3" }}>exciting </span> projects:
                </p>
            </div>
            <div className="des">
                <p style={{ color: "#eee5" }}>
                    &lt; In this section, each project reflects my skills in creating
                    responsive, user-friendly applications. With
                    every project, my goal is to craft innovative solutions that tackle
                    real-world challenges and enhance the overall user experience. Check out the project&apos;s live demo on my <a href="https://www.linkedin.com/in/okabhishek88/" target="_blank">linkedin</a> &#47;&gt;
                </p>
            </div>
            <div className="list">
                {
                    listProjects.map((value, key) => (
                        <div key={key} className="item">
                            {/* image */}
                            <div className="images">
                                <img src={value.image} alt="image" />
                            </div>
                            {/* content */}
                            <div className="content">
                                <h3>{value.name}</h3>
                                <div className="des">{value.des}</div>
                            </div>
                            <div className="dbtn">
                                <a href={value.mission} target="_blank" rel="noopener noreferrer">
                                    <button className="btndown"><span>GITHUB LINK&nbsp;<MdDoubleArrow /></span></button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="new" style={{ color: "#eee5" }}>
                <p>New awesome projects will be uploaded soon...</p>
            </div>
            <div className="space"></div>
        </section>
    );
};

export default Projects
