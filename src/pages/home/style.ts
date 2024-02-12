import { styled } from "styled-components";

export const Container = styled.div` 
    .banner-home {
        width: 100%;
    }

    .insta-title {
        font-weight: 800px;
        color: var(--cor-roxo-escuro);
        font-size: 3em;
        text-align: center;
        margin: 1.5em;
    }
`;

export const HeaderContainer = styled.header`
    background: var(--cor-branco);
    color: var(--cor-roxo-escuro);
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