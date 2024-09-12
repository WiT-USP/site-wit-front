// Importe useState e useEffect do React
import React, { useEffect, useState } from "react";

import { postSubscribeUser } from "api/web/events/{eventId}/activities/{acitivity}/subscribe/post";
import { useParams } from "react-router-dom";
import InfoProps from "../../props/props-info-activity";
import { Container } from "./style";

const InfoActivity: React.FC<{ infos: InfoProps[] }> = ({ infos }) => {
  const { eventId, activityId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault(); // Evita o comportamento padrão de envio de formulário
    try {
      await postSubscribeUser(parseInt(eventId!), parseInt(activityId!), {
        name,
        email,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar a solicitação POST:", error);
    }
  };

  useEffect(() => {
    if (submitted) {
      // Limpar campos após submissão bem-sucedida
      setName("");
      setEmail("");
    }
  }, [submitted]);

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
        <div className="main-div" key={event.activityId}>
          <div className="column" id="first-column">
            <p id="first-p">
              <span>ATIVIDADE: </span>
              {event.activityName}
            </p>
            {event.subject && (
              <p>
                <span>DESCRIÇÃO: </span>
                {event.subject}
              </p>
            )}
            <p>
              <span>LUGAR: </span>
              {event.local}
            </p>
            <p>
              <span>DATA: </span>
              {formatDate(event.startTime)}
            </p>
            <p>
              <span>HORÁRIO: </span>
              {formatTime(event.startTime)} às {formatTime(event.endTime)}
            </p>
          </div>
          <div className="line-between"></div>
          {event.activityName.toLowerCase().includes('lightning') ? (
            <div className="class-btn">
              <p id="p-descricao"><span>Sobre as Lightning Talks: </span>Sobre as Lightning Talks: são palestras curtas, com objetivo de transmitir conhecimentos e estimular discussões sobre o tema visto. Cada palestrante tem cinco minutos de apresentação e com temática relacionada a ciências, exatas e tecnologia - fica a critério da pessoa fazer uma apresentação em slides, mas não é obrigatório. Vamos dar preferência para inscritas mulheres! Horários das Lightning Talks a definir.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNV_sDIVVe0pnpE3sjyamrYAoUv4kldbH3X9NB8YS95PDdvA/viewform?usp=sharing" className="modal-btn">
                ACESSE O FORMULÁRIO
              </a>
            </div>
          ) : (
            <form className="event-form" onSubmit={handleSubmission}>
              <div id="itens" className="modal">
                <div className="sub-item">
                  <h2 className="modal-text">Nome Completo</h2>
                  <input
                    className="modal-input"
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    placeholder="Entre com seu nome completo"
                  />
                </div>
                <div className="sub-item">
                  <h2 className="modal-text">Email</h2>
                  <input
                    className="modal-input"
                    type="text"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Entre com seu email"
                  />
                </div>
              </div>
              <div className="class-btn">
                <button className="modal-btn" type="submit">
                  INSCREVA-SE
                </button>
              </div>
            </form>
          )}
        </div>
      ))}
    </Container>
  );
};

export default InfoActivity;
