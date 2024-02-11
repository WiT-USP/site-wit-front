import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "../../components/header";
import Footer from "../../components/footer";

import BannerImage from "../../assets/img/banner-home.png";

import {Container, HeaderContainer, FooterContainer} from "./style"

export default function Home() {
    return (
        <Container>
            <GlobalStyles/>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <img className ='banner-home' src={BannerImage} alt="Banner do Women in Tech"/>
            <h1 className ='insta-title'>INSTAGRAM</h1>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    )
}