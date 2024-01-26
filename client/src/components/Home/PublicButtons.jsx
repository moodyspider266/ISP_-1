import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function PublicButtons() {
    return (
        <div className="container button-container">
            <label>Students -</label>
            <button className="public-btn"><Link className="public-btn-link" to="/registration-student">New Registration</Link></button><br />
            <label>Organization -</label>
            <button className="public-btn"><Link className="public-btn-link" to="/registration-organization">New Registration</Link></button>
        </div>
    );
}

export default PublicButtons;
