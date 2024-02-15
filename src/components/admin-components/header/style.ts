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

    a {
        padding: 0.2em;
    }

    .tag {
        width: auto;
        height: auto;
        font-size: 1.8em;
        font-weight: 700;
        border-radius: 40px;
        padding: 0.3em 0.5em;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    .menu {
        display: flex;
        gap: 3vw;
        justify-content: flex-end;
    }
`;