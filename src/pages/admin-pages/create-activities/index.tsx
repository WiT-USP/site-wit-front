import React, { useState } from "react";
import GlobalStyles from "../../../styles/GlobalStyles";

import MyButton from "../../../components/admin-components/btn";
import Dropdown from "../../../components/admin-components/dropdown";

import iconFinish from "../../../assets/img/icon-finish.png";
import iconReturn from "../../../assets/img/icon-return.png";

import { Container } from "./style";

interface FormValues {
  nomeEvento: string;
  inicio: string;
  hora_inicio: string;
  hora_fim: string;
  descricao: string;
  responsavel: string;
  evento: string;
  data_final: string;
}

const ActivityAdmin: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nomeEvento: "",
    inicio: "",
    hora_inicio: "",
    hora_fim: "",
    descricao: "",
    responsavel: "",
    evento: "",
    data_final: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formValues);
  };

  const options_drop = ["AdaLovelaceDay", "Hackathon", "WinX"];

  return (
    <Container>
      <GlobalStyles />
      <div className="header">
        <a href="admin/activities">
          <MyButton text="Atividades" img_path={iconReturn} />
        </a>
        <div className="logo">
          <a href="/">
            <h1>
              W<span>i</span>T
            </h1>
          </a>
        </div>
      </div>
      <div className="forms-event">
        <form onSubmit={handleSubmit}>
          <div className="primeira-linha">
            <label id="label-nome" className="label-event">
              Nome do evento:
              <input
                type="text"
                name="nomeEvento"
                value={formValues.nomeEvento}
                onChange={handleInputChange}
              />
            </label>
            <label id="label-inicio" className="label-event">
              Data de inicio:
              <input
                type="text"
                name="inicio"
                value={formValues.inicio}
                onChange={handleInputChange}
                placeholder="DD/MM/AAAA"
              />
            </label>
            <label id="label-hora-inicio" className="label-event">
              Hora de inicio:
              <input
                type="text"
                name="hora_inicio"
                value={formValues.hora_inicio}
                onChange={handleInputChange}
                placeholder="XX:XX"
              />
            </label>
            <label id="label-hora-fim" className="label-event">
              Hora de término:
              <input
                type="text"
                name="hora_fim"
                value={formValues.hora_fim}
                onChange={handleInputChange}
                placeholder="XX:XX"
              />
            </label>
          </div>
          <label id="label-descricao" className="label-event">
            Descrição:
            <textarea
              rows={1}
              cols={50}
              name="descricao"
              value={formValues.descricao}
              onChange={handleInputChange}
              onInput={(e) => {
                if (e.target instanceof HTMLElement) {
                  e.target.style.height = "auto"; // Redefine a altura para automática
                  e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta a altura conforme o conteúdo
                } // Ajusta a altura conforme o conteúdo
              }}
            />
          </label>
          <div className="segunda-linha">
            <label id="label-responsavel" className="label-event">
              Responsável:
              <input
                type="text"
                name="responsavel"
                value={formValues.responsavel}
                onChange={handleInputChange}
                placeholder="Nome Sobrenome"
              />
            </label>
            <label id="label-data-final" className="label-event">
              Inscrições até:
              <input
                type="text"
                name="data_final"
                value={formValues.data_final}
                onChange={handleInputChange}
                placeholder="DD/MM/AAAA"
              />
            </label>
            <label id="label-evento" className="label-event">
              Evento:
              <Dropdown options={options_drop} />
            </label>
          </div>
          <button type="submit" className="btn-finish">
            <MyButton text="Finalizar" img_path={iconFinish} />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ActivityAdmin;
