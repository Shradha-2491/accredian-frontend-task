import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPlus, FaMinus } from "react-icons/fa";

const Footer = () => {
    const [openProgram, setOpenProgram] = useState(null);

    const programs = [
        { name: "Data Science", description: "Learn data analysis, machine learning, and AI techniques." },
        { name: "Artificial Intelligence", description: "Explore deep learning, neural networks, and AI models." },
        { name: "Web Development", description: "Master front-end and back-end web technologies." },
        { name: "Cybersecurity", description: "Understand security measures and ethical hacking." },
        { name: "Business Management", description: "Develop leadership, strategic thinking, and business planning skills." },
        { name: "Cloud Computing", description: "Learn AWS, Azure, and Google Cloud fundamentals for cloud-based solutions." },
        { name: "Digital Marketing", description: "Learn SEO, social media marketing, and online advertising techniques." },
        { name: "Finance & Investment", description: "Understand stock markets, investments, and financial planning." },
        { name: "Graphic Design", description: "Master visual design, branding, and creative tools like Photoshop & Illustrator." },
        { name: "Blockchain & Cryptocurrency", description: "Explore decentralized finance, NFTs, and blockchain development." },
        { name: "Software Engineering", description: "Develop advanced coding skills, system design, and software architecture." },
        { name: "UI/UX Design", description: "Understand user experience principles, wireframing, and prototyping." },
        { name: "Project Management", description: "Learn agile methodologies, risk assessment, and team coordination." }
    ];


    const toggleProgram = (index) => {
        setOpenProgram(openProgram === index ? null : index);
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <Link>
                    <img src={logo} alt="Accredian" className="navbar-logo" />
                </Link>
                <button className="footer-btn">Schedule a 1-on-1 Call Now</button>
            </div>

            <hr className="footer-divider" />

            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="program-heading">Programs</h3>
                    <ul className="program-list">
                        {programs.map((program, index) => (
                            <li key={index} className="program-item">
                                <div className="program-title" onClick={() => toggleProgram(index)}>
                                    {program.name}
                                    {openProgram === index ? (
                                        <FaMinus className="toggle-icon" />
                                    ) : (
                                        <FaPlus className="toggle-icon" />
                                    )}
                                </div>
                                {openProgram === index && <p className="program-description">{program.description}</p>}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: support@referandearn.com</p>
                    <p>Alternative Email: help@referandearn.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Data Science Admission Helpline</p>
                    <p>Helpline: +1 800 555 6789</p>
                    <p>Email: admissions@datasciencehub.com</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Refer & Earn. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
