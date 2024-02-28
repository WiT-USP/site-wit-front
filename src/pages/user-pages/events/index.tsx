import Filter from "../../../components/admin-components/search-bar";
import CardsSet from "../../../components/user-components/computer-window/cards-set";
import Footer from "../../../components/user-components/computer-window/footer";
import Header from "../../../components/user-components/computer-window/header";
import GlobalStyles from "../../../styles/GlobalStyles";

import { fakeEvents } from "../../../data/fakedataevent";

import { Container, FooterContainer, HeaderContainer } from "./style";

export default function Events() {
  return (
    <Container>
      <GlobalStyles />
      <HeaderContainer>
        <Header />
      </HeaderContainer>
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
