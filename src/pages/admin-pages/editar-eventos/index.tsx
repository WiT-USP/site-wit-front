import React, { useEffect, useState } from "react";
import GlobalStyles from "../../../styles/GlobalStyles";

import MyButton from "../../../components/admin-components/btn";

import iconFinish from "../../../assets/img/icon-finish.png";
import iconReturn from "../../../assets/img/icon-return.png";

import { getAdminEventById } from "api/admin/events/{eventId}/get";
import { updateAdminEventById } from "api/admin/events/{eventId}/put";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Container } from "./style";

interface FormValues {
  nomeEvento: string;
  inicio: string;
  fim: string;
  descricao: string;
  banner: File | null;
  valor: number;
  linkPagamento: string;
  linkDrive: string;
  lugar: string;
}

const EventosAdmin: React.FC = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [formValues, setFormValues] = useState<FormValues>({
    nomeEvento: "",
    inicio: "",
    fim: "",
    descricao: "",
    banner: null,
    valor: 0,
    linkPagamento: "",
    linkDrive: "",
    lugar: "",
  });


  useEffect(() => {
    const fetchEventDetails = async (eventId : number) => {
      try {
        const eventData = await getAdminEventById(eventId);
        setFormValues({
          nomeEvento: eventData.eventName,
          inicio: eventData.startDate,
          fim: eventData.endDate,
          descricao: eventData.description,
          banner: eventData.hasCover,
          valor: eventData.coffeeValue,
          linkPagamento: "",
          linkDrive: eventData.driveGalleryLink,
          lugar: eventData.local,
        });
      } catch (error) {
        console.error("Erro ao buscar detalhes do evento:", error);
      }
    };
    if (eventId) {
      fetchEventDetails(parseInt(eventId));
    }
    }, [eventId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormValues({ ...formValues, [name]: files[0] });
    }
  };

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault(); // Evita o comportamento padrão de envio de formulário
    try {
      if (eventId) {
        await updateAdminEventById({ 
          eventId: parseInt(eventId),
          eventName: formValues.nomeEvento,
          startDate: formValues.inicio,
          endDate: formValues.fim,
          description: formValues.descricao,
          coffeeValue: formValues.valor,
          driveGalleryLink: formValues.linkDrive
        });
      }
      
      navigate(`/admin/events`);

    } catch (error: any) {
      console.error("Erro ao enviar a solicitação PUT:", error);
      const err = error?.response?.data?.error

      if (err) {
        Swal.fire({
          title: err.title,
          text: err.message,
          confirmButtonText: 'OK',
        })
      }
    }
  };

  return (
    <Container>
      <GlobalStyles />
      <div className="header">
        <a href="/admin/events">
          <MyButton text="Eventos" img_path={iconReturn} />
        </a>
        <div className="logo">
          <a href="/">
            <h1>
              W<span>i</span>T
            </h1>
          </a>
        </div>
      </div>
      <div className="forms-event">
        <form onSubmit={handleSubmission}>
          <label id="label-nome" className="label-event">
            Nome do evento:
            <input
              type="text"
              name="nomeEvento"
              value={formValues.nomeEvento}
              onChange={handleInputChange}
            />
          </label>
          <div className="linha-data">
            <label id="label-inicio" className="label-event">
              Inicio:
              <input
                type="text"
                name="inicio"
                value={formValues.inicio}
                onChange={handleInputChange}
                placeholder="DD/MM/AA XX:XX"
              />
            </label>
            <label id="label-fim" className="label-event">
              Fim:
              <input
                type="text"
                name="fim"
                value={formValues.fim}
                onChange={handleInputChange}
                placeholder="DD/MM/AA XX:XX"
              />
            </label>
          </div>
          <label id="label-descricao" className="label-event">
            Descrição:
            <textarea
              rows={1}
              cols={50}
              name="descricao"
              value={formValues.descricao}
              onChange={handleInputChange}
              onInput={(e) => {
                if (e.target instanceof HTMLElement) {
                  e.target.style.height = "auto"; // Redefine a altura para automática
                  e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta a altura conforme o conteúdo
                } // Ajusta a altura conforme o conteúdo
              }}
            />
          </label>
          <label id="label-lugar" className="label-event">
            Local:
            <input
              type="text"
              name="lugar"
              value={formValues.lugar}
              onChange={handleInputChange}
            />
          </label>
          {/* <label id="label-banner" className="label-event">
            Banner:
            <input
              id="input-banner"
              type="file"
              accept="image/*"
              name="banner"
              onChange={handleFileChange}
            />
          </label> */}
          <h2 className="title-section">Coffee</h2>
          <div className="segunda-linha">
            <label id="label-valor" className="label-event">
              Valor:
              <input
                type="text"
                name="valor"
                onChange={handleInputChange}
                placeholder="R$ XX,XX"
              />
            </label>
            <label id="label-link" className="label-event">
              Link do pagamento:
              <input
                type="text"
                name="linkPagamento"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <h2 className="title-section">Fotos</h2>
          <label id="label-drive" className="label-event">
            Link do Drive:
            <input type="text" name="linkDrive" onChange={handleInputChange} />
          </label>
          <button type="submit" className="btn-finish">
            <MyButton text="Finalizar" img_path={iconFinish} />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default EventosAdmin;