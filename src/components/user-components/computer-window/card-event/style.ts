import { styled } from "styled-components";

export const Container = styled.div`
    .menu {
        padding: 1em;
        display: flex;
        height: auto;
        width: 343px;
        background: var(--cor-branco);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
        flex-direction: column;
    }

    h2 {
        font-size: 1.3em;
        margin-top: 0.5em;
    }

    .menu:hover {
        transform: scale(1.05);
    }

    .menu:checked {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0);
    }

    @media screen and (max-width: 700px) {
        .menu {
            width: 300px;
        }
    }
`;