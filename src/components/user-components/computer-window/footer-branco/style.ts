import { styled } from "styled-components";

export const Container = styled.footer`
    background: var(--cor-branco);
    display: flex;
    height: 15vh;
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

    @media screen and (max-width: 700px) {
        .footer {
            height: 20vh;
            padding: 0 5vw;
            justify-content: center;
            ali
            display: flex;
            flex: wrap;
            gap: 2vw;
            flex-direction: colunm;
        }

        .bi {
            font-size: 45px;
        }

        h2 {
            font-size: 1.1em;
            margin: 1em;
        }
        
        .social-icons {
            display: flex;
            flex-direction: colunm;
        }

        .title {
            width: 400px;
        }
    }
`;