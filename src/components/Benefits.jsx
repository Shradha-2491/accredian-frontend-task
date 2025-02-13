import React, { useState } from "react";
import "../styles/Benefits.css";

const programs = [
    { name: "Data Science", referrerBonus: "₹16,000", refereeBonus: "₹8,000" },
    { name: "Artificial Intelligence", referrerBonus: "₹20,000", refereeBonus: "₹9,600" },
    { name: "Web Development", referrerBonus: "₹14,500", refereeBonus: "₹7,200" },
    { name: "Cybersecurity", referrerBonus: "₹18,000", refereeBonus: "₹9,000" },
    { name: "Business Management", referrerBonus: "₹12,000", refereeBonus: "₹6,400" },
    { name: "Cloud Computing", referrerBonus: "₹19,000", refereeBonus: "₹9,500" },
    { name: "Digital Marketing", referrerBonus: "₹13,000", refereeBonus: "₹6,500" },
    { name: "Finance & Investment", referrerBonus: "₹17,000", refereeBonus: "₹8,500" },
    { name: "Graphic Design", referrerBonus: "₹11,000", refereeBonus: "₹5,500" },
    { name: "Blockchain & Cryptocurrency", referrerBonus: "₹21,000", refereeBonus: "₹10,500" },
    { name: "Software Engineering", referrerBonus: "₹15,000", refereeBonus: "₹7,500" },
    { name: "UI/UX Design", referrerBonus: "₹12,500", refereeBonus: "₹6,000" },
    { name: "Project Management", referrerBonus: "₹14,000", refereeBonus: "₹7,000" }
];

const Benefits = ({ setIsModalOpen }) => {
    const [selectedProgram, setSelectedProgram] = useState("All Programs");

    const filteredPrograms =
        selectedProgram === "All Programs"
            ? programs
            : programs.filter((p) => p.name === selectedProgram);

    return (
        <div className="benefits-main-container">
            <h2 className="benefits-title">What Are The <span className="blue-highlight">Referral Benefits?</span></h2>
            <div className="benefits-container">
                {/* Left Side - Tabs Box */}
                <div className="tabs-container">
                    <button
                        className={`tab-button ${selectedProgram === "All Programs" ? "active" : ""}`}
                        onClick={() => setSelectedProgram("All Programs")}
                    >
                        All Programs
                    </button>
                    {programs.map((program) => (
                        <button
                            key={program.name}
                            className={`tab-button ${selectedProgram === program.name ? "active" : ""}`}
                            onClick={() => setSelectedProgram(program.name)}
                        >
                            {program.name}
                        </button>
                    ))}
                </div>

                {/* Right Side - Table */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Program</th>
                                <th>Referrer Bonus</th>
                                <th>Referee Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPrograms.map((program) => (
                                <tr key={program.name}>
                                    <td>{program.name}</td>
                                    <td>{program.referrerBonus}</td>
                                    <td>{program.refereeBonus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="center-button">
                <button className="refer-button" onClick={() => { setIsModalOpen(true) }}>Refer Now</button>
            </div>
        </div>
    );
};

export default Benefits;
