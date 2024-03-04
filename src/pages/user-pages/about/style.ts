import { styled } from "styled-components";

export const Custom = styled.div`
  background: var(--cor-branco);
  padding: 100px 0 0 0;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-type: var(--font-logo);
    font-size: 3em;
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
    width: 50%;
    background-color: var(--cor-rosa);
  }

  .icon-target {
    font-size: 1.5em;
    color: var(--cor-roxo);
  }

  .icon-target h2 {
    color: #fff;
  }

  .icon-target i {
    background-color: #fff;
    border-radius: 100px;
    height: 6rem;
    width: 6rem;
    justify-content: center;
    align-items: center;
    display: flex;
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
    background: var(--degrade-branco-rosa);
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .anchor {
    padding: 9vw;
  }

  .anchor-icon {
    padding: 5vh 4vw;
  }

  .about-text {
    margin-left: 8vw;
    margin-right: 4vw;
  }

  p {
    font-size: 1.5em;
    margin-top: 1em;
  }

  .listing h1 {
    text-align: center;
  }

  .bi {
    font-size: 50px;
  }

  img {
    height: 60vh;
    width: 30vw;
    margin-right: 8vw;
  }

  @media screen and (max-width: 800px) {
    img {
      height: 0;
      width: 0;
    }

    .jumbotron {
      display: flex;
      flex-wrap: wrap;
    }

    .bi {
      display: flex;
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
