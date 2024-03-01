import React from "react";
import { useLocation } from "react-router-dom";

import Tag from "../card-tag";

import { Container } from "./style";

export default function Header() {
    const location = useLocation();
    const currentPage = location.pathname;

    const isEventsPage = currentPage === "/admin/events";
    const isActivitiesPage = currentPage === "/admin/activities";
    const isCertificatesPage = currentPage === "/admin/certificates";

    return (
        <Container>
            <a href="/"><h1>W<span>i</span>T</h1></a>
            <div className = "menu">
                <Tag className="tag" text="Eventos" isTrue={isEventsPage} link="/admin/events"></Tag>
                <Tag className="tag" text="Atividades" isTrue={isActivitiesPage} link="/admin/activities"></Tag>
                <Tag className="tag" text="Certificados" isTrue={isCertificatesPage} link="/admin/certificates"></Tag>
            </div>
        </Container>
    )
}
