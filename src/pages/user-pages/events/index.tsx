import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/computer-window/header";
import Footer from "../../../components/user-components/computer-window/footer";
import Filter from "../../../components/admin-components/search-bar";
import CardsSet from "../../../components/user-components/computer-window/cards-set";

import data from "../../../data/fakedataevent.json";

import {Container, HeaderContainer, FooterContainer} from "./style"

export default function Events() {
    return (
        <Container>
            <GlobalStyles/>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <div className="main-area">
                <Filter/>
                <section className="cards-area">
                    <div className="cards">
                        <CardsSet cards={data}/>
                    </div>
                </section>
            </div>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    )
}