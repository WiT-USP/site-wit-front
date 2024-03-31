import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  hr {
    display: block;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .events {
    text-align: center;
  }

  .cards-area {
    background: var(--cor-branco);
    border-radius: 20px 20px 0 0;
    margin: 4.5vh 5vw;
    max-height: 47.6vh;
  }

  .cards {
    max-height: 47.6vh;
  }
`;

export const HeaderContainer = styled.header`
  background: var(--degrade-roxo-rosa);
  color: var(--cor-branco);
  height: 15vh;
`;

export const FooterContainer = styled.footer`
  background: var(--degrade-roxo-rosa);
  color: var(--cor-preto);
  height: 15vh;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
