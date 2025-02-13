import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a>
                        <img src={logo} alt="Accredian" className="navbar-logo" />
                    </a>
                    <button className="navbar-new-button">Course <ChevronDown style={{ marginLeft: 2, marginTop: 3 }} size={20} /> </button>
                </div>

                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <button className="create-button">Refer & Earn</button>
                    <button className="create-button">Resources</button>
                    <button className="create-button">About Us</button>
                    <button className="login-button">Login</button>
                    <button className="navbar-button">Try for Free</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
