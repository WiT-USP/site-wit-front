import { styled } from "styled-components";

export const Container = styled.div`
    background: var(--cor-branco);
    width: 80vw;
    height: 60vh;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;

    .column {
        display: flex;
        flex-direction: column;
        padding: 2vw;
        width: 40vw;
    }

    #second-column {
        display: flex;
        align-items: center;
    }

    .column-img {
        width: 35vw;
        height: 120px;
        overflow: hidden;
        border-radius: 40px;
    }

    img {
        width: 110%; 
        height: auto; 
        margin-left: -30px;
        margin-top: -180px;
    }

    p {
        font-weight: 500;
        font-size: 1.5em;
        margin-top: 2em;
        line-height: 2.5em;
        
        span {
            font-weight: 700;
            color: var(--cor-roxo-escuro);
        }
    }

    .line-between {
        width: 2px; 
        height: 90%; /* Altura igual à altura das colunas */
        background-color: var(--cor-rosa); 
        margin-top: 3vh;
    }

    h1 {
        color: var(--cor-roxo-escuro);
        font-weight: 700;
        font-size: 1.5em;
        text-align: center;
        margin: 1.5em;
    }

    .modal-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #itens {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-text {
        display: flex;
        text-align: left;
        color: var(--cor-roxo-escuro);
        align-items: flex-start;
        justify-content: flex-start;
        font-weight: 700;
        font-size: 1.5em;
        margin-bottom: 0.3em;
    }

    .modal-input {
        background: (--cor-branco);
        border: 2px solid var(--cor-roxo-escuro);
        border-radius: 60px;
        padding: 10px;
        width: 30vw;
        font-type: var(--font-family);
    }

    .class-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-btn {
        align-items: center;
        background: var(--cor-roxo-escuro);
        color: var(--cor-branco);
        padding: 10px;
        width: 20vw;
        border-radius: 60px;
        font-weight: 800;
        font-size: 1.5em;
        margin: 1.5em;       
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

    .sub-item {
        margin: 0.5em;
    }
    
`;