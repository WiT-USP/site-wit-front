import { styled } from "styled-components";

export const Container = styled.header`
    background: var(--cor-roxo-escuro);
    display: flex;
    height: 111px;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    h1 {
        color: var(--cor-branco);
        font-family: var(--font-logo);
        font-weight: 700;
        font-size: 40px;
    
        span {
          font-size: 30px;
        }

    }
    
    a:hover{
        color: var(--cor-roxo-claro);
    }

    li {
        color: var(--cor-branco);
        font-weight: 500;
        font-size: 25px;
        display: inline-block;
        margin: 0 5px;
    }
`;