import { styled } from "styled-components";

export const Container = styled.div`
    background: var(--cor-rosa);
    display: flex;
    height: 70vh;
    width: 40vw;
    border-radius: 40px;
    color: var(--cor-roxo-escuro);
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 500px;
        font-size: 60px;
    }

    h2 {
        font-weight: 700px;
        font-size: 24px;
    }

    form input {
        border: 1px solid var(--cor-roxo-escuro)
        border-radius: 60px;
        adding: 15px;
    }

    p {
        justify-content: flex-start;
        font-weight: 800px;
        font-size: 20px;
        align-items: flex-end;
    }

    .btn {
        backgound: var(--cor-roxo-escuro);
        color: var(--cor-branco)
    }
`;