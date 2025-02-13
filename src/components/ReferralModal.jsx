import React, { useState } from "react";
import "../styles/ReferralModal.css";
import { toast } from "react-toastify";
import referralImage from "../assets/refer-image.png";
import { submitReferral } from "../api/apiServices";
import "react-toastify/dist/ReactToastify.css";

const ReferralModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        referrer: "",
        referee: "",
        referrer_email: "",
        referee_email: "",
        course: "",
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const courses = [
        "Full Stack Web Development",
        "Data Science & Machine Learning",
        "Cybersecurity",
        "Cloud Computing",
        "AI & Deep Learning",
        "Mobile App Development",
        "Blockchain & Cryptocurrency",
        "DevOps & CI/CD",
        "Software Testing & Automation",
        "UI/UX Design",
        "Embedded Systems & IoT",
        "Game Development",
        "Digital Marketing & SEO",
        "Big Data & Analytics",
        "AR/VR Development",
        "Business Intelligence & Data Visualization"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await submitReferral(formData);
            toast.success("Referral submitted successfully!");
            setFormData({ referrer: "", referee: "", referrer_email: "", referee_email: "", course: "" });
            onClose();
        } catch (error) {
            toast.error(error.message || "Failed to submit referral.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-left">
                    <img src={referralImage} alt="Refer & Earn" />
                </div>

                <div className="modal-right">
                    <h2 className="modal-title">Refer a Friend</h2>
                    <p className="modal-subtitle">Earn rewards by referring a friend!</p>


                    <form className="referral-form" onSubmit={handleSubmit}>
                        <label>Referrer Name</label>
                        <input type="text" name="referrer" placeholder="Your Name" value={formData.referrerName} onChange={handleChange} required />

                        <label>Referrer Email</label>
                        <input type="email" name="referrer_email" placeholder="Friend's Email" value={formData.refereeEmail} onChange={handleChange} required />

                        <label>Referee Name</label>
                        <input type="text" name="referee" placeholder="Friend's Name" value={formData.refereeName} onChange={handleChange} required />

                        <label>Referee Email</label>
                        <input type="email" name="referee_email" placeholder="Friend's Email" value={formData.refereeEmail} onChange={handleChange} required />

                        <label>Course Name</label>
                        <select name="course" value={formData.course} onChange={handleChange} required>
                            <option value="" disabled>Select a course</option>
                            {courses.map((course, index) => (
                                <option key={index} value={course}>{course}</option>
                            ))}
                        </select>

                        <button type="submit" className="refer-button" disabled={loading}>
                            {loading ? "Submitting..." : "Send Referral"}
                        </button>
                    </form>
                </div>

                <button className="close-button" onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default ReferralModal;
