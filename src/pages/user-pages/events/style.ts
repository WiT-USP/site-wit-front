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
        margin: 4.5vh 5vw;
    }

    .cards {
        max-height: 55vh;
    }
`;

export const HeaderContainer = styled.header`
    background: var(--degrade-roxo-rosa);
    color: var(--cor-branco);
`;

export const FooterContainer = styled.footer`
    background: var(--degrade-roxo-rosa);
    color: var(--cor-preto);
    height: 15vh;
`;