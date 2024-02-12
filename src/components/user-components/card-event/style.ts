import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;

    h1 {
        font-weight: 900;
        font-size: 1.5em;
        text-align: center;
        margin: 0.5em;
    }

    .card {
        background: var(--cor-branco);
        width: 350px;
        height: 400px;
        border-radius: 40px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .card:hover {
        transform: scale(1.05);
    }
`;