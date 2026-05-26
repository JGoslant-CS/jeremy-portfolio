import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            {/* Tabs */}
            <div className="nav-tabs">

                <NavLink to="/resume">
                    <button className="nav-button">
                        Resume
                    </button>
                </NavLink>

                <NavLink to="/projects">
                    <button className="nav-button">
                        Projects
                    </button>
                </NavLink>

                <button className="nav-button">
                    GitHub
                </button>

                <a
                    href="https://www.linkedin.com/in/jeremy-goslant-94aa47197/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="nav-button">
                        LinkedIn
                    </button>
                </a>
            </div>

            {/* Logo */}
            <NavLink to="/">
                <img
                    src="/jsg_logo.png"
                    alt="JSG Home"
                    className="home-logo"
                />
            </NavLink>
        </div>
    );
}

export default Navbar;