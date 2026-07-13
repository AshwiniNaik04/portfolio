import "./Hero.css";
import profile from "../assets/images/profile.jpeg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">

                {/* Left Side */}

                <div className="hero-text">

                    <p className="greeting">Hello, I'm</p>

                    <h1>
                        Ashwini <span>Naik</span>
                    </h1>

                    <h2>
                        Full Stack Developer <span>| MERN Enthusiast</span>
                    </h2>

                    <p className="description">
                        Passionate about building responsive, scalable, and
                        user-friendly web applications using modern web
                        technologies.
                    </p>

                    <div className="hero-buttons">

                        <a href="/resume.pdf" className="btn primary">
                            Download Resume
                        </a>

                        <a href="#projects" className="btn secondary">
                            View Projects
                        </a>

                    </div>

                    <div className="social-icons">

                        <a
                            href="https://github.com/AshwiniNaik04"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/ashwini-naik999"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                        <a href="mailto:naik999ashwini@gmail.com">
                            <MdEmail />
                        </a>

                    </div>

                </div>

                {/* Right Side */}

                <div className="hero-image">

                    <img src={profile} alt="Ashwini Naik" />

                </div>

            </div>

        </section>
    );
}

export default Hero;