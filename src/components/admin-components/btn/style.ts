import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;

    img {
        height: 1.5em;
        margin: 0 0.2em;
    }

    .dynamic-button {
        display: flex;
        font-size: 1.5em;
        padding: 0.1em 0.5em;
        border-radius: 20px;
        height: auto;
        width: auto;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        margin: 0.5em 1em 0.5em 0;
        background: var(--degrade-roxo-rosa);
        color: var(--cor-branco);
        align-items: center;
        font-weight: 700;
    }

    .dynamic-button:hover {
        transform: scale(1.05);
    }

`;