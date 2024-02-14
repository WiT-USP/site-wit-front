import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;

    .dynamic-button {
        display: flex;
        font-size: 1.8em;
        padding: 0.5px;
        border-radius: 20px;
        width: 6em;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        margin: 0.5em 1em 0.5em 0;
        background: var(--degrade-roxo-rosa);
        color: var(--cor-branco);
        align-items: center;
        font-weight: 700;
    }

    img {
        margin: 0.1em 0.5em;
    }

`;