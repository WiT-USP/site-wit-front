import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/computer-window/header";
import FooterBranco from "../../../components/user-components/computer-window/footer-branco";
import InfoEvent from "../../../components/user-components/computer-window/info-event";

import {Container, HeaderContainer} from "./style"

export default function EventoInfo() {
    return (
        <Container>
            <GlobalStyles/>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <div className="card-event">
                <InfoEvent/>
            </div>
            <FooterBranco/>
        </Container>
    )
}