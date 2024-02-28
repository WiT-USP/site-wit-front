import React from "react";
import CardProps from "../props/props-card";
import { Container } from "./style";

const Card: React.FC<CardProps & { isSelected: boolean; onClick: () => void }> = ({
    cardNumber,
    eventName,
    startTime,
    endTime,
    event,
    workload,
    isSelected,
    onClick
}) => {
    return (
        <Container>
            <div
                className="menu"
                style={{
                    boxShadow: isSelected ? "0px 0px 10px 3px var(--cor-roxo-claro)" : "0px 0px 10px 3px rgba(0, 0, 0, 0.3)"
                }}
                onClick={onClick}
            >
                <h1>#{cardNumber}</h1>
                <h2>{eventName}</h2>
                {startTime && <p><span>Inicio: </span>{startTime}</p>}
                {endTime && <p><span>Fim: </span>{endTime}</p>}
                {event && <p className="text-different"><span>Evento: </span>{event}</p>}
                {workload && <p className="text-different"><span>Carga Horária: </span>{workload}</p>}
                <div className="tags-area">
                    {/* Renderização de tags dinâmicas */}
                </div>
            </div>
        </Container>
    );
};

export default Card;
