import "./Education.css";
import { FaGraduationCap, FaSchool, FaBookOpen, FaStar } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";

function Education() {

    const education = [
        {
            icon: <FaGraduationCap />,
            degree: "B.E. Computer Science & Engineering",
            college: "Canara Engineering College",
            location: "Mangalore, Karnataka",
            duration: "2023 - 2027",
            score: "CGPA: 9.02"
        },
        {
            icon: <FaBookOpen />,
            degree: "Pre-University (PCMB)",
            college: "Government PU College",
            location: "Ankola, Karnataka",
            duration: "2021 - 2023",
            score: "93%"
        },
        {
            icon: <FaSchool />,
            degree: "SSLC",
            college: "Jaycee English Medium School",
            location: "Ankola, Karnataka",
            duration: "2020 - 2021",
            score: "93.76%"
        }
    ];

    return (
        <section className="education" id="education">

            <h2 className="section-title">Education</h2>

            <p className="section-subtitle">
                My Academic Journey
            </p>

            <div className="education-container">

                {education.map((item, index) => (

                    <div className="education-card" key={index}>

                        <div className="edu-icon">
                            {item.icon}
                        </div>

                        <h3>{item.degree}</h3>

                        <h4>{item.college}</h4>

                        <p className="location">{item.location}</p>

                        <div className="edu-details">

                            <p>
                                <MdCalendarToday />
                                <span>{item.duration}</span>
                            </p>

                            <p>
                                <FaStar />
                                <span>{item.score}</span>
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Education;