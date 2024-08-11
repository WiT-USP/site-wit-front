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
          {windowWidth > 900 ? (
              <HeaderContainer>
                  <Header/>
              </HeaderContainer>
          ) : (
              <HeaderContainer>
                  <HeaderCellPhone/>
              </HeaderContainer>
          )}
          <img className='banner-home' src={BannerImage} alt="Banner do Women in Tech"/>
          <div className='selective-process' id='targetSection'>
              <h1 className='selective-title'>Faça já parte do melhor grupo de extensão da USP</h1>
              <p className='selective-text'><b>A partir de segunda-feira, 12/08,</b> o Women in Tech abrirá seu processo seletivo para novas integrantes! Se você é uma <b>mulher</b> na graduação ou pós e tem interesse em tecnologia, essa é a sua chance de fazer parte de um grupo acolhedor e inspirador. Nosso objetivo é promover eventos e participar de iniciativas voltadas para TI, proporcionando um ambiente onde você se sinta valorizada e apoiada. <b>Não perca essa oportunidade</b> de crescer e se conectar com outras mulheres incríveis na área de tecnologia!</p>
              <div className='selective-btn-area'><a className='selective-btn'>CLIQUE AQUI PARA SE INSCREVER!</a></div>
          </div>
          <FooterContainer>
              <Footer/>
          </FooterContainer>
      </Container>
  );
};

export default Home;