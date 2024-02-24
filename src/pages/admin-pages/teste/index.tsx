import React, { useState } from 'react';
import GlobalStyles from "../../../styles/GlobalStyles";

import MyTable from "../../../components/admin-components/table";

import {Container} from "./style"

export default function Teste() {
    const [tableData, setTableData] = useState([
        { id: 1, email: 'pessoa1@example.com', nome: 'Pessoa 1' },
        { id: 2, email: 'pessoa2@example.com', nome: 'Pessoa 2' },
        { id: 3, email: 'pessoa3@example.com', nome: 'Pessoa 3' },
        { id: 4, email: 'pessoa4@example.com', nome: 'Pessoa 4' },
        { id: 5, email: 'pessoa5@example.com', nome: 'Pessoa 5' },
        { id: 6, email: 'pessoa6@example.com', nome: 'Pessoa 6' },
        { id: 7, email: 'pessoa7@example.com', nome: 'Pessoa 7' },
        { id: 8, email: 'pessoa8@example.com', nome: 'Pessoa 8' },
        { id: 9, email: 'pessoa9@example.com', nome: 'Pessoa 9' },
        { id: 10, email: 'pessoa10@example.com', nome: 'Pessoa 10' }
      ]);

    return (
        <Container>
            <GlobalStyles/>
            <MyTable data={tableData}/>
        </Container>
    )
}