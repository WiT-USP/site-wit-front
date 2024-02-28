import { styled } from "styled-components";

export const Container = styled.footer`
    .footer {
        background: var(--degrade-roxo-rosa);
        display: flex;
        height: 15vh;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }

    h2 {
        color: var(--cor-branco);
        font-weight: 800;
        font-size: 1.2em;
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

    @media screen and (max-width: 700px) {
        .footer {
            height: 20vh;
            padding: 0 5vw;
        }

        .bi {
            font-size: 30px;
        }

        h2 {
            font-size: 1.1em;
        }
        
        .social-icons {
            display: flex;
            felx-direction: colunm;
        }
    }

`;