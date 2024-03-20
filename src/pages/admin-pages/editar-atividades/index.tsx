  import React, { useEffect, useState } from "react";
import GlobalStyles from "../../../styles/GlobalStyles";

  import MyButton from "../../../components/admin-components/btn";
import Dropdown from "../../../components/admin-components/dropdown";

  import iconFinish from "../../../assets/img/icon-finish.png";
import iconReturn from "../../../assets/img/icon-return.png";

  import { getAdminActivitiesDropdown } from "api/admin/activities/dropdown-events/get";
import { getAdminActivityById } from "api/admin/activities/{acitvityId}/get";
import { updateAdminActivityById } from "api/admin/activities/{acitvityId}/put";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Container } from "./style";

  interface DropdownProps {
    eventId: number
    eventName: string
  }

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
    const { activityId } = useParams();

    const [submitedButton, setSubmitedButton] = useState(false)
    const [options, setOptions] = useState<DropdownProps[]>([])
    const [formValues, setFormValues] = useState<FormValues>({
      nomeEvento: "",
      inicio: "",
      fim: "",
      descricao: "",
      responsavel: "",
      evento: -1,
      data_final: "",
    });

    useEffect(() => {
      const fetchActivityDetails = async (activityId : number) => {
        try {
          const activityData = await getAdminActivityById(activityId);

          console.log("[activityData] ", activityData)
          setFormValues({
            nomeEvento: activityData.activityName,
            inicio: activityData.startTime,
            fim: activityData.endTime,
            descricao: activityData.description,
            responsavel: activityData.responsible,
            evento: activityData.eventId,
            data_final: activityData.registrationAt,
          });
        } catch (error) {
          console.error("Erro ao buscar detalhes da atividade:", error);
        }
      };
      if (activityId) {
        fetchActivityDetails(parseInt(activityId));
      }
      }, [activityId]);

    const handleButtonClick = () => {
      setSubmitedButton(true);
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmission = async (event: React.FormEvent) => {
      event.preventDefault(); // Evita o comportamento padrão de envio de formulário
      try {
        if (activityId) {
          await updateAdminActivityById({ 
            activityId: parseInt(activityId),
            activityName: formValues.nomeEvento,
            responsible: formValues.responsavel,
            description: formValues.descricao,
            startTime: formValues.inicio,
            endTime: formValues.fim,
            registrationAt: formValues.data_final,
            eventId: formValues.evento
          });
        }
        
        navigate(`/admin/activities`);
  
      } catch (error: any) {
        console.error("Erro ao enviar a solicitação PUT:", error);
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

    const handleSelect = (value: number) => {
      console.log('Selected option:', value);
      setFormValues({ ...formValues, ['evento']: value });
    };

    useEffect(() => {
      const fetchActivitiesDropdown = async () => {
        try {
          const data = await getAdminActivitiesDropdown();
          console.log("dropdownEvents: ", data);
          setOptions(data);
        } catch (error: any) {
          console.error(error);
        }
      };
      fetchActivitiesDropdown();
    }, []);

    return (
      <Container>
        <GlobalStyles />
        <div className="header">
          <a href="/admin/activities">
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
            <label id="label-nome" className="label-event">
              Nome do evento:
              <input
                type="text"
                name="nomeEvento"
                value={formValues.nomeEvento}
                onChange={handleInputChange}
              />
            </label>
            <div className="primeira-linha">
              <label id="label-inicio" className="label-event">
                Data de inicio:
                <input
                  type="text"
                  name="inicio"
                  value={formValues.inicio}
                  onChange={handleInputChange}
                  placeholder="DD/MM/AAAA XX:XX"
                />
              </label>
              <label id="label-fim" className="label-event">
                Data de fim:
                <input
                  type="text"
                  name="fim"
                  value={formValues.fim}
                  onChange={handleInputChange}
                  placeholder="DD/MM/AAAA XX:XX"
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
                <Dropdown options={options} onSelect={handleSelect} />
              </label>
            </div>
            <button type="submit" className="btn-finish" onClick={() => handleButtonClick()}>
              <MyButton text="Finalizar" img_path={iconFinish} />
            </button>
          </form>
        </div>
      </Container>
    );
  };

  export default ActivityAdmin;
