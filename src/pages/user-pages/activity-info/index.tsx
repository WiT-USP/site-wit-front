import React, {useState, useEffect} from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/computer-window/header";
import HeaderBranco from "../../../components/user-components/cell-phone-window/header";
import FooterBranco from "../../../components/user-components/computer-window/footer-branco";
import InfoActivity from "../../../components/user-components/computer-window/info-activity";

import { getWebEvent } from "../../../api/web/events/{eventId}/get";

import {Container, HeaderContainer} from "./style"

const ActivityInfo: React.FC = () => {
    interface Atividade {
      activityName: string; 
      activityId: number; 
    }
    const [webEvent, setWebEvent] = useState<Atividade[]>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const activity_infos = webEvent ? webEvent.map((atividade) => ({
      activityId: atividade.activityId,
      activityName: atividade.activityName,
      
    })) : [];
    return (
        <Container>
            <GlobalStyles/>
            {windowWidth > 700 ? (
                <HeaderContainer>
                <Header/>
                </HeaderContainer>
            ) : (
                <HeaderContainer>
                <HeaderBranco/>
                </HeaderContainer>
            )}
            <div className="card-event">
                <InfoActivity infos={activity_infos}/>
            </div>
            <FooterBranco/>
        </Container>
    )
}
export default ActivityInfo;