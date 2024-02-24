import { styled } from "styled-components";

export const Container = styled.div` 
    background: var(--cor-roxo-claro);

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
    }

    .cards {
        margin: 5vh 2.2vw;
    }

    .text {
        font-weight: 700;
        font-size: 2em;
        margin: 0 0.5em;
    }

    .modal-area {
        align-items: center;
        justify-content: center;
    }

    .img-btn {
        height: 1.5em;
        margin: 0 0.2em;
    }

    .exclusive-button {
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

    .exclusive-button: hover {
        transform: scale(1.05);
    }

    .modal-custom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: var(--cor-branco);
        border-radius: 20px;
        height: 85vh;
        width: 70vw;
        position: absolute;
        top: 10vh;
        left: 15vw;
        z-index: 2;
        padding: 5vh 5vw 0 5vw;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); 
    }

    .btn-esc {
        display: flex;
        font-size: 1.5em;
        padding: 0.1em 0.5em;
        border-radius: 20px;
        height: auto;
        width: auto;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        background: var(--degrade-roxo-rosa);
        color: var(--cor-branco);
        align-items: center;
        font-weight: 700;
    }

    .btn-esc: hover {
        transform: scale(1.05);
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
    }

    .modal-title {
        font-weight: 700;
        font-size: 1.5em;
    }

    .modal-background {
        background: rgba(0, 0, 0, 0.5);
        padding: 50vh 50vw;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.2em;
    }

    .btn-issue {
        display: flex;
        justify-content: flex-end;
    }
`;