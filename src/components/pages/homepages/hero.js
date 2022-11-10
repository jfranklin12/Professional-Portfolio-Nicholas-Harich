import "../../../App.css";
import React from "react";
import backgroundImage from "../../../images/backgroundImage.jpg"
import { Overlay } from "react-bootstrap";

function Header() {
    return (
        <div className="hero">
            <h1>
                Nick Harich
            </h1>
            <div className="Overlay" style={{background: `url(${backgroundImage})`}}/>
        </div>
    )
}

export default Header;