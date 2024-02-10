import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/img/icon-email.png'

import {Custom} from "./style"

export default function About() {
        //Funções scroll para cada seção

	let scrollTo0 = (event:any) => {
		event.preventDefault();
		let element = document.getElementById('maratona');
		//element.scrollIntoView({ behavior: 'smooth', block: "start"});
	};

    const handleMouseEnter = (event:any) => {
        event.target.style.background = "var(--cor-roxo-claro)"
    };
      const handleMouseLeave = (event:any) => {
        event.target.style.background = "var(--cor-roxo-escuro)"
    };



    return (
        <div id="main-about">
            <GlobalStyles/>
            <Header/>
            <Custom>
                <Container fluid>
                    <Row >
                        <Col>
                            <div>
                                aloha
                            </div>
                        </Col>    
                    </Row>
                    <Row className="jumbotron">
                        <Col className="anchor">
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>Marketing</p>
                            </a>
                        </Col>
                        <Col className="anchor">
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>Eventos</p>
                            </a>
                        </Col>
                        <Col className="anchor">
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>Financeiro</p>
                            </a>
                        </Col>
                        <Col className="anchor">
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>Site</p>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            aloha
                        </div>
                    </Row>
                </Container>
            </Custom>
            <Footer/>
        </div>
    )
}