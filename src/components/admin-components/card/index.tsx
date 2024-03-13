import React from "react";
import { useLocation } from "react-router-dom";
import CardProps from "../props/props-card";

import DynamicTag from "../card-tag";

import { Container } from "./style";

const Card: React.FC<
  CardProps & { isSelected: boolean; onClick: () => void }
> = ({
  cardNumber,
  eventName,
  startTime,
  endTime,
  event,
  workload,
  isSelected,
  onClick,
  hasCover,
  hasCoffee,
}) => {
  const location = useLocation();
  const currentPage = location.pathname;

  const isEventsPage = currentPage === "/admin/events";
  const isActivitiesPage = currentPage === "/admin/activities";
  const isCertificatesPage = currentPage === "/admin/certificates";

  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <Container>
      <div
        className="menu"
        style={{
          boxShadow: isSelected
            ? "0px 0px 10px 3px var(--cor-roxo-claro)"
            : "0px 0px 10px 3px rgba(0, 0, 0, 0.3)",
        }}
        onClick={onClick}
      >
        <h1>#{cardNumber}</h1>
        <h2>{eventName}</h2>
        {startTime && (
          <p>
            <span>Inicio: </span>
            {formatDate(startTime)}, {formatTime(startTime)}
          </p>
        )}
        {endTime && (
          <p>
            <span>Fim: </span>
            {formatDate(endTime)}, {formatTime(endTime)}
          </p>
        )}
        {event && (
          <p className="text-different">
            <span>Evento: </span>
            {event}
          </p>
        )}
        {workload && (
          <p className="text-different">
            <span>Carga Horária: </span>
            {workload}
          </p>
        )}
        <div className="tags-area">
          {isEventsPage && (
            <>
              <DynamicTag isTrue={hasCover} text="Cover" link="#" />
              <DynamicTag isTrue={hasCoffee} text="Coffee" link="#" />
            </>
          )}
          {/* {isActivitiesPage && (
            <>
              <DynamicTag isTrue={true} text="Certificado" link="#" />
            </>
          )} */}
          {isCertificatesPage && (
            <>
              <DynamicTag isTrue={true} text="Template" link="#" />
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Card;
