import { styled } from "styled-components";

export const Container = styled.div` 
    .banner-home {
        width: 100%;
        margin-top: 100px;
    }

    .selective-title {
        font-weight: 800px;
        color: var(--cor-roxo-escuro);
        font-size: 3em;
        text-align: center;
        margin: 1.5em 1.5em 1em 1.5em;
    }

    .selective-text {
        font-size: 1.5em;
        text-align: center;
        margin: 0 4em;
        margin-bottom: 2em;
    }

    .selective-btn-area {
        display: flex;
        justify-content: center;
        margin: 0 20vw;
        margin-bottom: 5vh;
    }

    .selective-btn {
        font-size: 1.7em;
        font-weight: 800;
        padding: 1em;
        background: var(--cor-rosa);
        color: var(--cor-branco);
        border-radius: 10px;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        .selective-title {
            font-size: 2.3em;
        }

        .selective-text {
            font-size: 1.4em;
        }

        .selective-btn {
        }
    }

    @media screen and (max-width: 700px) {
        .banner-home {
            width: 100%;
        }
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

    button {
        color: var(--cor-roxo-escuro);
    }

`;

export const FooterContainer = styled.footer`
    background: var(--degrade-roxo-rosa);
    color: var(--cor-preto);
`;