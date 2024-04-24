import { styled } from "styled-components";

export const Container = styled.div` 
    .banner-home {
        width: 100%;
        margin-top: 100px;
    }

    .main-infos {
        padding-bottom: 5vh;
        border-bottom: 4px dotted var(--cor-roxo);
        width: 76%;
        margin: 0 10vw;
    }

    .title {
        font-weight: 800px;
        color: var(--cor-roxo-escuro);
        font-size: 2.5em;
        padding-top: 1.5em;
    }

    .theme {
        font-weight: 700px;
        color: var(--cor-roxo-escuro);
        font-size: 2em;
    }

    .main-text {
        margin: 1.2em 0;
        font-size: 1.3em;
    }

    .main-references {
        font-size: 0.9em;
        margin-bottom: 1em;
    }

    .btn-area {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .btn {
        background-color: var(--cor-roxo);
        color: var(--cor-branco);
        padding: 0.6em;
        font-size: 1.5em;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-top: 0.4em;
    }

    .btn-text {
        font-weight: 800px;
    }

    .btn:hover {
        background-color: var(--cor-roxo-escuro);
        transform: scale(1.05);
        transition: 1s;
    }

    .patrocinadores {
        margin: 0 10vw;
    }

    .patrocinio {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 5vh 2vw;
        flex-wrap: wrap;
    }

    .gold, .silver, .bronze {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .gold-img {
        height: 80px;
    }

    .gold-text {
        font-size: 2em;
        font-weight: 500;
        margin-top: 2vh;
    }

    .silver-img {
        height: 75px;
    }

    .silver-text {
        font-size: 1.5em;
        font-weight: 500;
        margin-top: 2vh;
    }

    .bronze-img {
        height: 70px;
    }

    .bronze-text {
        font-size: 1em;
        font-weight: 500;
        margin-top: 2vh;
    }

    .programacao-hackathon {
        background: var(--degrade-branco-roxo);
    }

    .itens-programacao-hackathon {
        display: flex;
        align-items: center;
        flex: grid;
    }

    .map-img {
        width: 80%;
        height: 80%;
        margin: 0 5vw;
    }

    #title-programacao {
        margin: 0 10vw;
    }

    .faq {
        padding: 0 10vw;
        background: var(--degrade-roxo-crescente);
        padding-bottom: 8vh;
    }

    .QandA {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
    }

    .line-time {
        height: 400px;
        margin: 0 10vw;
    }

    @media screen and (max-width: 720px) {
        .map-img {
            width: 80vw;
        }

        .title, .theme {
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
        }

        .faq {

        }

        .itens-programacao-hackathon {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const HeaderContainer = styled.header`
    background: var(--cor-branco);
    color: var(--cor-roxo-escuro);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1; 
`;