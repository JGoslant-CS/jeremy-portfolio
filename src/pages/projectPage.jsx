import { Link } from "react-router-dom";

function Projects() {
    return (
        <div
            style={{
                backgroundColor: "white",
                minHeight: "100vh",
                margin: 0,
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
                        marginBottom: "20px",
                    }}
                >
                    Projects
                </h1>

                {/* link */}
                <p
                    style={{
                        fontSize: "15px",
                        color: "#555",
                    }}
                >
                    Below is a free classic arcade platform featuring a modern neon-inspired UI design. This was a collaborative class project where I focused primarily on frontend and game development. You can explore the website freely, but creating an account is required to play games and track scores on the leaderboard.
                </p>

                <a
                    href="http://www.tempclassproject.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        marginTop: "30px",
                        fontSize: "20px",
                        color: "#00bfff",
                        textDecoration: "none",
                        border: "2px solid #00bfff",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        boxShadow: "0 0 10px #00bfff",
                        transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#00bfff";
                        e.currentTarget.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#00bfff";
                    }}
                >
                    Go To Arcadium
                </a>
            </div>
        </div>
    );
}

export default Projects;