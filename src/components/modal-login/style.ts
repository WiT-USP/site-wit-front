import { styled } from "styled-components";

export const Container = styled.div`
    background: var(--cor-branco);
    display: flex;
    height: 70vh;
    width: 40vw;
    border-radius: 40px;
    color: var(--cor-roxo-escuro);
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 500;
        font-size: 3em;
        margin: 0.5em;
    }

    .modal-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #itens {
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    .modal-text {
        display: flex;
        text-align: left;
        align-items: flex-start;
        justify-content: flex-start;
        font-weight: 700;
        font-size: 1.5em;
        margin: 0.3em;
    }

    .modal-input {
        background: (--cor-branco);
        border: 2px solid var(--cor-roxo-escuro);
        border-radius: 60px;
        padding: 10px;
        width: 20vw;
        font-type: var(--font-family);
    }

    .modal-btn {
        align-items: center;
        background: var(--cor-roxo-escuro);
        color: var(--cor-branco);
        padding: 10px;
        width: 10vw;
        border-radius: 60px;
        font-weight: 800;
        font-size: 1.5em;
        margin: 1.5em;
        hover: #ff0000;        
    }

    .modal-btn:hover{
        background: var(--cor-roxo-claro);
    }

    .modal-p {
        text-align: left;
        font-weight: 800;
        font-size: 1.2em;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0 0 9.5em 2.5em;
    }
`;