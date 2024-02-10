import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ModalLogin from "../../components/modal-login";
import CardEvent from "../../components/card-event";
import InfoEvent from  "../../components/info-event"

import {Container} from "./style"

export default function Teste() {
    return (
        <Container>
            <GlobalStyles/>
            <Header/>
            <InfoEvent/>
            <Footer/>
        </Container>
    )
}