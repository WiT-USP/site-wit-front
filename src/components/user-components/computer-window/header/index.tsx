import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export default function Header() {
    const navigate = useNavigate();

    const handleScroll = () => {
        navigate('/');
        setTimeout(() => {
            const targetSection = document.getElementById('targetSection');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0); // Timeout para garantir que a navegação ocorreu antes da rolagem
    };

    return (
        <Container>
            <a href="/"><h1>W<span>i</span>T</h1></a>
            <div className="menu">
                <li><a href="/about">SOBRE</a></li>
                <li>|</li>
                <li><a href="/events">EVENTOS</a></li>
                <li>|</li>
                <li><a href="/hackathon">HACKATHON</a></li>
                <li>|</li>
                <li><button id='selective-header-btn' onClick={handleScroll}>PROCESSO SELETIVO</button></li>
            </div>
        </Container>
    );
}
