import React,{ useState } from "react";

import { Container } from "./style";

import InfoProps from "../../props/props-info-event";

const InfoEvent: React.FC<InfoProps> = ({
    id,
    eventName,
    link_image,
    beginDate,
    beginTime,
    link_coffee,
    link_fotos,
    finalData,
    activities
}) => {
    return (
        <Container>
            <div className="main-div">
                <div className="column" id="first-column">
                    <div className="column-img"> <img src={link_image} alt="Banner do evento X"/> </div>
                    <p id="first-p"><span>EVENTO: </span>{eventName}</p>
                    <p><span>DATA: </span>{beginDate}</p>
                    <p><span>HORÁRIO: </span>{beginTime}</p>
                    {link_coffee && <p><span>COFFEE: </span><a href={link_coffee}>Clique aqui</a></p>}
                    {link_fotos &&<p><span>FOTOS: </span><a href={link_fotos}>Clique aqui</a></p>}
                    <h1>INSCRIÇÕES ABERTAS ATÉ {finalData}</h1>
                </div>
                <div className="line-between"></div>
                <div className="column" id="second-column">
                    <h1>ATIVIDADES DISPONÍVEIS PARA ESSE EVENTO</h1>
                    <ul className="activities-ul">
                        {activities.map((activity, index) => (
                            <li key={index} className="activity-li">
                                <a href="/events/info/activity">
                                    {activity}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    )
}
export default InfoEvent;
