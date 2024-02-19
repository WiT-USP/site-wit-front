import { styled } from "styled-components";

export const Container = styled.footer`
    background: var(--degrade-roxo-rosa);
    display: flex;
    height: 150px;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    h2 {
        color: var(--cor-branco);
        font-weight: 800;
        font-size: 20px;
    }

    li {
        display: inline-block;
        margin: 0 5px;
        padding: 0.6rem;
    }

    .bi {
        color: #fff;
        font-size: 45px;
    }

    .bi:hover {
        color: var(--amarelo);
    }

`;