import { styled } from "styled-components";

export const Container = styled.div` 

    hr {
        display: block;
        margin: 0;
        margin-left: auto;
        margin-right: auto;
        width:50%;
    }

    .events {
        text-align: center;
    }

    .cards-area {
        background: var(--cor-branco);
        border-radius: 20px 20px 0 0;
        margin: 5vh 5vw;
    }

    .main-area {
        margin-top: 150px;
    }
`;

export const HeaderContainer = styled.header`
    background: var(--degrade-roxo-rosa);
    color: var(--cor-branco);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1; 
`;

export const FooterContainer = styled.footer`
    background: var(--degrade-roxo-rosa);
    color: var(--cor-preto);
`;