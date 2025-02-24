// Author - Abhishek Chauhan
import "./Home.css"
import Navbar from "../components/Navbar.jsx"
import { MdDoubleArrow } from "react-icons/md"

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="Home">
                <div className="avatar">
                    <div className="cardlogo">
                        <img src="/icons/name-logo.svg" alt="logo" />
                        <div className="info">
                            <p style={{ textAlign: "center" }}>M.E.R.N Full Stack Developer</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="name">
                        <p>Hello World! I&apos;m</p>
                        <p><span> Abhishek Chauhan</span></p>
                    </div>
                    <div className="description">
                        <p>
                            &lt; As a Computer Science Engineer, I love using technology to
                            solve real-world problems. With CSE specializations in Blockchain
                            Technology, Internet of Things, and Cybersecurity,
                            I deeply enjoy exploring ways to make systems safer and smarter. Whether it&apos;s
                            creating user-friendly websites, fortifying digital security, or
                            optimizing system performance, I am dedicated to finding simple yet
                            effective, innovative solutions that truly make a significant and
                            positive difference. &#47;&gt;
                        </p>
                    </div>
                    <a href="/resume.pdf" rel="noopener noreferrer" target="_blank">
                        <button className="btndown"><span>Download Resume&nbsp;<MdDoubleArrow /></span></button>
                    </a>
                    <div className="space"></div>
                </div>
            </section>
        </>
    );
}
