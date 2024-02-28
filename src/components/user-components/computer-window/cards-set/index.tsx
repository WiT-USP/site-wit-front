import React from "react";
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

    return (
        <Container>
            <div className="card-list">
                {cards.map(card => (
                    <div
                        className={`unique-card ${selectedCardId === card.cardNumber ? 'selected' : ''}`}
                        key={card.cardNumber}
                        onClick={() => handleClick(card.cardNumber)}
                    >
                        <Card
                            cardNumber={card.cardNumber}
                            eventName={card.eventName}
                            link_image={card.link_image}
                            isSelected={selectedCardId === card.cardNumber}
                            onClick={() => handleClick(card.cardNumber)}
                        />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default CardsSet;