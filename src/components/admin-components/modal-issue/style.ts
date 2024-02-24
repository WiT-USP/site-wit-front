import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--cor-branco);
    border-radius: 20px;
    height: 70vh;
    width: 70vw;

    .btn-esc {
        display: flex;
        font-size: 1.5em;
        padding: 0.1em 0.5em;
        border-radius: 20px;
        height: auto;
        width: auto;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        margin: 0.5em 1em 0.5em 0;
        background: var(--degrade-roxo-rosa);
        color: var(--cor-branco);
        align-items: center;
        font-weight: 700;
    }

    .btn-esc: hover {
        transform: scale(1.05);
    }

    .buttons {
        justify-content: flex-end;
    }

    .modal-title {
        font-weight: 700;
        font-size: 1.5em;
    }

`;