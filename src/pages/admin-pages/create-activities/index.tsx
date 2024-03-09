import React, { useState } from "react";
import GlobalStyles from "../../../styles/GlobalStyles";

import MyButton from "../../../components/admin-components/btn";
import Dropdown from "../../../components/admin-components/dropdown";

import iconFinish from "../../../assets/img/icon-finish.png";
import iconReturn from "../../../assets/img/icon-return.png";

import { postAdminActivities } from "api/admin/activities/post";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container } from "./style";

interface FormValues {
  nomeEvento: string;
  inicio: string;
  fim: string;
  descricao: string;
  responsavel: string;
  evento: number;
  data_final: string;
}

const ActivityAdmin: React.FC = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>({
    nomeEvento: "",
    inicio: "",
    fim: "",
    descricao: "",
    responsavel: "",
    evento: -1,
    data_final: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault(); 
    try {
      await postAdminActivities({ 
        activityName: formValues.nomeEvento,
        startTime: formValues.inicio,
        endTime: formValues.fim,
        description: formValues.descricao,
        responsible: formValues.responsavel,
        eventId: formValues.evento,
        registrationAt: formValues.data_final
       });

      navigate(`/admin/events`);

    } catch (error: any) {
      console.error("Erro ao enviar a solicitação POST:", error);
      const err = error?.response?.data?.error

      if (err) {
        Swal.fire({
          title: err.title,
          text: err.message,
          confirmButtonText: 'OK',
        })
      }
    }
  };

  // Fazer o get para o dropdown
  // Mostrar nomes dos eventos no dropdown
  // Mas passar o id do evento ao invés do nome para func de post

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
        <form onSubmit={handleSubmission}>
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
