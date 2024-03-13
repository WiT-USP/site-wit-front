import Header from "../../../components/admin-components/header";
import Filter from "../../../components/admin-components/search-bar";
import GlobalStyles from "../../../styles/GlobalStyles";

import iconDelete from "../../../assets/img/btn-delete.png";
import iconAdd from "../../../assets/img/icon-add.png";
import iconEdit from "../../../assets/img/icon-edit.png";

import { getAdminActivities } from "api/admin/activities/get";
import { deleteAdminActivityById } from "api/admin/activities/{acitvityId}/delete";
import CardsSet from "components/admin-components/cards-set";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DynamicButton from "../../../components/admin-components/btn";
import { Container } from "./style";

export default function AtividadesAdmin() {
  const navigate = useNavigate()

  interface Activity {
    activityId: number;
    eventName: string;
    startDate: string;
    endDate: string;
    activityName: string;
    cerficated: boolean;
  }

  const [adminActivities, setAdminActivities] = useState<Activity[]>([]);
  const [search, setSearch] = useState("null");
  const [activityId, setActivityId] = useState(-1)

  const handleSelectedActivity = (activitySelected: number) => {
    setActivityId(activitySelected)
  }

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        let data;
        data = await getAdminActivities(search);
        console.log("activities: ", data);
        setAdminActivities(data);
      } catch (error: any) {
        console.error(error);

        const err = error?.response?.data?.error

        if (err) {
          Swal.fire({
            title: err.title,
            text: err.message,
            confirmButtonText: 'OK',
          })
          navigate("/admin/login")
        }
      }
    };
    fetchActivities();
  }, [search]);

  const handleTextChange = (newText: string) => {
    setSearch(newText);
  };

  const cards_data = adminActivities.map((activity) => ({
    key: activity.activityId,
    cardNumber: activity.activityId,
    eventName: activity.activityName,
    isSelected: false,
    endTime: new Date(activity.endDate),
    startTime: new Date(activity.startDate),
    event: activity.eventName,
    workload: "",
    hasCover: false,
    hasCoffee: false,
  }));


  const handleNewActivity = () => {
    navigate("/admin/create/activity")
  }

  const handleDeleteActivity = async () => {
    try {
      if (activityId < 0) throw new Error("evento não existe");
      
      await deleteAdminActivityById(activityId);

      Swal.fire({
        title: "Atividade apagada.",
        text: `A atividade de id ${activityId} foi apagada com sucesso!`,
        confirmButtonText: 'Voltar',
      }).then((result: any) => {
        if(result.isConfirmed) {
          window.location.reload()
        }
      })

    } catch (error: any) {
      console.error("Erro ao enviar a solicitação DELETE:", error);
      const err = error?.response?.data?.error

      if (err) {
        Swal.fire({
          title: err.title,
          text: err.message,
          confirmButtonText: 'OK',
        })
      }
      navigate("/admin/login")
    }
  }

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Filter onSearch={handleTextChange} />
      <section className="cards-area">
        <div className="btn-area">
          <div className="text-area">
            <h2 className="text">Atividades Criadas:</h2>
          </div>
          <div className="buttons">
            <DynamicButton text="Deletar" img_path={iconDelete} onAction={handleDeleteActivity} />
            <DynamicButton text="Editar" img_path={iconEdit} />
            <DynamicButton text="Nova Atividade" img_path={iconAdd} onAction={handleNewActivity} />
          </div>
        </div>
        <div className="cards">
          <CardsSet onSelected={handleSelectedActivity} cards={cards_data} />
        </div>
      </section>
    </Container>
  );
}
