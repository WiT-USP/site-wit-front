import React,{ useState } from "react";

import { Container } from "./style";

import CardProps from "../../props/props-card";

const Card: React.FC<CardProps & { isSelected: boolean; onClick: () => void }> = ({
    eventName,
    link_image,
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
                <img src={link_image}/>
                <h2>[{eventName}]</h2>
            </div>
        </Container>
    )
}
export default Card;
