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
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdWdXTotBHwLZQjpmAgYaknlDFF62Hi1Mr_MexTv08t7dn06A/viewform">PARTICIPE</a></li>
            </div>
        </Container>
    )
}