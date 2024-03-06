import React, { useEffect, useState } from "react";

import { getWebEvents } from "api/web/events/get";
import Filter from "components/admin-components/search-bar";
import HeaderBranco from "components/user-components/cell-phone-window/header_branco";
import CardsSet from "components/user-components/computer-window/cards-set";
import Footer from "components/user-components/computer-window/footer";
import Header from "components/user-components/computer-window/header";
import GlobalStyles from "styles/GlobalStyles";
import { Container, FooterContainer, HeaderContainer } from "./style";

const Events: React.FC = () => {
  interface Evento {
    eventId: number;
    eventName: string;
    endDate: string;
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [webEvents, setWebEvents] = useState<Evento[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let data;
        data = await getWebEvents(search);
        setWebEvents(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, [search]);

  const handleTextChange = (newText: string) => {
    setSearch(newText);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log("Realizar pesquisa...");
    // A pesquisa será acionada automaticamente através do useEffect com base na mudança do estado de 'search'
  };

  const cards_data = webEvents.map((evento) => ({
    key: evento.eventId,
    cardNumber: evento.eventId,
    eventName: evento.eventName,
    isSelected: false,
    endDate: new Date(evento.endDate),
  }));

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
      <div className="main-area">
        <Filter onSearch={handleTextChange} />
        <section className="cards-area">
          <div className="cards">
            <CardsSet cards={cards_data} />
          </div>
        </section>
      </div>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Events;
