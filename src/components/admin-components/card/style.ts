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

    h1 {
        font-weight: 700;
        font-size: 1.5em;
        color: var(--cor-roxo-escuro);
    }

    h2 {
        font-size: 1.7em;
    }

    p {
        font-size: 1em;

        span{
            font-weight: 700;
        }
    }

    .text-different {
        color: var(--cor-roxo-escuro);

        span{
            color: var(--cor-preto);
        }
    }

    .tags-area {
        flex-direction: row;
    }

    .menu:hover {
        transform: scale(1.05);
    }

    .menu:checked {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0);
    }



`;