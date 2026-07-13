import "./About.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                <h2 className="section-title">About Me</h2>

                <p className="section-subtitle">
                    Get to know me better
                </p>

                <p className="about-description">
                    I'm a Computer Science and Engineering student passionate about building
                    responsive and user-friendly web applications. With a strong interest in
                    Full Stack Web Development and Data Structures & Algorithms,
                    I enjoy solving problems through coding and building real-world projects.
                    I believe in continuous learning and value teamwork and collaboration.
                </p>

                <div className="about-cards">

                    <div className="card">

                        <FaGraduationCap className="card-icon" />

                        <h3>Education</h3>

                        <p>BE in Computer Science & Engineering</p>
                        <span className="cgpa">
                            CGPA: 9.02 / 10
                        </span>
                    </div>

                    <div className="card">

                        <FaLaptopCode className="card-icon" />

                        <h3>Interests</h3>

                        <p>
                            Full Stack Development,
                            Data Structures & Algorithms,
                            and Web technologies.
                        </p>
                    </div>

                    <div className="card">

                        <HiOutlineLightBulb className="card-icon" />

                        <h3>Growth Mindset</h3>

                        <p>
                            Believe in continuous
                            learning, embracing
                            new challenges, and
                            improving every day.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;