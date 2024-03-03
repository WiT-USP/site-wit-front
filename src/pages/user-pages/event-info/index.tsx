import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWebEvent } from "api/web/events/{eventId}/get";
import eventImage from "assets/img/card_image.png";
import HeaderBranco from "components/user-components/cell-phone-window/header";
import FooterBranco from "components/user-components/computer-window/footer-branco";
import Header from "components/user-components/computer-window/header";
import InfoEvent from "components/user-components/computer-window/info-event";
import GlobalStyles from "styles/GlobalStyles";
import { Container, HeaderContainer } from "./style";

const EventInfo: React.FC = () => {
  const { eventId } = useParams();

  interface Evento {
    eventId: number;
    eventName: string;
    endDate: string;
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [webEvent, setWebEvent] = useState<Evento>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getWebEvent(parseInt(eventId!));
        console.log("event: ", data);
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
        <InfoEvent
          id={1}
          eventName="Minicurso Arduíno: parte 2"
          link_image={eventImage}
          beginDate="29/02/24"
          beginTime="11:00"
          link_fotos="#"
          finalData="28/02/24"
          activities={["Minicurso Arduíno", "Roda de Conversa"]}
        />
      </div>
      <FooterBranco />
    </Container>
  );
};
export default EventInfo;
