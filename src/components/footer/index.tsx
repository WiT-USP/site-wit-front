import React from "react";

import { Container } from "./style";

import IconEmail from "../../assets/img/icon-email.png";
import IconInsta from "../../assets/img/icon-instagram.png";
import IconLinkedin from "../../assets/img/icon-linkedin.png";

export default function Footer() {
    const emailLink = "mailto:womenintech@icmc.usp.br";
    return (
        <Container>
            <h2>WOMEN IN TECH - ICMC/USP 2024</h2>
            <div className = "social-icons">
                <li><a href={emailLink}><img src={IconEmail} alt="Logo e-mail" /></a></li>
                <li><a href="https://www.instagram.com/women.in.tech/"><img src={IconInsta} alt="Logo Instagram" /></a></li>
                <li><a href="https://www.linkedin.com/company/witwomenintech/"><img src={IconLinkedin} alt="Logo Linkedin" /></a></li>
            </div>
        </Container>
    )
}