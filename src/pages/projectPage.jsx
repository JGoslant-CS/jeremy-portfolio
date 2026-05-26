import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div
            style={{
                backgroundImage: "url('/jwebback.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "scroll",
                minHeight: "100vh",
                margin: 0,
                fontFamily: "Arial",
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Neon Divider */}
            <div
                style={{
                    height: "2px",
                    background:
                        "linear-gradient(to right, transparent, #00bfff, transparent)",
                    boxShadow: "0 0 15px #00bfff",
                }}
            />

            {/* Page Content */}
            <div
                style={{
                    padding: "60px",
                    textAlign: "center",
                    color: "black",
                }}
            >
                <h1
                    style={{
                        fontSize: "56px",
                        marginBottom: "50px",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "700",
                        letterSpacing: "-2px",
                        color: "#00bfff",
                        textShadow: "0 0 12px rgba(0,191,255,0.7)",
                    }}
                >
                    Projects
                </h1>

                {/* Project Cards Container */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "35px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Arcadium Card */}
                    <div
                        style={{
                            width: "360px",
                            backgroundColor: "#071a2f",
                            color: "white",
                            padding: "35px",
                            borderRadius: "22px",
                            border: "2px solid #00bfff",
                            boxShadow:
                                "0 0 25px rgba(0,191,255,0.45)",
                            transition: "0.3s",
                        }}
                    >
                        <h2
                            style={{
                                marginBottom: "20px",
                                color: "#00bfff",
                                textShadow: "0 0 12px rgba(0,191,255,0.7)",
                            }}
                        >
                            Arcadium
                        </h2>

                        <p
                            style={{
                                fontSize: "15px",
                                lineHeight: "1.8",
                                color: "#d5eaff",
                            }}
                        >
                            A free classic arcade platform featuring
                            a modern neon-inspired UI design. This was
                            a collaborative class project where I focused
                            primarily on frontend and game development.
                        </p>

                        <a
                            href="http://www.tempclassproject.xyz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="nav-button"
                                style={{
                                    marginTop: "30px",
                                }}
                            >
                                Go To Arcadium
                            </button>
                        </a>
                    </div>

                    {/* Portfolio Card */}
                    <div
                        style={{
                            width: "360px",
                            backgroundColor: "#071a2f",
                            color: "white",
                            padding: "35px",
                            borderRadius: "22px",
                            border: "2px solid #00bfff",
                            boxShadow:
                                "0 0 25px rgba(0,191,255,0.45)",
                            transition: "0.3s",
                        }}
                    >
                        <h2
                            style={{
                                marginBottom: "20px",
                                color: "#00bfff",
                                textShadow: "0 0 12px rgba(0,191,255,0.7)",
                            }}
                        >
                            Personal Portfolio
                        </h2>

                        <p
                            style={{
                                fontSize: "15px",
                                lineHeight: "1.8",
                                color: "#d5eaff",
                            }}
                        >
                            A modern React portfolio website built to
                            showcase my projects, resume, GitHub,
                            LinkedIn, and ongoing software development
                            work.
                        </p>

                        <Link to="/">
                            <button
                                className="nav-button"
                                style={{
                                    marginTop: "30px",
                                }}
                            >
                                View Portfolio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;