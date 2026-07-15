import "./Navbar.css";
import { useState } from "react";
import resume from "../assets/images/resume.png";
function Navbar() {
    const [showResume, setShowResume] = useState(false);
    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <div className="logo-circle">
                        AN
                    </div>

                    <div className="logo-text">
                        <h2>Ashwini <span>Naik</span></h2>
                        <p>Full Stack Developer</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#education">Education</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#certifications">Certificates</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <button
                    className="resume-btn"
                    onClick={() => setShowResume(true)}
                >
                    Resume
                </button>
            </nav>

            {
                showResume && (
                    <div className="resume-modal">
                        <div className="resume-content">

                            <button
                                className="close-btn"
                                onClick={() => setShowResume(false)}
                            >
                                ×
                            </button>

                            <img
                                src={resume}
                                alt="Resume"
                                className="resume-image"
                            />

                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Navbar;