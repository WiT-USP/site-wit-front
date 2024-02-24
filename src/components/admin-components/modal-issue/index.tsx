import React, { useState } from 'react';

import Table from "../../../components/admin-components/table";
import MyButton from "../../../components/admin-components/btn";

import iconIssue from "../../../assets/img/icon-issue.png";

import { Container } from "./style";

const ModalIssue: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
            <div className = "modal-custom">
                <div className='buttons'>
                    <button onClick={handleCloseModal} className='btn-esc'>X</button>
                </div>
                <h1 className='modal-title'>Pessoas inscritas na atividade:</h1>
                <Table data={tableData}/>
                <div className='buttons'>
                    <MyButton text="Emitir" img_path={iconIssue}/>
                </div>
            </div>
        </Container>
    )
}
export default ModalIssue;