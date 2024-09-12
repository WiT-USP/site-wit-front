import { styled } from "styled-components";

export const Container = styled.div`
  .main-div {
    background: var(--cor-branco);
    width: 80vw;
    height: auto;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
  }

  .column {
    display: flex;
    flex-direction: column;
    padding: 2vw;
    width: 40vw;
    display: flex;
  }

  #second-column {
    display: flex;
    align-items: center;
  }

  #first-column {
    display: flex;
    justify-content: left;
    text-align: left;
  }

  p {
    font-weight: 500;
    font-size: 1.3em;
    line-height: 2.5em;

    span {
      font-weight: 700;
      color: var(--cor-roxo-escuro);
    }
  }

  #first-p {
    margin-top: 1em;
  }

  .event-form {
    display: flex;
    justify-content: center;
    padding: 2vw;
    flex-direction: column;
  }

  .line-between {
    width: 2px;
    height: 75vh; /* Altura igual à altura das colunas */
    background-color: var(--cor-rosa);
    margin-top: 3vh;
  }

  h1 {
    color: var(--cor-roxo-escuro);
    font-weight: 700;
    font-size: 1.5em;
    text-align: center;
    margin: 1.5em;
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #itens {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-text {
    display: flex;
    text-align: left;
    color: var(--cor-roxo-escuro);
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 1.5em;
    margin-bottom: 0.3em;
  }

  .modal-input {
    background: (--cor-branco);
    border: 2px solid var(--cor-roxo-escuro);
    border-radius: 60px;
    padding: 10px;
    width: 30vw;
  }

  .class-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #p-descricao {
    width: 52vw;
    padding: 0 2vw;
  }

  .modal-btn {
    align-items: center;
    background: var(--cor-roxo-escuro);
    color: var(--cor-branco);
    padding: 10px;
    width: auto;
    border-radius: 60px;
    font-weight: 800;
    font-size: 1.5em;
    margin: 1.5em;
  }

  .modal-btn:hover {
    background: var(--cor-roxo-claro);
  }

  .modal-p {
    text-align: left;
    font-weight: 800;
    font-size: 1.2em;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0 0 9.5em 2.5em;
  }

  .sub-item {
    margin: 0.5em;
  }

  @media screen and (max-width: 750px) {
    .main-div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: auto;
      padding: 0;
    }

    .column {
      width: 100%;
    }

    #first-column {
      padding-top: 4vh;
      border-bottom: 2px dotted var(--cor-rosa);
    }

    .column-img {
      width: 100%;
      height: 15vh;
      overflow: hidden;
      border-radius: 40px 40px 0 0;
      margin-top: -10vh;
    }

    p {
      font-size: 1.2em;
      line-height: 1.2em;
      margin-bottom: 0.5em;
    }

    h1 {
      margin: 0 1em 0.5em 1em;
    }

    .modal-input {
      width: 100%;
    }

    .modal-text {
      font-size: 1.2em;
    }

    .modal-btn {
      width: auto;
    }

    #first-p {
      margin-top: 0;
    }

    .line-between {
      display: none;
    }
  }
`;
