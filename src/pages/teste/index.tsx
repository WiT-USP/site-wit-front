import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ModalLogin from "../../components/modal-login";
import Anchor from "../../components/anchor";

import {Container} from "./style"

export default function Teste() {
    return (
        <Container>
            <GlobalStyles/>
            <Header/>
            <ModalLogin/>
            <Anchor/>
            <Footer/>
        </Container>
    )
}