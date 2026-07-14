import "./Contact.css";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="section-title">Contact</h2>

            <p className="section-subtitle">Let's Connect</p>

            <p className="contact-description">
                I'm open to internship and full-time opportunities. Feel free to
                connect with me through the following platforms.
            </p>

            <div className="contact-container">

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaEnvelope />
                    </div>

                    <h3>Email</h3>

                    <a href="mailto:naik999ashwini@gmail.com">
                        naik999ashwini@gmail.com
                    </a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaPhoneAlt />
                    </div>

                    <h3>Phone</h3>

                    <a href="tel:+917892482351">
                        +91 7892482351
                    </a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaLinkedin />
                    </div>

                    <h3>LinkedIn</h3>

                    <a
                        href="https://www.linkedin.com/in/ashwini-naik999/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/ashwini-naik999

                    </a>
                </div>

            </div>
        </section>
    );
}

export default Contact;