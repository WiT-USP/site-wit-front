import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --cor-roxo-escuro: #503F77;
        --cor-roxo: #6B549F;
        --cor-roxo-claro: #A296C3;
        --cor-rosa: #D662AF;
        --amarelo: #F3E838;
        --cor-branco: #F2F2F2;
        --cor-preto: #0D0D0D;
        --degrade-roxo-rosa: linear-gradient(103.5deg, var(--cor-roxo-escuro) 8%, var(--cor-rosa) 350%);
        --degrade-roxo-rosa2: linear-gradient(145deg, var(--cor-roxo-escuro) 35%, var(--cor-rosa) 100%);
        --degrade-branco-cinza: linear-gradient(90deg, #D7D7D9 0%, var(--cor-branco) 75%);
        --degrade-branco-rosa: linear-gradient(180deg, var(--cor-branco) 0%, var(--cor-rosa) 200%);
        --font-family: 'Nunito', sans-serif;
        --font-logo: 'Inter', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: var(--font-family);
        vertical-align: baseline;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        height: 100vh;
    }

    ul, li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
      }      

    body {
        background-color: var(--cor-branco);
    }

    hr {
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        height: 3px;
        width:50%;
        background-color: var(--cor-rosa);
    }
`;