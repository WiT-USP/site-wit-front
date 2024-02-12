import { styled } from "styled-components";

export const Container = styled.div` 

    .events {
        text-align: center;
    }

    .cards {
        display: flex;
        justify-content: center;
        gap: 5vw;
        margin: 5vw;
        margin-top: 2vw;
        flex-wrap: wrap;
    }

    .title {
        font-weight: 800px;
        color: var(--cor-roxo-escuro);
        font-size: 3em;
        margin-top: 3.5em;
    }

    #title-past {
        margin-top: 0;
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