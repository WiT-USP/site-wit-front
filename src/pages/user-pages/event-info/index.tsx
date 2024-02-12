import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/header";
import FooterBranco from "../../../components/user-components/footer-branco";
import InfoEvent from "../../../components/user-components/info-event";

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