import React, { useEffect, useState } from "react";

import { Container } from "./style";

import InfoProps from "../../props/props-info-event";

import bannerInfo from "../../../../assets/img/banner-info.png";

const InfoEvent: React.FC<{ infos: InfoProps[] }> = ({ infos }) => {
  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Container>
      {infos.map((event) => (
        <div className="main-div">
          <div className="column" id="first-column">
            <p id="first-p">
              <span>EVENTO: </span>
              {event.eventName}
            </p>
            <p>
              <span>DATA: </span>
              {formatDate(event.beginDate)}
            </p>
            <p>
              <span>HORÁRIO: </span>
              {formatTime(event.beginDate)}
            </p>
            {event.coffeeValue && (
              <p>
                <span>PREÇO DO COFFEE: </span>
                {event.coffeeValue}
              </p>
            )}
            <p>(Caso o comprador traga seu próprio copo ou caneca NÃO DESCARTÁVEL, R$4,00 serão reembolsados no dia do evento!)</p>
            {event.link_coffee && (
              <p>
                <span>LINK COFFEE: </span>
                <a href={event.link_coffee}>Clique aqui</a>
              </p>
            )}
            {event.link_fotos && (
              <p>
                <span>FOTOS: </span>
                <a href={event.link_fotos}>Clique aqui</a>
              </p>
            )}
            <h1 id="title-inscricoes">INSCRIÇÕES ABERTAS ATÉ {formatDate(event.finalDate)}</h1>
          </div>
          {!isMobile && <div className="line-between"></div>}
          <div className="column" id="second-column">
            <h1>ATIVIDADES DISPONÍVEIS PARA ESSE EVENTO</h1>
            <ul className="activities-ul">
              {event.activities.map((activity, index) => (
                <li key={index} className="activity-li">
                  <a
                    href={`/events/info/${event.id}/activities/${activity.activityId}`}
                  >
                    {activity.activityName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Container>
  );
};
export default InfoEvent;
