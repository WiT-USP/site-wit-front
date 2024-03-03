import React, {useState, useEffect} from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/computer-window/header";
import HeaderBranco from "../../../components/user-components/cell-phone-window/header";
import FooterBranco from "../../../components/user-components/computer-window/footer-branco";
import InfoActivity from "../../../components/user-components/computer-window/info-activity";

import {Container, HeaderContainer} from "./style"

const ActivityInfo: React.FC = () => {
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
                <InfoActivity
                  id={1}
                  activityName="Minicurso Arduíno: parte 2"
                  beginDate="29/02/24"
                  beginTime="11:00"
                  endTime="12:00"
                  finalData="28/02/24"
                  event="AdaLovelaceDay"
                />
            </div>
            <FooterBranco/>
        </Container>
    )
}
export default ActivityInfo;