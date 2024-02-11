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
        --degrade-roxo-rosa: linear-gradient(103.5deg, var(--cor-roxo-escuro) 8%, var(--cor-rosa) 390%);
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
`;