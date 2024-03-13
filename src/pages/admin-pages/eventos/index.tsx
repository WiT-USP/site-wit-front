import Header from "../../../components/admin-components/header";
import Filter from "../../../components/admin-components/search-bar";
import GlobalStyles from "../../../styles/GlobalStyles";

import iconDelete from "../../../assets/img/btn-delete.png";
import iconAdd from "../../../assets/img/icon-add.png";
import iconEdit from "../../../assets/img/icon-edit.png";

import { getAdminEvents } from "api/admin/events/get";
import { deleteAdminEventById } from "api/admin/events/{eventId}/delete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DynamicButton from "../../../components/admin-components/btn";
import CardsSet from "../../../components/admin-components/cards-set";
import { Container } from "./style";

export default function EventosAdmin() {
  const navigate = useNavigate();

  interface Evento {
    eventId: number;
    eventName: string;
    endDate: string;
    startDate: string;
    event?: string;
    workload?: string;
    hasCover: boolean;
    hasCoffee: boolean;
  }

  const [adminEvents, adminWebEvents] = useState<Evento[]>([]);
  const [search, setSearch] = useState("null");
  const [eventId, setEventId] = useState(-1)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let data;
        data = await getAdminEvents(search);
        adminWebEvents(data);
      } catch (error: any) {
        console.error(error);

        const err = error?.response?.data?.error

        if (err) {
          Swal.fire({
            title: err.title,
            text: err.message,
            confirmButtonText: 'OK',
          })
          navigate("/admin/login")
        }
      }
    };
    fetchEvents();
  }, [search]);

  const handleSelectedEvent = (eventSelected: number) => {
    setEventId(eventSelected)
  }

  const handleTextChange = (newText: string) => {
    setSearch(newText);
  };

  const cards_data = adminEvents.map((evento) => ({
    key: evento.eventId,
    cardNumber: evento.eventId,
    eventName: evento.eventName,
    isSelected: false,
    endTime: new Date(evento.endDate),
    startTime: new Date(evento.startDate),
    event: "",
    workload: "",
    hasCover: evento.hasCover,
    hasCoffee: evento.hasCoffee,
  }));

  const handleNewEvent = () => {
    navigate("/admin/create/event")
  }

  const handleDeleteEvent = async () => {
    try {
      if (eventId < 0) throw new Error("evento não existe");
      
      await deleteAdminEventById(eventId);

      Swal.fire({
        title: "Evento apagado.",
        text: `O evento de id ${eventId} foi apagado com sucesso!`,
        confirmButtonText: 'Voltar',
      }).then((result: any) => {
        if(result.isConfirmed) {
          window.location.reload()
        }
      })

    } catch (error: any) {
      console.error("Erro ao enviar a solicitação DELETE:", error);
      const err = error?.response?.data?.error

      if (err) {
        Swal.fire({
          title: err.title,
          text: err.message,
          confirmButtonText: 'OK',
        })
      }
      navigate("/admin/login")
    }
  }

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Filter onSearch={handleTextChange} />
      <section className="cards-area">
        <div className="btn-area">
          <div className="text-area">
            <h2 className="text">Eventos Criados:</h2>
          </div>
          <div className="buttons">
            <DynamicButton text="Deletar" img_path={iconDelete} onAction={handleDeleteEvent} /> 
            <DynamicButton text="Editar" img_path={iconEdit} />
            <DynamicButton text="Novo Evento" img_path={iconAdd} onAction={handleNewEvent} />
          </div>
        </div>
        <div className="cards">
          <CardsSet onSelected={handleSelectedEvent} cards={cards_data} />
        </div>
      </section>
    </Container>
  );
}
