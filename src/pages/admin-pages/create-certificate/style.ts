import { styled } from "styled-components";

export const Container = styled.div` 
    background: var(--degrade-roxo-rosa);
    height: 100vh;

    .header {
        background: var(--cor-branco);
        display: flex;
        height: 80px;
        width: 100%;
        justify-content: space-between;
        padding: 0 5vw;
        align-items: center;
        color: var(--cor-roxo-escuro);
    }

    .logo {
        margin: 0 42vw 0 0;
    }

    h1 {
        font-family: var(--font-logo);
        font-weight: 700;
        font-size: 40px;
    
        span {
          font-size: 30px;
        }

    }

    .forms-event {
        background: var(--cor-branco);
        border-radius: 20px 20px 0 0;
        margin: 5vh 5vw;
        min-height: 86.4vh;
        height: auto;
    }

    .label-event {
        color: var(--cor-roxo-escuro);
        font-weight: 700;
        font-size: 1.5em;
        padding: 0.3em;
        display: flex;
        flex-direction: column;
    }

    input {
        border: 1px solid var(--cor-roxo-escuro);
        border-radius: 20px;
        height: auto;
        padding: 0.5em;
    }

    textarea {
        border: 1px solid var(--cor-roxo-escuro);
        border-radius: 20px;
        height: auto;
        padding: 0.5em;
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 5vh 5vw;
    }

    #label-carga {
        width: 20%;
    }

    #label-atividade {
        width: 75%;
    }

    #input-template {
        border: none;
        border-radius: 0;
        padding: 10px 0;
    }

    .primeira-linha {
        display: flex;
        flex-wrap: wrap;
        gap: 5%; 
    }

    .btn-finish {
        position: absolute;
        top: 0.5vh;
        right: 2vw;
    }
`;