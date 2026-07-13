import "./Navbar.css";

function Navbar() {
    return (
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

            {/* Resume Button */}
            <button className="resume-btn">
                Resume
            </button>
        </nav>
    );
}

export default Navbar;