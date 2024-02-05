import React from "react"
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/header"
import Footer from "../../components/footer"
import {Container} from "./style"
import ModalLogin from "../../components/modal-login";

export default function Teste() {
    return (
        <Container>
            <GlobalStyles/>
            <Header/>
            <ModalLogin/>
            <Footer/>
        </Container>
    )
}