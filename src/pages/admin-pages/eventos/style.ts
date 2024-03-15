import { styled } from "styled-components";

export const Container = styled.div` 
    background: var(--cor-roxo-claro);
    height: 100vh;

    .btn-area {
        display: flex;
        justify-content: space-between;
        padding: 2vh 1vw 0vh 1vw;
        align-items: center;
    }

    .cards-area {
        background: var(--cor-branco);
        border-radius: 20px 20px 0 0;
        margin: 5vh 5vw;
        height: 66%;
    }

    .buttons {
        display: flex;
        flex-direction: row;
    }

    .cards {
        margin: 5vh 2.2vw;
    }

    .text {
        font-weight: 700;
        font-size: 2em;
        margin: 0 0.5em;
    }
`;