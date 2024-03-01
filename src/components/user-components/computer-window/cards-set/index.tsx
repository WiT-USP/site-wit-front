import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";
import Card from "../card-event";
import CardProps from "../../props/props-card";

const CardsSet: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
    const [selectedCardId, setSelectedCardId] = React.useState<number | null>(null);

    const handleClick = (cardNumber: number) => {
        if (selectedCardId === cardNumber) {
            setSelectedCardId(null); 
        } else {
            setSelectedCardId(cardNumber);
        }
    };

    const currentDate = new Date();

    return (
        <Container>
            <div className="card-list">
                {cards.map(card => (
                    <div className="unique-card" key={card.cardNumber}>
                        {card.endDate && currentDate <= new Date(card.endDate) ? (
                            <Link to="/eventos-info">
                                <div
                                    className={`unique-card ${selectedCardId === card.cardNumber ? 'selected' : ''}`}
                                    onClick={() => handleClick(card.cardNumber)}
                                >
                                    <Card
                                        cardNumber={card.cardNumber}
                                        eventName={card.eventName}
                                        link_image={card.link_image}
                                        endDate={card.endDate}
                                        isSelected={selectedCardId === card.cardNumber}
                                        onClick={() => handleClick(card.cardNumber)}
                                    />
                                </div>
                            </Link>
                        ) : (
                            <div
                                className={`unique-card ${selectedCardId === card.cardNumber ? 'selected' : ''}`}
                                onClick={() => handleClick(card.cardNumber)}
                            >
                                <Card
                                    cardNumber={card.cardNumber}
                                    eventName={card.eventName}
                                    link_image={card.link_image}
                                    endDate={card.endDate}
                                    isSelected={selectedCardId === card.cardNumber}
                                    onClick={() => handleClick(card.cardNumber)}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default CardsSet;