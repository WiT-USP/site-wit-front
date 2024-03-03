import React,{ useState } from "react";

import { Container } from "./style";

import InfoProps from "../../props/props-info-activity";

const InfoEvent: React.FC<InfoProps> = ({
    id,
    activityName,
    beginDate,
    beginTime,
    endTime,
    finalData,
    event
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value);
    };

    const handleChangeName = (event: any) => {
        setName(event.target.value);
    };
    return (
        <Container>
            <div className="main-div">
                <div className="column" id="first-column">
                    <p id="first-p"><span>ATIVIDADE: </span>{activityName}</p>
                    <p><span>EVENTO: </span>{event}</p>
                    <p><span>DATA: </span>{beginDate}</p>
                    <p><span>HORÁRIO: </span>{beginTime} até às {endTime}</p>
                </div>
                <div className="line-between"></div>
                <div className="column" id="second-column">
                <h1>INSCRIÇÕES ABERTAS ATÉ {finalData}</h1>
                    <form className="event-form" action="#" method="post">
                        <div id="itens" className="modal">
                            <div className="sub-item">
                                <h2 className="modal-text">Nome Completo</h2>
                                <input className="modal-input" type="text" value={name} onChange={handleChangeName} placeholder="Entre com seu nome completo"/>
                            </div>
                            <div className="sub-item">
                                <h2 className="modal-text">Email</h2>
                                <input className="modal-input" type="text" value={email} onChange={handleChangeEmail} placeholder="Entre com seu email"/>
                            </div>
                        </div>
                        <div className="class-btn">
                            <button className="modal-btn" type="submit" >INSCREVA-SE</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}
export default InfoEvent;
