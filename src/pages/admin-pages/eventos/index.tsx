import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/admin-components/header"
import Card from "../../../components/admin-components/card"
import Filter from "../../../components/admin-components/search-bar";

import iconDelete from "../../../assets/img/btn-delete.png"

import {Container} from "./style"
import DynamicButton from "../../../components/admin-components/btn";
import CardsSet from "../../../components/admin-components/cards-set";

export default function EventosAdmin() {
    return (
        <Container>
            <GlobalStyles/>
            <Header/>
            {/* <DynamicButton text="Deletar" img_path={iconDelete}/> */}
            <Filter/>
            <CardsSet/>
        </Container>
    )
}