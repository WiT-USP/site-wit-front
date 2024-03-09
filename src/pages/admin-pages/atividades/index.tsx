import Header from "../../../components/admin-components/header";
import Filter from "../../../components/admin-components/search-bar";
import GlobalStyles from "../../../styles/GlobalStyles";

import iconDelete from "../../../assets/img/btn-delete.png";
import iconAdd from "../../../assets/img/icon-add.png";
import iconEdit from "../../../assets/img/icon-edit.png";

import { getAdminActivities } from "api/admin/activities/get";
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
            <DynamicButton text="Deletar" img_path={iconDelete} />
            <DynamicButton text="Editar" img_path={iconEdit} />
            <a href="/admin/create/activity">
              <DynamicButton text="Nova Atividade" img_path={iconAdd} />
            </a>
          </div>
        </div>
        <div className="cards">
          <CardsSet cards={cards_data} />
        </div>
      </section>
    </Container>
  );
}
