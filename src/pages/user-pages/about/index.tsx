import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/header";
import Footer from "../../../components/user-components/footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImageAbout from "../../../assets/img/about_photo.png";


import {Custom} from "./style"

export default function About() {


    return (
        <div id="main-about">
            <GlobalStyles/>
            <Header/>
            <Custom>
                <Container fluid>
                    <Row >
                        <Col className="about">
                            <div className="about-text">
                                <h1>Sobre</h1>
                                <p>O Women in Tech tem como objetivo realizar eventos, integração, reuniões e debates com a finalidade de discutir a falta de representatividade feminina nas áreas de ciência e tecnologia, de forma empoderada e nos conectando com outras mulheres, assim incentivamos mais mulheres a ingressarem e permanecerem na área.</p>    
                               
                            </div>
                            <div>
                                <img width='700rem' src={ImageAbout} alt="Banner do Women in Tech"/>
                            </div>                            
                        </Col>    
                    </Row>
                    <Row className="jumbotron">
                        <Col className="anchor">
                            <a className="icon-target" href="#about-event">
                                <i className="bi bi-calendar-event"></i>
                                <h2>Eventos</h2>
                            </a>
                        </Col>
                        <Col className="anchor">
                            <a className="icon-target" href="#about-fin" >
                                <i className="bi bi-piggy-bank-fill"></i>
                                <h2>Financeiro</h2>
                            </a>
                        </Col>
                        <Col className="anchor">
                            <a className="icon-target" href="#about-mkt" >
                                <i className="bi bi-bullseye"></i>
                                <h2>Marketing</h2>
                            </a>
                        </Col>
                        <Col className="anchor">
                            <a className="icon-target" href="#about-site" >
                                <i className="bi bi-laptop"></i>
                                <h2>Site</h2>
                            </a>
                        </Col>
                    </Row>
                    <Row  className="listing">
                        <Col>
                            <div className="anchor" id='about-event'>
                                <h1>EVENTOS</h1>
                                <p>Realização do planejamento e organização de atividades do WiT de modo interno e externo ao grupo, cronogramas de eventos, comunicação com palestrantes, empresas, parcerias com outros grupos de extensão e comunidades, responsável pela integração interna das integrantes, além de criação de roteiro para realização de cada evento.</p>    
                            </div>
                        </Col>
                        <hr/>
                        <Col>
                            <div className="anchor" id='about-fin'>
                                <h1>FINANCEIRO</h1>
                                <p>Realização do planejamento e organização de atividades do WiT, controle, gerenciamento de gastos com eventos e coffee break, organização de vendas de produtos do WiT, além de promover uma comunicação para patrocínios e gerenciar documentações envolvendo financeiramente o grupo.</p>    
                               
                            </div>
                        </Col>
                        <hr/>
                        <Col>
                            <div className="anchor" id='about-mkt'>
                                <h1>MARKETING</h1>
                                <p>Realização do planejamento e divulgação de atividades do WiT de modo interno e externo ao grupo, organização de cronogramas de postagens, processos de entrada, criação de artes, produção de textos e identidade visual, além de realizar a comunicação com a comunidade por meio das redes sociais e email e ser responsável pelo gerenciamento das mídias sociais do grupo.</p>    
                               
                            </div>
                        </Col>
                        <hr/>
                        <Col>
                            <div className="anchor" id='about-site'>
                                <h1>SITE</h1>
                                <p>Criação, planejamento e organização do site WiT, de forma a agregar conhecimentos e estudos aos membros responsáveis, além de criar a identidade visual. Organizada a partir de 3 subdivisões: FrontEnd, BackEnd e Design, busca integrar o conhecimento de todas para tornar o site cada vez melhor. </p>    
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Custom>
            <Footer/>
        </div>
    )
}