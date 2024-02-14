import React from "react";

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
    return (
        <Container>
            <div className = "menu">
                <h1>#{cardNumber}</h1>
                <h2>{name}</h2>
                {startTime && <p><span>Inicio: </span>{startTime}</p>}
                {endTime && <p><span>Fim: </span>{endTime}</p>}
                {event && <p className="text-different"><span>Evento: </span>{event}</p>}
                {workload && <p className="text-different"><span>Carga Horária: </span>{workload}</p>}
            </div>
        </Container>
    )
}

export default Card;