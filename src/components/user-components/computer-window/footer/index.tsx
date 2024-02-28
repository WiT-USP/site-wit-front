import React from "react";

import { Container } from "./style";

import IconEmail from "../../../assets/img/icon-email.png";
import IconInsta from "../../../assets/img/icon-instagram.png";
import IconLinkedin from "../../../assets/img/icon-linkedin.png";

export default function Footer() {
    const emailLink = "mailto:womenintech@icmc.usp.br";
    return (
        <Container>
            <div className="footer">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
                <h2>WOMEN IN TECH - ICMC/USP 2024</h2>
                <div className = "social-icons">
                    <li><a href={emailLink}><i className="bi bi-envelope-fill"></i></a></li>
                    <li><a href="https://www.instagram.com/women.in.tech/"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/witwomenintech/"><i className="bi bi-linkedin"></i></a></li>
                </div>
            </div>
        </Container>
    )
}