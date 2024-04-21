import { styled } from "styled-components";

export const Container = styled.div` 
    display: flex;
    justify-content: center;
    margin: 2vh 0 ;
    color: var(--cor-preto);
    background-color: var(--cor-branco);
    flex-direction: column;
    width: 76vw;
    font-weight: 500px;

    .btn-toggle {
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        font-weight: 500px;
    }

    .img-question {
        padding: 15px;
        height: 50px;
    }

    .question-title {
        font-size: 1.5em;
        font-weight: 500px;
        width: 76vw;
        padding: 1em;
    }

    .answer {
        font-size: 1em;
        font-weight: 500px;
        padding: 0.3em;
    }

    .resposta {
        background-color: #D7D7D9;
        color: var(--cor-preto);
        font-size: 1.2em;
    }
`;