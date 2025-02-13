import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import "../styles/FAQSection.css";

const faqData = {
    Eligibility: [
        {
            question: "Who is eligible for the referral bonus?",
            answer: "The referrer (the person making the referral) is eligible for the bonus if they refer a family member or friend to an Accredian program, and that person completes the admission process and enrolls in one of Accredian’s programs."
        },
        {
            question: "What are the conditions for eligibility in Accredian's referral program?",
            answer: "The referred individual must be a new inquiry, having had no prior contact with Accredian for any intake or program."
        }
    ],
    "How to Use": [
        {
            question: "How can I submit a referral to Accredian?",
            answer: "Referrals can be submitted via Accredian's website’s referral section."
        },
        {
            question: "What happens after I submit a referral through the website?",
            answer: "After submitting a referral, an admission counselor from Accredian will contact the referred individual."
        },
        {
            question: "Do both the referrer and the referred individual become eligible for the referral bonus?",
            answer: "No, only the referrer is eligible for the referral bonus."
        }
    ],
    "Terms & Conditions": [{
        question: "Terms & Conditions", answer: (
            <div className="terms-container">
                <div className="terms-section">
                    <h3><strong>1. Bonus Processing:</strong></h3>
                    <p>Referral bonuses will be processed within 30 days of the referred individual's completion of the admission process.</p>
                </div>

                <div className="terms-section">
                    <h3><strong>2. Bonus Distribution:</strong></h3>
                    <div className="terms-content">
                        <p>• The referral bonus will be credited to the referrer only.</p>
                        <p>• The bonus will be distributed via direct money transfer to the bank account provided by the referrer.</p>
                    </div>
                </div>

                <div className="terms-section">
                    <h3><strong>3.Previous Inquiries:</strong></h3>
                    <div className="terms-content">
                        <p>• The referral bonus will not be processed if Accredian has already received an earlier inquiry or application from the referred individual for any intake or program, and someone from the team is already in contact with them.</p>
                        <p>• If no one is in contact with the referred individual, the bonus will be credited to the referrer.</p>
                    </div>
                </div>

                <div className="terms-section">
                    <h3><strong>4. Multiple Referrals:</strong></h3>
                    <p>If multiple referrals are received from the same individual, the referral bonus will be processed for each referral that has completed the admission process and meets the criteria outlined above.</p>
                </div>

                <div className="terms-section">
                    <h3><strong>5. Right to Modify:</strong></h3>
                    <p>Accredian reserves the right to modify or terminate the referral program at any time without prior notice.</p>
                </div>
            </div>
        )
    }]

};

const FAQSection = () => {
    const [selectedTab, setSelectedTab] = useState("Eligibility");
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAnswer = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="faq-main-container">
            <h2 className="faq-title">Frequently Asked <span className="blue-highlight">Questions</span></h2>
            <div className="faq-container">
                <div className="faq-tabs">
                    <ul>
                        {Object.keys(faqData).map((tab) => (
                            <li
                                key={tab}
                                className={`faq-tab ${selectedTab === tab ? "active" : ""}`}
                                onClick={() => setSelectedTab(tab)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="faq-content">
                    {Array.isArray(faqData[selectedTab]) ? (
                        <div className="faq-list">
                            {faqData[selectedTab].map((item, index) => (
                                <div key={index} className="faq-item">
                                    <div className={`faq-question ${expandedIndex === index ? "active" : ""}`} onClick={() => toggleAnswer(index)}>
                                        {item.question}
                                        <span className="arrow">{expandedIndex === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}</span>
                                    </div>
                                    {expandedIndex === index && <p className="faq-answer">{item.answer}</p>}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>{faqData[selectedTab]}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
