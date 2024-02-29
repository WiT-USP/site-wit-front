import React, { useState, useEffect } from 'react';

import Filter from "../../../components/admin-components/search-bar";
import CardsSet from "../../../components/user-components/computer-window/cards-set";
import Footer from "../../../components/user-components/computer-window/footer";
import Header from "../../../components/user-components/computer-window/header";
import HeaderBranco from "../../../components/user-components/cell-phone-window/header_branco";
import HeaderCellPhone from "../../../components/user-components/cell-phone-window/header";

import GlobalStyles from "../../../styles/GlobalStyles";

import { fakeEvents } from "../../../data/fakedataevent";

import { Container, FooterContainer, HeaderContainer } from "./style";

const Events: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Container>
      <GlobalStyles />
      {windowWidth > 700 ? (
        <HeaderContainer>
          <Header/>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderBranco/>
        </HeaderContainer>
      )}
      <div className="main-area">
        <Filter />
        <section className="cards-area">
          <div className="cards">
            <CardsSet cards={fakeEvents} />
          </div>
        </section>
      </div>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
export default Events;