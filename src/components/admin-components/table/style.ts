import { styled } from "styled-components";

export const Container = styled.div`
    .custom-table {
        background: var(--cor-roxo-claro);
        width: 60vw;
        border-collapse: collapse;
        border: 1px solid var(--cor-roxo-escuro);
        min-height: 55vh;
    }

    .custom-table th, .custom-table td {
        border-left: 1px solid var(--cor-roxo-escuro);
        text-align: left;
        padding: 10px;
    }

    .custom-table th {
        border-bottom: 1px solid var(--cor-roxo-escuro);
    }

    .custom-checkbox input[type="checkbox"] {
        appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid var(--cor-roxo-escuro);
        border-radius: 5px;
        outline: none;
        cursor: pointer;
    }

    .custom-checkbox input[type="checkbox"]:checked {
        background-color: var(--cor-roxo-escuro);
        color: var(--cor-branco);
    }

    .page-area {
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-content: center;

    }

    .btn-page {
        padding: 0.5em;
    }
`;