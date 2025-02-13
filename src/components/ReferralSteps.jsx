import React from "react";
import { FaUserPlus, FaClipboardList, FaWallet } from "react-icons/fa";
import "../styles/ReferralSteps.css";

const ReferralSteps = ({ setIsModalOpen }) => {
    return (
        <div className="referral-container">
            <h2 className="referral-title">How It <span className="blue-highlight">Works</span></h2>

            <div className="referral-steps">

                <div className="referral-card">
                    <div className="icon-container blue-bg">
                        <FaUserPlus className="icon" />
                    </div>
                    <h3 className="step-title">Step 1</h3>
                    <p className="step-text">Submit referrals easily via our website's referral section.</p>
                </div>


                <div className="referral-card">
                    <div className="icon-container blue-bg">
                        <FaClipboardList className="icon" />
                    </div>
                    <h3 className="step-title">Step 2</h3>
                    <p className="step-text">Earn rewards once your referral joins an Accredian program.</p>
                </div>


                <div className="referral-card">
                    <div className="icon-container blue-bg">
                        <FaWallet className="icon" />
                    </div>
                    <h3 className="step-title">Step 3</h3>
                    <p className="step-text">Referrer receives a bonus 30 days after program enrollment.</p>
                </div>
            </div>


            <div className="center-button">
                <button className="refer-button" onClick={() => { setIsModalOpen(true) }}>Refer Now</button>
            </div>
        </div>
    );
};

export default ReferralSteps;
