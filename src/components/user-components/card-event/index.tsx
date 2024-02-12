import React,{ useState } from "react";

import { Container } from "./style";

import CardImage from "../../../assets/img/card_image.png";

export default function CardEvent() {
    return (
        <Container>
            <a href="/eventos-info">
                <div className ="card">
                    <img src={CardImage} alt="Banner do evento X"/>
                    <h1>[EventName]</h1>
                </div>
            </a>
        </Container>
    )
}
