import React,{ useState } from "react";

import { Container } from "./style";

import CardImage from "../../../../assets/img/card_image.png";

export default function InfoEvent() {
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
                    <div className="column-img"> <img src={CardImage} alt="Banner do evento X"/> </div>
                    <p id="first-p"><span>EVENTO: </span>Mulheres na Engenharia</p>
                    <p><span>DATA: </span>23/11/23</p>
                    <p><span>HORÁRIO: </span>19hs às 21h</p>
                    <p><span>COFFEE: </span><a href="#">[URL]</a></p>
                    <p><span>FOTOS: </span><a href="#">[URL]</a><br/></p>
                </div>
                <div className="line-between"></div>
                <div className="column" id="second-column">
                    <h1>INSCRIÇÕES ABERTAS ATÉ XX/XX</h1>
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
