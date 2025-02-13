import React from "react";
import { FaHeadphones } from "react-icons/fa";
import "../styles/GetInTouch.css";

const GetInTouch = () => {
    return (
        <div className="container">
            <div className="get-in-touch">
                <FaHeadphones className="icon-get-in-touch" />
                <p className="text">
                    <span className="highlight">Want to delve deeper into the program?</span><br />
                    Share your details to receive expert insights from our program team!
                </p>
                <button className="btn">Get in Touch</button>
            </div>
        </div>
    );
};

export default GetInTouch;
