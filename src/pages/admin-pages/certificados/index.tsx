import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Header from "../../../components/admin-components/header";
import Filter from "../../../components/admin-components/search-bar";
import Table from "../../../components/admin-components/table";
import GlobalStyles from "../../../styles/GlobalStyles";

import iconDelete from "../../../assets/img/btn-delete.png";
import iconAdd from "../../../assets/img/icon-add.png";
import iconEdit from "../../../assets/img/icon-edit.png";
import iconIssue from "../../../assets/img/icon-issue.png";

import DynamicButton from "../../../components/admin-components/btn";
import { Container } from "./style";

import people from "../../../data/fakepeople.json";

const CertificadosAdmin: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleTextChange = (newText: string) => {
    console.log("Novo valor do texto:", newText);
  };

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Filter onSearch={handleTextChange} />
      <section className="cards-area">
        <div className="btn-area">
          <div className="text-area">
            <h2 className="text">Certificados Criados:</h2>
          </div>
          <div className="buttons">
            <DynamicButton text="Deletar" img_path={iconDelete} />
            <DynamicButton text="Editar" img_path={iconEdit} />
            <a href="/admin/create/certificate">
              <DynamicButton text="Novo Certificado" img_path={iconAdd} />
            </a>
            <Button className="exclusive-button" onClick={handleButtonClick}>
              <img className="img-btn" src={iconIssue}></img>
              Emitir
            </Button>
          </div>
        </div>
        <div className="cards">{/* <CardsSet cards={data}/> */}</div>
      </section>
      {showModal && (
        <div className="modal-background">
          <div className="modal-custom">
            <div className="header">
              <h1 className="modal-title">Pessoas inscritas na atividade:</h1>
              <button onClick={handleCloseModal} className="btn-esc">
                X
              </button>
            </div>
            <Table data={people} />
            <div className="btn-issue">
              <DynamicButton text="Emitir" img_path={iconIssue} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};
export default CertificadosAdmin;
