import { styled } from "styled-components";

export const Container = styled.header`
    width: auto;

    .header-elements {
        display: flex;
        height: 100px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 10vw;
    }

    h1 {
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

    .btn-menu {
        width: 50px;
        height: 50px;
    }

    .lista-menu {
        background: #D7D7D9;
        width: 100vw;
        display: flex;
        flex-direction: column;
        height: auto;
        font-size: 1.5em;
        padding: 5vw;
    }

    .drop-down {
        width: 25px;
        background: var(--cor-roxo-claro);
    }
`;