import React, { useState, useEffect } from 'react';
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/computer-window/header";
import HeaderCellPhone from "../../../components/user-components/cell-phone-window/header";
import Footer from "../../../components/user-components/computer-window/footer";

import BannerImage from "../../../assets/img/banner-home.png";

import {Container, HeaderContainer, FooterContainer} from "./style"

const Home: React.FC = () => {
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
            <HeaderCellPhone/>
          </HeaderContainer>
        )}
        <img className ='banner-home' src={BannerImage} alt="Banner do Women in Tech"/>
        <h1 className ='insta-title'>Em breve mais novidades... ❤</h1>
        <FooterContainer>
            <Footer/>
        </FooterContainer>
      </Container>
    );
  };
  
export default Home;