import React, { useState } from "react";
import "../styles/Home.css";
import eventImage from "../assets/event-hero.png";
import ReferralSteps from "../components/ReferralSteps";
import FAQSection from "../components/FAQSection";
import ReferralModal from "../components/ReferralModal";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Benefits from "../components/Benefits";


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("home");

    const handleScrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        setActiveTab(section);
    };

    return (
        <div>
            <div className="home-tab-containar">
                <div className="home-horizontal-tabs">
                    {["referralSteps", "benefits", "faq", "contact"].map((section) => (
                        <button
                            key={section}
                            className={`home-tab-button ${activeTab === section ? "active" : ""}`}
                            onClick={() => handleScrollToSection(section)}
                        >
                            {section === "referralSteps" ? "Refer" :
                                section === "benefits" ? "Benefits" :
                                    section === "faq" ? "FAQs" :
                                        "Support"}
                        </button>
                    ))}
                </div>
            </div>
            <div id="hero" className="home-container">
                <div className="hero">
                    <div className="hero-text">
                        <h1>Let’s Learn & Earn</h1>
                        <p>Get a chance to earn <strong>₹10,000</strong> for every friend who enrolls!</p>
                        <button to="/" className="cta-button" onClick={() => { setIsModalOpen(true) }}>Refer Now</button>
                    </div>
                    <div className="hero-image">
                        <img src={eventImage} alt="Image" />
                    </div>
                </div>
            </div>

            <div id="referralSteps">
                <ReferralSteps setIsModalOpen={setIsModalOpen} />
            </div>

            <div id="benefits">
                <Benefits setIsModalOpen={setIsModalOpen} />
            </div>

            <div id="faq">
                <FAQSection />
            </div>

            <div id="contact">
                <GetInTouch />
            </div>

            <Footer />
            <ReferralModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false) }} />
        </div>
    );
};

export default Home;
