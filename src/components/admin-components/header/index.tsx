import React from "react";

import { Container } from "./style";

export default function Header() {
    return (
        <Container>
            <a href="/"><h1>W<span>i</span>T</h1></a>
            <div className = "menu">
                <li><a href="/eventos-admin">Eventos</a></li>
                <li><a href="#eventos">Atividades</a></li>
                <li><a href="#participe">Certificados</a></li>
            </div>
        </Container>
    )
}
