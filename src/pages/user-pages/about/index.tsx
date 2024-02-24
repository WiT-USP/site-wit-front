import React from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../../components/user-components/header";
import Footer from "../../../components/user-components/footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BannerImage from "../../../assets/img/banner-home.png";


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
                            <div className="anchor">
                                <h1>Sobre</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo eget leo sit amet finibus. Suspendisse potenti. Sed dapibus ligula a nisi suscipit, lobortis tincidunt ligula sollicitudin. Proin faucibus, mi a egestas pretium, mi arcu aliquet elit, quis imperdiet metus lorem at lorem. Mauris ut diam vitae justo pulvinar aliquam convallis nec libero. In lobortis vel mauris laoreet laoreet. Proin eget blandit erat, eu gravida ante. Praesent sit amet felis ac massa rutrum sollicitudin. Curabitur non sagittis augue, quis feugiat urna. Phasellus feugiat sollicitudin facilisis. Praesent in tincidunt enim. Donec eu tempus massa.</p>    
                               
                            </div>
                            <div>
                                <img width='700rem' src={BannerImage} alt="Banner do Women in Tech"/>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo eget leo sit amet finibus. Suspendisse potenti. Sed dapibus ligula a nisi suscipit, lobortis tincidunt ligula sollicitudin. Proin faucibus, mi a egestas pretium, mi arcu aliquet elit, quis imperdiet metus lorem at lorem. Mauris ut diam vitae justo pulvinar aliquam convallis nec libero. In lobortis vel mauris laoreet laoreet. Proin eget blandit erat, eu gravida ante. Praesent sit amet felis ac massa rutrum sollicitudin. Curabitur non sagittis augue, quis feugiat urna. Phasellus feugiat sollicitudin facilisis. Praesent in tincidunt enim. Donec eu tempus massa.</p>    
                            </div>
                        </Col>
                        <hr/>
                        <Col>
                            <div className="anchor" id='about-fin'>
                                <h1>FINANCEIRO</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo eget leo sit amet finibus. Suspendisse potenti. Sed dapibus ligula a nisi suscipit, lobortis tincidunt ligula sollicitudin. Proin faucibus, mi a egestas pretium, mi arcu aliquet elit, quis imperdiet metus lorem at lorem. Mauris ut diam vitae justo pulvinar aliquam convallis nec libero. In lobortis vel mauris laoreet laoreet. Proin eget blandit erat, eu gravida ante. Praesent sit amet felis ac massa rutrum sollicitudin. Curabitur non sagittis augue, quis feugiat urna. Phasellus feugiat sollicitudin facilisis. Praesent in tincidunt enim. Donec eu tempus massa.</p>    
                               
                            </div>
                        </Col>
                        <hr/>
                        <Col>
                            <div className="anchor" id='about-mkt'>
                                <h1>MARKETING</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo eget leo sit amet finibus. Suspendisse potenti. Sed dapibus ligula a nisi suscipit, lobortis tincidunt ligula sollicitudin. Proin faucibus, mi a egestas pretium, mi arcu aliquet elit, quis imperdiet metus lorem at lorem. Mauris ut diam vitae justo pulvinar aliquam convallis nec libero. In lobortis vel mauris laoreet laoreet. Proin eget blandit erat, eu gravida ante. Praesent sit amet felis ac massa rutrum sollicitudin. Curabitur non sagittis augue, quis feugiat urna. Phasellus feugiat sollicitudin facilisis. Praesent in tincidunt enim. Donec eu tempus massa.</p>    
                               
                            </div>
                        </Col>
                        <hr/>
                        <Col>
                            <div className="anchor" id='about-site'>
                                <h1>SITE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo eget leo sit amet finibus. Suspendisse potenti. Sed dapibus ligula a nisi suscipit, lobortis tincidunt ligula sollicitudin. Proin faucibus, mi a egestas pretium, mi arcu aliquet elit, quis imperdiet metus lorem at lorem. Mauris ut diam vitae justo pulvinar aliquam convallis nec libero. In lobortis vel mauris laoreet laoreet. Proin eget blandit erat, eu gravida ante. Praesent sit amet felis ac massa rutrum sollicitudin. Curabitur non sagittis augue, quis feugiat urna. Phasellus feugiat sollicitudin facilisis. Praesent in tincidunt enim. Donec eu tempus massa.</p>    
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Custom>
            <Footer/>
        </div>
    )
}