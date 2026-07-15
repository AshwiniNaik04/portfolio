import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Ashwini Naik</h2>

        <p>
          Full Stack Developer | MERN Stack Enthusiast
        </p>
        
        <div className="footer-socials">

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
            <FaEnvelope />
          </a>

        </div>

        <a href="#home" className="back-top">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © 2026 Ashwini Naik. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;