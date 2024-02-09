import React,{ useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './../../assets/img/icon-email.png'

import { Custom } from "./style";


export default function Anchor() {

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
        <Custom>
            <div className ="jumbotron">
                <Container fluid>
                    <Row>
                        <Col>
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>O que é a Maratona?</p>
                            </a>
                        </Col>
                        <Col>
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>Como Participar?</p>
                            </a>
                        </Col>
                        <Col>
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>Seletiva</p>
                            </a>
                        </Col>
                        <Col>
                            <a href="#" onClick={scrollTo0}>
                                <div className="about-icons">
                                    <img src={Image} alt="" />{' '}
                                </div>
                                <p>OBI</p>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Custom>
    )
}
