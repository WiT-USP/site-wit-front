import React, { useEffect, useState } from "react";
import HeaderBranco from "../../../components/user-components/cell-phone-window/header";
import FooterBranco from "../../../components/user-components/computer-window/footer-branco";
import Header from "../../../components/user-components/computer-window/header";
import InfoActivity from "../../../components/user-components/computer-window/info-activity";
import GlobalStyles from "../../../styles/GlobalStyles";

import { getWebActivity } from "api/web/events/{eventId}/activities/{acitivity}/get";
import { useParams } from "react-router-dom";
import { Container, HeaderContainer } from "./style";

const ActivityInfo: React.FC = () => {
  const { eventId, activityId } = useParams();

  interface Activity {
    activityId: number;
    activityName: string;
    subject: string;
    responsible: string;
    local?: string;
    startTime: string;
    endTime: string;
    certificated: boolean;
    registrationAt: string;
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [webActivity, setWebActivity] = useState<Activity[]>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getWebActivity(
          parseInt(eventId!),
          parseInt(activityId!)
        );
        console.log("event: ", data);
        setWebActivity(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, [eventId, activityId]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const activity_infos = webActivity
    ? webActivity.map((atividade) => ({
        activityId: atividade.activityId,
        activityName: atividade.activityName,
        subject: atividade.subject,
        local: atividade.local,
        responsible: atividade.responsible,
        startTime: new Date(atividade.startTime),
        endTime: new Date(atividade.endTime),
        registrationAt: new Date(atividade.registrationAt),
      }))
    : [];
  return (
    <Container>
      <GlobalStyles />
      {windowWidth > 700 ? (
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderBranco />
        </HeaderContainer>
      )}
      <div className="card-event">
        <InfoActivity infos={activity_infos} />
      </div>
      <FooterBranco />
    </Container>
  );
};
export default ActivityInfo;
