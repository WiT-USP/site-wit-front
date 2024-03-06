import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWebEvent } from "api/web/events/{eventId}/get";
import HeaderBranco from "components/user-components/cell-phone-window/header";
import FooterBranco from "components/user-components/computer-window/footer-branco";
import Header from "components/user-components/computer-window/header";
import InfoEvent from "components/user-components/computer-window/info-event";
import GlobalStyles from "styles/GlobalStyles";
import { Container, HeaderContainer } from "./style";

import Activities from "../../../components/user-components/props/props-info-activity";

const EventInfo: React.FC = () => {
  const { eventId } = useParams();

  interface Evento {
    eventId: number;
    eventName: string;
    startDate: string;
    endDate: string;
    coffeePaymentURL: string;
    coffeeValue: string;
    galleryURL: string;
    activities: Activities[];
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [webEvent, setWebEvent] = useState<Evento[]>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getWebEvent(parseInt(eventId!));
        setWebEvent(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, [eventId]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const event_infos = webEvent
    ? webEvent.map((evento) => ({
        id: evento.eventId,
        eventName: evento.eventName,
        beginDate: new Date(evento.startDate),
        finalDate: new Date(evento.endDate),
        link_coffee: evento.coffeePaymentURL,
        coffeeValue: evento.coffeeValue,
        link_fotos: evento.galleryURL,
        activities: evento.activities,
      }))
    : [];
  return (
    <Container>
      <GlobalStyles />
      {windowWidth > 700 ? (
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderBranco />
        </HeaderContainer>
      )}
      <div className="card-event">
        <InfoEvent infos={event_infos} />
      </div>
      <FooterBranco />
    </Container>
  );
};
export default EventInfo;
