import React, { useState, useEffect } from 'react';
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/computer-window/header";
import HeaderCellPhone from "../../../components/user-components/cell-phone-window/header";
import FooterBranco from "../../../components/user-components/computer-window/footer-branco";
import ToggleButton from 'components/thematic-components/quest&answer';
import ButtonProps from 'components/user-components/props/button-props';

import BannerImage from "../../../assets/img/background-hackathon.png";
import MapImage from "../../../assets/img/mapa.png";
import lineTimeImage from "../../../assets/img/linha_tempo.png"
import Google from "../../../assets/img/patrocinadores/Google.png";
import Amdocs from "../../../assets/img/patrocinadores/amdocs.png";
import Arquivei from "../../../assets/img/patrocinadores/arquivei.png";
import FundacaoEstudar from "../../../assets/img/patrocinadores/FunEstudar.png";
import Cemeai from "../../../assets/img/patrocinadores/cemeai.png";
import AdaTech from "../../../assets/img/patrocinadores/ada.png";
import Venturus from "../../../assets/img/patrocinadores/venturus.png";
import Yampi from "../../../assets/img/patrocinadores/yampi.png";
import Voitto from "../../../assets/img/patrocinadores/voitto.png";

import {Container, HeaderContainer} from "./style"

const HomeHackathon: React.FC = () => {
  const questionsAndAnswers: ButtonProps[] = [
    {
      question: "O que é um hackathon?",
      answer: "É uma competição em que as participantes desenvolvem soluções tecnológicas para algum problema específico."
    },
    {
      question: "Por que participar?",
      answer: "Uma forma muito divertida de aprender como funciona a elaboração de projetos na área de TI e de fazer networking é através de hackathons! Além disso, você e sua equipe colocarão as mãos na massa para criar uma solução para um problema real."
    },
    {
      question: "Quais são os requisitos para participar?",
      answer: "Ser uma mulher cis ou trans e estar matriculada em uma instituição de ensino superior."
    },
    {
      question: "Quantas integrantes cada equipe terá?",
      answer: "As equipes podem ter até 4 participantes."
    },
    {
      question: "O que levar no dia?",
      answer: "Computador e carregador para conseguir desenvolver sua ideia. Caneca ou copo para evitar desperdício de copos plásticos. Teremos coffee, mas se precisar de algum lanchinho a mais tenha em mente que a cantina fica fechada aos fins de semana."
    },
    {
      question: "Ganho certificado?",
      answer: "Sim : )"
    },
  ];

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
        <div className='main-infos'>
          <h1 className ='title'>TEMA</h1>
          <h2 className ='theme'>Soluções para combate à violência de gênero</h2>
          <p className='main-text'>
            A nossa hackathon é uma iniciativa crucial para enfrentar um problema que afeta milhões de mulheres 
            em todo o mundo. De acordo com dados recentes, <b>85% das mulheres já sofreram algum tipo de violência 
            no ambiente doméstico ou em relacionamentos íntimos</b> [1]. Além disso, <b>1 em cada 3 mulheres foi vítima de 
            violência física, sexual ou psicológica</b> [2]. Esses números alarmantes nos motivam a criar soluções 
            inovadoras que utilizem a tecnologia como ferramenta para proteger e empoderar as mulheres. Durante 
            a hackathon, queremos incentivar o desenvolvimento de tecnologias que ofereçam suporte, informação e 
            recursos para as vítimas, além de promover a conscientização e a mudança social. Juntos, podemos 
            fazer a diferença e construir um mundo mais seguro e igualitário para todas as mulheres. 
          </p>
          <p className='main-references'>
            [1] <a href='https://www2.senado.leg.br/bdsf/bitstream/handle/id/603368/DataSenado_12-2021.pdf'>Pesquisa DataSenado: Violência Doméstica e Familiar contra a Mulher</a> <br/>
            [2] <a href='https://g1.globo.com/ciencia-e-saude/noticia/2021/03/09/1-em-cada-3-mulheres-no-mundo-sofre-violencia-fisica-ou-sexual-e-cenario-deve-piorar-com-a-pandemia-diz-oms.ghtml'>Relatório da OMS (Organização Mundial da Saúde)</a>
          </p>
          <div className='btn-area'>
              <a className='btn' href="../../../../docs/Regulamento.pdf" target="_blank"><h3 className='btn-text'>CONFIRA O EDITAL</h3></a>
              <a className='btn' href="../../../../docs/texto_apoio.pdf" target="_blank"><h3 className='btn-text'>LEIA O MATERIAL DE APOIO</h3></a>
              <a className='btn' href="https://docs.google.com/forms/d/e/1FAIpQLSfEN-yBEsChNa8km2LpueVqPdEvJOYmZLEqHlOgKjnT148a-g/viewform"><h3 className='btn-text'>INSCREVA-SE JÁ</h3></a>
          </div>
        </div>
        <div className='patrocinadores'>
            <h1 className='title'>AGRADECIMENTO AOS NOSSOS PATROCINADORES!</h1>
            <div className='gold'>
              <div className='patrocinio'>
                <img className='gold-img' src={Cemeai}/>
                <p className='gold-text'>CEMEAI</p>
              </div>
              <div className='patrocinio'>
                <img className='gold-img' src={Google}/>
                <p className='gold-text'>GOOGLE</p>
              </div>
              <div className='patrocinio'>
              </div>
            </div>
            <div className='silver'>
              <div className='patrocinio'>
                <img className='silver-img' src={Venturus}/>
                <p className='silver-text'>VENTURUS</p>
              </div>
              <div className='patrocinio'>
                <img className='silver-img' src={Yampi}/>
                <p className='silver-text'>YAMPI</p>
              </div>
              <div className='patrocinio'>
                <img className='silver-img' src={Voitto}/>
                <p className='silver-text'>VOITTO</p>
              </div>
            </div>
            <div className='bronze'>
              <div className='patrocinio'>
                <img className='bronze-img' src={FundacaoEstudar}/>
                <p className='bronze-text'>FUNDAÇÃO ESTUDAR</p>
              </div>
              <div className='patrocinio'>
                <img className='bronze-img' src={Arquivei}/>
                <p className='bronze-text'>ARQUIVEI</p>
              </div>
              <div className='patrocinio'>
                <img className='bronze-img' src={Amdocs}/>
                <p className='bronze-text'>AMDOCS</p>
              </div>
              <div className='patrocinio'>
                <img className='bronze-img' src={AdaTech}/>
                <p className='bronze-text'>ADA TECH</p>
              </div>
            </div>
        </div>
        <div className='programacao-hackathon'>
            <h1 className='title' id='title-programacao'>PROGRAMAÇÃO</h1>
            <div className='itens-programacao-hackathon'>
              <img className='line-time' src={lineTimeImage} alt="Linha do tempo dos eventos. Primeiro a abetura das inscrições, no dia 21 de abril, depois encerramento, no dia 30 de abril, pré-evento, no dia 11 de maio, e evento, no dia 19 de maio"/>
              <a href="https://www.google.com.br/maps/place/ONOVOLAB+S%C3%A3o+Carlos/@-22.0239824,-47.895657,17.95z/data=!4m6!3m5!1s0x94b8773d06b8be6d:0x8fc2b322136f2e37!8m2!3d-22.024173!4d-47.8943544!16s%2Fg%2F11hblpj151?entry=ttu">
                <img className ='map-img' src={MapImage} alt="Mapa do local do evento, localizado no ICMC USP São Carlos"/>
              </a>
            </div>
        </div>
        <div className='faq'>
            <h1 className='title'>FAQ</h1>
            <div className='QandA'>
              {questionsAndAnswers.map((qa, index) => (
                <ToggleButton key={index} question={qa.question} answer={qa.answer} />
              ))}
            </div>
        </div>
        <FooterBranco/>
      </Container>
    );
  };
  
export default HomeHackathon;