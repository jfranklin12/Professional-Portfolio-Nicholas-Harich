import "../../../App.css";
import logo from "../../../images/logo.jpg"
import React from "react";

function MyNavbar({ currentPage, handlePageChange }) {
    return (
        <div className="sticky-top primaryNavbar">
            <div>
                <img className="logo" src={logo} />
            </div>
            <nav>
                    <ul className="primaryNavbar">
                        <li className="navbarText">
                            <a
                                href="#AboutMe"
                                onClick={() => handlePageChange("AboutMe")}
                                id={currentPage === "AboutMe" ? "active" : "navLinks"}
                            >
                                About Me
                            </a>
                        </li>
                        <li className="navbarText">
                            <a
                                href="#MyCareer"
                                onClick={() => handlePageChange("MyCareer")}
                                id={currentPage === "MyCareer" ? "active" : "navLinks"}
                            >
                                My Career
                            </a>
                        </li>
                        <li className="navbarText">
                            <a
                                href="#Contact"
                                onClick={() => handlePageChange("Contact")}
                                id={currentPage === "Contact" ? "active" : "navLinks"}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="navbarText">
                            <a
                                href="#link"
                                onClick={() => handlePageChange("Resume")}
                                id={currentPage === "Resume" ? "active" : "navLinks"}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default MyNavbar;