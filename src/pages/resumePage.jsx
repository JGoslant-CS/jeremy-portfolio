import Navbar from "../components/Navbar";

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

            {/* Resume Content */}
            <div
                style={{
                    padding: "60px",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        marginBottom: "50px",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "700",
                        letterSpacing: "-2px"
                    }}
                >
                    Resume
                </h1>

                <img
                    src="/resumePic1.png"
                    alt="Resume page 1"
                    style={{
                        width: "80%",
                        maxWidth: "900px",
                        border: "2px solid #00bfff",
                        borderRadius: "18px",
                        boxShadow: "0 0 25px rgba(0,191,255,0.5)",
                        marginBottom: "50px",
                    }}
                />

                <img
                    src="/resumePic2.png"
                    alt="Resume page 2"
                    style={{
                        width: "80%",
                        maxWidth: "900px",
                        border: "2px solid #00bfff",
                        borderRadius: "18px",
                        boxShadow: "0 0 25px rgba(0,191,255,0.5)",
                    }}
                />
            </div>
        </div>
    );
}

export default ResumePage;