import React,{ useState } from "react";

import { Container } from "./style";

import InfoProps from "../../props/props-info-event";

const InfoEvent: React.FC<InfoProps> = ({
    id,
    eventName,
    link_image,
    beginDate,
    beginTime,
    endTime,
    link_coffee,
    link_fotos,
    finalData
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
                    <div className="column-img"> <img src={link_image} alt="Banner do evento X"/> </div>
                    <p id="first-p"><span>EVENTO: </span>{eventName}</p>
                    <p><span>DATA: </span>{beginDate}</p>
                    <p><span>HORÁRIO: </span>{beginTime} até às {endTime}</p>
                    {link_coffee && <p><span>COFFEE: </span><a href={link_coffee}>Clique aqui</a></p>}
                    <p><span>FOTOS: </span><a href={link_fotos}>Clique aqui</a></p>
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
