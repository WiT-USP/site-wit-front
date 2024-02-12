import { styled } from "styled-components";

export const Container = styled.footer`
    background: var(--cor-branco);
    display: flex;
    height: 146px;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    h2 {
        color: var(--cor-roxo-escuro);
        font-weight: 800;
        font-size: 20px;
    }

    li {
        display: inline-block;
        margin: 0 5px;
    }
`;