import React from "react";
import { Container } from "./style";
import Card from "../card";
import CardProps from "../props/props-card";

const CardsSet: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
    const [selectedCardId, setSelectedCardId] = React.useState<number | null>(null);

    const handleClick = (cardNumber: number) => {
        if (selectedCardId === cardNumber) {
            setSelectedCardId(null); // Se clicou no card selecionado, desseleciona
        } else {
            setSelectedCardId(cardNumber); // Se clicou em um novo card, seleciona ele
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
                            startTime={card.startTime}
                            endTime={card.endTime}
                            event={card.event}
                            workload={card.workload}
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