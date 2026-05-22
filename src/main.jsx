import React from "react";
import ReactDOM from "react-dom/client";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from "./App";
import Projects from "./pages/projectPage";
import ResumePage from "./pages/resumePage";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<ResumePage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);