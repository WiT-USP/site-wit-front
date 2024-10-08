import React from "react";

import { Container } from "./style";

import CardProps from "../../props/props-card";

import cardImage from "../../../../assets/img/banner-card.png";

const Card: React.FC<
  CardProps & { isSelected: boolean; onClick: () => void }
> = ({ eventName, isSelected, endDate, onClick }) => {
  const isEventPassed = endDate && endDate < new Date();

  return (
    <Container>
      <div
        className="menu"
        style={{
          boxShadow: isSelected
            ? "0px 0px 10px 3px var(--cor-roxo-claro)"
            : "0px 0px 10px 3px rgba(0, 0, 0, 0.3)",
        }}
        onClick={isEventPassed ? undefined : onClick}
      >
        <div className="image-container">
          <img src={cardImage} className="img-card" />
          {isEventPassed && <div className="overlay" />}
        </div>
        <h2>[{eventName}]</h2>
      </div>
    </Container>
  );
};
export default Card;
