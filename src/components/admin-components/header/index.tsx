import React from "react";
import { useLocation } from "react-router-dom";

import Tag from "../card-tag";

import { Container } from "./style";

export default function Header() {
    const location = useLocation();
    const currentPage = location.pathname;

    const isEventsPage = currentPage === "/eventos-admin";
    const isActivitiesPage = currentPage === "/atividades-admin";
    const isCertificatesPage = currentPage === "/certificados-admin";

    return (
        <Container>
            <a href="/"><h1>W<span>i</span>T</h1></a>
            <div className = "menu">
                <Tag className="tag" text="Eventos" isTrue={isEventsPage} link="/eventos-admin"></Tag>
                <Tag className="tag" text="Atividades" isTrue={isActivitiesPage} link="/atividades-admin"></Tag>
                <Tag className="tag" text="Certificados" isTrue={isCertificatesPage} link="/certificados-admin"></Tag>
            </div>
        </Container>
    )
}
