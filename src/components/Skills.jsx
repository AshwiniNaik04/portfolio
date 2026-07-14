import "./Skills.css";

function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["C", "Java", "JavaScript"],
        },
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "React.js"],
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js"],
        },
        {
            title: "Databases",
            skills: ["MySQL", "MongoDB"],
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "VS Code", "Postman"],
        },
        {

            title: "Soft Skills",
            skills: [
                "Problem Solving",
               "Communication",
                "Collaboration",
                "Adaptability",
            ],

        },
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills-container">
                {skillCategories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <h3>{category.title}</h3>

                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <span className="skill-tag" key={i}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;