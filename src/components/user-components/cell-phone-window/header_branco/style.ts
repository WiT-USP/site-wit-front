import { styled } from "styled-components";

export const Container = styled.header`
    width: auto;

    .header-elements {
        display: flex;
        width: 100%;
        height: 100px;
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
    
    a:hover, #selective-header-btn:hover{
        color: var(--cor-roxo-claro);
    }

    #selective-header-btn {
        color: var(--cor-roxo-escuro);
        background: none;
        text-align: left;

    }

    .btn-menu {
        width: 50px;
        height: 50px;
    }

    button {
        background: transparent;
    }

    .lista-menu {
        background: #D7D7D9;
        width: 100vw;
        display: flex;
        flex-direction: column;
        height: auto;
        font-size: 1.5em;
        padding: 5vw;
        color: var(--cor-roxo-escuro);
    }

    .drop-down {
        width: 25px;
        background: var(--cor-roxo-claro);
        position: absolute;
        z-index: 3;
    }
`;