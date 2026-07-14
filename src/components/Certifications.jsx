import "./Certifications.css";
import { FaCertificate, FaTrophy } from "react-icons/fa";
import { useState } from "react";

import MERN from "../assets/images/MERN.png";
import HCJ from "../assets/images/HCJ.png";
import java from "../assets/images/java.jpeg";
import Hplife from "../assets/images/Hplife.jpeg";
import Cognizant from "../assets/images/Cognizant.png";
import GoogleAI from "../assets/images/GoogleAI.png";

import udemylogo from "../assets/images/udemylogo.png";
import scalerlogo from "../assets/images/scalerlogo.jpg";
import hplifelogo from "../assets/images/hplifelogo.png";
import cognizantlogo from "../assets/images/cognizantlogo.jpg";
import courseralogo from "../assets/images/courseralogo.webp";

function Certifications() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const certifications = [

        {
            logo: cognizantlogo,
            title: "Cognizant Technoverse Hackathon",
            issuer: "Certificate of Participation",
            year: "2026",
            image: Cognizant,
        },

        {
            logo: udemylogo,
            title: "The MERN – Full Stack Guide",
            issuer: "Udemy",
            year: "2026",
            image: MERN,
        },

        {
            logo: hplifelogo,
            title: "Effective Presentations",
            issuer: "HP LIFE",
            year: "2025",
            image: Hplife,
        },

        {
            logo: udemylogo,
            title: "HTML, CSS & JavaScript for Beginners",
            issuer: "Udemy",
            year: "2025",
            image: HCJ,
        },

        {
            logo: courseralogo,
            title: "Google AI Essentials",
            issuer: "Coursera",
            year: "2025",
            image: GoogleAI,
        },

        {
            logo: scalerlogo,
            title: "Java - Mastering The Fundamentals",
            issuer: "Scaler",
            year: "2024",
            image: java,
        },


    ];

    return (
        <section className="certifications" id="certifications">
            <h2 className="section-title">Certifications & Achievements</h2>

            <p className="section-subtitle">
                Courses, certifications, and hackathons that
                reflect my continuous learning and growth.
            </p>

            {/* Certifications */}


            <div className="certificate-container">
                {certifications.map((item, index) => (
                    <div className="certificate-card" key={index}>
                        <img
                            src={item.logo}
                            alt={item.issuer}
                            className="company-logo"
                        />

                        <h4>{item.title}</h4>

                        <p>{item.issuer}</p>

                        <span>{item.year}</span>

                        <div><button
                            className="view-btn"
                            onClick={() => setSelectedCertificate(item.image)}
                        >
                            View Certificate
                        </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedCertificate && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setSelectedCertificate(null)}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedCertificate}
                            alt="Certificate"
                            className="modal-image"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certifications;