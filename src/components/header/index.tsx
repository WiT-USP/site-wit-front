import React from "react";

import { Container } from "./style";

export default function Header() {
    return (
        <Container className="box">
            <h1>W<span>i</span>T</h1>
            
            <div className = "menu">
                <li><a href="#sobre">SOBRE</a></li>
                <li>|</li>
                <li><a href="#eventos">EVENTOS</a></li>
                <li>|</li>
                <li><a href="#participe">PARTICIPE</a></li>
            </div>
        </Container>
    )
}