/* Author - Abhishek Chauhan */
import "./Resources.css"
import Navbar from "../components/Navbar.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"

const Supply = () => {
    const [listResources] = useState([
        {
            name: "JavaScript 40 Pattern coding problems with solutions!",
            to: "https://github.com/okabhishek88/",
        },
        {
            name: "JavaScript Language Complete Notes - A to Z JavaScript Concepts",
            to: "https://github.com/okabhishek88/"
        }
    ])
    return (
        <>
            <Navbar />
            <section className="resources">
                <div className="title">
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                        <span style={{ color: "#e945e3" }}>Bhalai</span> ki supply:
                    </p>
                </div>
                <div className="des">
                    <p style={{ fontSize: "1rem", color: "#eee5" }}>
                        &lt; In this section, I share the resources I have gathered to help fellow developers level up and create amazing things &#47;&gt;
                    </p>
                </div>
                <div className="res">
                    {
                        listResources.map((item, index) => {
                            return (
                                <div className="rescard" key={index}>
                                    <p style={{ textAlign: "center" }}>{item.name}</p>
                                    <Link to={item.to}>
                                        <button className="btndown">Download</button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="space"></div>
            </section>
        </>
    )
}
export default Supply
