import React, {useState, useEffect} from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/computer-window/header";
import HeaderBranco from "../../../components/user-components/cell-phone-window/header";
import FooterBranco from "../../../components/user-components/computer-window/footer-branco";
import InfoEvent from "../../../components/user-components/computer-window/info-event";

import {Container, HeaderContainer} from "./style"

import eventImage from "../../../assets/img/card_image.png";

const EventInfo: React.FC = () => {
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
                <InfoEvent
                  id={1}
                  eventName="Minicurso Arduíno: parte 2"
                  link_image= {eventImage}
                  beginDate="29/02/24"
                  beginTime="11:00"
                  endTime="12:00"
                  link_fotos="#"
                  finalData="28/02/24"
                />
            </div>
            <FooterBranco/>
        </Container>
    )
}
export default EventInfo;