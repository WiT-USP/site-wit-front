import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/admin-components/header"
import Card from "../../../components/admin-components/card"
import Filter from "../../../components/admin-components/search-bar";

import iconDelete from "../../../assets/img/btn-delete.png"
import iconEdit from "../../../assets/img/icon-edit.png"
import iconAdd from "../../../assets/img/icon-add.png"

import {Container} from "./style";
import DynamicButton from "../../../components/admin-components/btn";
import CardsSet from "../../../components/admin-components/cards-set";

export default function AtividadesAdmin() {
    return (
        <Container>
            <GlobalStyles/>
            <Header/>
            <Filter/>
            <section className="cards-area">
                <div className="btn-area">
                    <div className="text-area">
                        <h2 className="text">Atividades Criadas:</h2>
                    </div>
                    <div className="buttons">
                        <DynamicButton text="Deletar" img_path={iconDelete}/>
                        <DynamicButton text="Editar" img_path={iconEdit}/>
                        <DynamicButton text="Nova Atividade" img_path={iconAdd}/>
                    </div>
                </div>
                <div className="cards">
                    <CardsSet/>
                </div>
            </section>
        </Container>
    )
}