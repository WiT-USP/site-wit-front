import { styled } from "styled-components";

export const Custom = styled.header`
background: var( --cor-branco);

a {
    display:flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-type: var(--font-logo);
    font-size: 2em;
    color: var(--cor-roxo-escuro);
}

p {
    text-justify: inter-word;

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

.icon-target {
    font-type: var(--font-family);
    font-size: 1.5em;
    color: var(--cor-roxo);
}

.icon-target h2 {
    color:#fff;
}

.icon-target i {
    background-color:#fff;
    border-radius:100px;
    height: 6rem;
    width: 6rem;
    justify-content: center;
    align-items: center;
    display: flex;
}

.icon-target :hover {
    color: var( --amarelo);
}

.jumbotron {
    padding: 1rem 1rem;
    margin-bottom: 2rem;
    background: var(--degrade-roxo-rosa2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.about {
    background: var( --degrade-branco-rosa);
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

}

.anchor {
    padding: 3rem;
}

.listing h1 {
    text-align: center;

}

.bi {
    font-size: 50px;
}


`;