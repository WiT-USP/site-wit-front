import React from "react";

import { Container } from "./style";

export default function Header() {
    return (
        <Container>
            <a href="/"><h1>W<span>i</span>T</h1></a>
            <div className = "menu">
                <li><a href="/about">SOBRE</a></li>
                <li>|</li>
                <li><a href="/events">EVENTOS</a></li>
                <li>|</li>
                <li><a href="/hackathon">HACKATHON</a></li>
            </div>
        </Container>
    )
}