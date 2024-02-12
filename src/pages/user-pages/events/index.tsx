import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/header";
import Footer from "../../../components/user-components/footer";
import CardEvent from "../../../components/user-components/card-event"

import {Container, HeaderContainer, FooterContainer} from "./style"

export default function Events() {
    return (
        <Container>
            <GlobalStyles/>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <div className = 'events'>
                <h1 className ='title'>EVENTOS EM ABERTO</h1>
                <div className="cards">
                    <CardEvent/>
                </div>
            </div>
            <div className = 'events'>
                <h1 id='title-past' className ='title'>EVENTOS PASSADOS</h1>
                <div className="cards">
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                </div>
            </div>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    )
}