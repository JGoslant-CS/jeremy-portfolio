import { Link } from "react-router-dom";

function ResumePage() {
    return (
        <div
            style={{
                backgroundColor: "white",
                minHeight: "100vh",
                fontFamily: "Arial",
            }}
        >
            {/* Navbar */}
            <div
                style={{
                    backgroundColor: "#111",
                    padding: "20px 40px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Tabs */}
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                    }}
                >
                    {/* Tab to projects page */}
                    <Link to="/projects">
                        <button className="nav-button">
                            Projects
                        </button>
                    </Link>

                    {/* Tab to Github */}
                    <button className="nav-button">
                        GitHub
                    </button>

                    {/* Tab link to linkedin */}
                    <a
                        href="https://www.linkedin.com/in/jeremy-goslant-94aa47197/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="nav-button">
                            LinkedIn
                        </button>
                    </a>

                    {/* Tab to resume */}
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

            {/* Resume Content */}
            <div
                style={{
                    padding: "40px",
                    textAlign: "center",
                }}
            >
                <h1>Resume</h1>

                <iframe
                    src="/resume.pdf"
                    width="80%"
                    height="900px"
                    style={{
                        border: "2px solid #00bfff",
                        borderRadius: "12px",
                        boxShadow: "0 0 20px #00bfff",
                    }}
                />
            </div>
        </div>
    );
}

export default ResumePage;