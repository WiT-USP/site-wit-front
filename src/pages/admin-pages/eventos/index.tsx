import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/admin-components/header"
import Card from "../../../components/admin-components/card"
import Filter from "../../../components/admin-components/search-bar";

import {Container} from "./style"

export default function EventosAdmin() {
    return (
        <Container>
            <GlobalStyles/>
            <Header/>
            <Filter/>
            <div className="eventos">
                {/* <Card name="Evento X" 
                        cardNumber={1} 
                        startTime="Inicio: xxhxxmin, xx/xx/xxxx" 
                        endTime="Inicio: xxhxxmin, xx/xx/xxxx" 
                        event="Evento X" 
                        workload=""
                /> */}
            </div>
        </Container>
    )
}