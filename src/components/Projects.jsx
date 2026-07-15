import "./Projects.css";
import { FaGlobeAmericas, FaBuilding, FaLandmark, FaGamepad, FaCheckCircle } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            title: "TravelShare",
            icon: <FaGlobeAmericas />,
            featured: true,

            description:
                "A full-stack MERN application that enables users to discover destinations, share travel experiences, upload images, and interact with fellow travelers.",

            features: [
                "User Authentication",
                "User Profile Management",
                "Create & Manage Travel Posts",
                "Like Posts",
                "Image Upload",
                "Interactive Maps",
            ],

            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
            ],
        },

        {
            title: "PRISM",

            icon: <FaBuilding />,

            description:
                "A hostel complaint management system that allows students to register complaints while enabling wardens to efficiently track and resolve maintenance issues.",

            features: [
                "Student Login",
                "Complaint Registration",
                "Warden Dashboard",
                "Complaint Tracking",
                "Status Updates",
                "Chief Warden Dashboard",
                "Automatic Escalation of complaints After 3 Days",
            ],

            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
            ],
        },

        {
            title: "Vishnumurthy Heritage Portal",

            icon: <FaLandmark />,

            description:
                "A responsive tourism portal showcasing the history, culture, festivals and attractions of Vishnumurthy Temple using modern web technologies.",

            features: [
                "Responsive Website",
                "Tourism Information",
                "Interactive Navigation",
                "Modern UI",
            ],

            tech: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
        },

        {
            title: "Tic Tac Toe",

            icon: <FaGamepad />,

            description:
                "A responsive Tic Tac Toe game built using React that demonstrates component-based architecture, state management, and interactive gameplay.",

            features: [
                "Two-Player Gameplay",
                "Winner Detection",
                "Draw Detection",
                "Restart Game",
                "React Hooks (useState)",
                "Responsive User Interface",
            ],

            tech: [
                "React",
                "JavaScript",
                "HTML",
                "CSS",
            ],
        },
    ];

    return (
        <section className="projects" id="projects">

            <h2 className="section-title">Projects</h2>

            <p className="section-subtitle">
                Featured projects demonstrating my experience in full-stack and frontend
                web development.
            </p>

            <div className="projects-container">

                {projects.map((project, index) => (

                    <div className="project-card" key={index}>

                        <div className="project-icon">
                            {project.icon}
                        </div>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <h4>Key Features</h4>

                        <ul className="feature-list">

                            {project.features.map((feature, i) => (

                                <li key={i}>
                                    <FaCheckCircle />
                                    {feature}
                                </li>

                            ))}

                        </ul>

                        <div className="tech-stack">

                            {project.tech.map((tech, i) => (

                                <span key={i}>
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;