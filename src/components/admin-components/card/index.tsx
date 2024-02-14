import React from "react";
import { useLocation } from "react-router-dom";

import DynamicTag from "../card-tag";

import { Container } from "./style";

interface CardProps {
    cardNumber: number;
    name: string;
    startTime: string;
    endTime: string;
    event: string;
    workload: string;
}

const Card: React.FC<CardProps> = ({ cardNumber, name, startTime, endTime, event, workload}) => {
    const location = useLocation();
    const currentPage = location.pathname;

    const isEventsPage = currentPage === "/eventos-admin";
    const isActivitiesPage = currentPage === "/atividades-admin";
    const isCertificatesPage = currentPage === "/certificados-admin";

    return (
        <Container>
            <div className = "menu">
                <h1>#{cardNumber}</h1>
                <h2>{name}</h2>
                {startTime && <p><span>Inicio: </span>{startTime}</p>}
                {endTime && <p><span>Fim: </span>{endTime}</p>}
                {event && <p className="text-different"><span>Evento: </span>{event}</p>}
                {workload && <p className="text-different"><span>Carga Horária: </span>{workload}</p>}
                {isEventsPage && (
                    <>
                        <DynamicTag isTrue={true} text="Cover"/>
                        <DynamicTag isTrue={true} text="Coffee"/>
                    </>
                )}
                {isActivitiesPage && (
                    <>
                        <DynamicTag isTrue={true} text="Certificado"/>
                    </>
                )}
                {isCertificatesPage && (
                    <>
                        <DynamicTag isTrue={true} text="Template"/>
                    </>
                )}
            </div>
        </Container>
    )
}

export default Card;