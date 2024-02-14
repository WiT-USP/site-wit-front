import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 111px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background: var(--cor-branco);
    color: var(--cor-roxo-escuro);

    h1 {
        font-family: var(--font-logo);
        font-weight: 700;
        font-size: 40px;
    
        span {
          font-size: 30px;
        }

    }

    li {
        font-weight: 500;
        font-size: 25px;
        display: inline-block;
        margin: 0 1em;
        background: var(--degrade-branco-cinza);
        padding: 0.3em;
        border-radius: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    li:first-child {
        background: var(--degrade-roxo-rosa);
        color: var(--cor-branco);
    }

    li:hover{
        background: var(--cor-roxo-claro);
    }

    a {
        padding: 0.2em;
    }
`;