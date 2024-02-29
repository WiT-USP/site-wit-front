import { styled } from "styled-components";

export const Container = styled.div` 
    background: var(--degrade-roxo-rosa);
    .card-event {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10vw;
        margin-top: 100px;
        padding: 7vh 0;
    }
`;

export const HeaderContainer = styled.header`
    background: var(--cor-branco);
    color: var(--cor-roxo-escuro);
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`;

export const FooterContainer = styled.footer`
`;