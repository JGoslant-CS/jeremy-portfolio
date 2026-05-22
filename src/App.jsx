import { Link } from "react-router-dom";

function App() {
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.82)), url('/jwebback.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                margin: 0,
                fontFamily: "Arial",
            }}
        >
            {/* Navbar */}
            <div
                style={{
                    backgroundColor: "rgba(17,17,17,0.88)",
                    backdropFilter: "blur(10px)",
                    padding: "20px 40px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                }}
            >
                {/* Tabs */}
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                    }}
                >
                    {/* Projects */}
                    <Link to="/projects">
                        <button className="nav-button">
                            Projects
                        </button>
                    </Link>

                    {/* GitHub */}
                    <button className="nav-button">
                        GitHub
                    </button>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/jeremy-goslant-94aa47197/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="nav-button">
                            LinkedIn
                        </button>
                    </a>

                    {/* Resume */}
                    <Link to="/resume">
                        <button className="nav-button">
                            Resume
                        </button>
                    </Link>
                </div>

                {/* JSG Logo */}
                <Link to="/">
                    <button
                        className="nav-button"
                        style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            boxShadow: "0 0 15px #00bfff",
                        }}
                    >
                        JSG
                    </button>
                </Link>
            </div>

            {/* Neon Divider */}
            <div
                style={{
                    height: "2px",
                    background:
                        "linear-gradient(to right, transparent, #00bfff, transparent)",
                    boxShadow: "0 0 15px #00bfff",
                }}
            />

            {/* Hero Section */}
            <div
                style={{
                    paddingTop: "120px",
                    paddingBottom: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                {/* Glowing Card */}
                <div
                    style={{
                        maxWidth: "1000px",
                        padding: "70px",
                        borderRadius: "28px",
                        background: "rgba(255,255,255,0.72)",
                        backdropFilter: "blur(14px)",
                        border:
                            "1px solid rgba(0,191,255,0.35)",
                        boxShadow:
                            "0 0 35px rgba(0,191,255,0.35)",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "76px",
                            marginBottom: "20px",
                            lineHeight: "1.2",
                            color: "#111",
                            textShadow:
                                "0 0 12px rgba(0,191,255,0.25)",
                        }}
                    >
                        Jeremy Goslant
                    </h1>

                    <p
                        style={{
                            fontSize: "28px",
                            color: "#333",
                            marginTop: "0",
                            textShadow:
                                "0 0 10px rgba(0,191,255,0.3)",
                        }}
                    >
                        --Computer Science Major--
                    </p>

                    <p
                        style={{
                            fontSize: "20px",
                            color: "#555",
                            maxWidth: "900px",
                            margin: "40px auto 0 auto",
                            lineHeight: "1.9",
                            padding: "0 20px",
                        }}
                    >
                        I'm currently at the University of Central Florida with a strong
                        interest in full-stack web development, software systems, AI,
                        and modern technology. I enjoy building interactive applications,
                        experimenting with new ideas, and continuously improving my
                        skills through personal projects and hands-on development.
                        I also work at an AVL company where I help build AV racks,
                        integrate inventory database systems, and support technology
                        deployment and organization for large-scale audio and visual setups. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
