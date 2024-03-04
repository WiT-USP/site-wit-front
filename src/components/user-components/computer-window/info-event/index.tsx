import React from "react";

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
  return (
    <Container>
      {infos.map((event) => (
        <div className="main-div">
          <div className="column" id="first-column">
            <img
              className="img-event"
              src={bannerInfo}
              alt="Banner do evento X"
            />
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
            <h1>INSCRIÇÕES ABERTAS ATÉ {formatDate(event.finalDate)}</h1>
          </div>
          <div className="line-between"></div>
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
