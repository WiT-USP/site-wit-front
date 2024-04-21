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
import PG from "../../../assets/img/patrocinadores/PG.png";
import Arquivei from "../../../assets/img/patrocinadores/arquivei.png";
import FundacaoEstudar from "../../../assets/img/patrocinadores/FunEstudar.png";
import AdaTech from "../../../assets/img/patrocinadores/ada.png";

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
              </div>
              <div className='patrocinio'>
              </div>
            </div>
            <div className='silver'>
              <div className='patrocinio'>
              </div>
            </div>
            <div className='bronze'>
              <div className='patrocinio'>
              </div>
              <div className='patrocinio'>
              </div>
            </div>
        </div>
        <div className='programacao-hackathon'>
            <h1 className='title' id='title-programacao'>PROGRAMAÇÃO</h1>
            <img className='line-time' src={lineTimeImage} alt="Linha do tempo dos eventos. Primeiro a abetura das inscrições, no dia 21 de abril, depois encerramento, no dia 30 de abril, pré-evento, no dia 11 de maio, e evento, no dia 19 de maio"/>
            <a href="https://www.google.com.br/maps/place/ICMC+-+Instituto+De+Ci%C3%AAncias+Matem%C3%A1ticas+e+de+Computa%C3%A7%C3%A3o/@-22.0067139,-47.8966429,18z/data=!4m14!1m7!3m6!1s0x94b877331ff771f5:0x2f41205c0a5157ab!2sICMC+-+Instituto+de+Ci%C3%AAncias+Matem%C3%A1ticas+e+de+Computa%C3%A7%C3%A3o!8m2!3d-22.0071839!4d-47.8942557!16s%2Fg%2F12cpl8d1t!3m5!1s0x94b877325a2f2381:0x7923e6d8ad682ad1!8m2!3d-22.0070347!4d-47.8949323!16s%2Fg%2F121pdbdw?entry=ttu">
              <img className ='map-img' src={MapImage} alt="Mapa do local do evento, localizado no ICMC USP São Carlos"/>
            </a>
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