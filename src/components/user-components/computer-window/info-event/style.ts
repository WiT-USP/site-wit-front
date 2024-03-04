import { styled } from "styled-components";

export const Container = styled.div`
  .main-div {
    background: var(--cor-branco);
    width: 80vw;
    height: auto;
    border-radius: 40px;
    display: flex;
    justify-content: space-around;
  }

  .column {
    display: flex;
    flex-direction: column;
    padding: 2vw;
    width: 35vw;
  }

  #first-column {
    height: auto;
  }

  .img-event {
    width: 100%;
    height: 20vh;
    border-radius: 40px 40px 0 0;
  }

  p {
    font-weight: 500;
    font-size: 1.4em;
    margin: 0.5em;

    span {
      font-weight: 700;
      color: var(--cor-roxo-escuro);
    }
  }

  #first-p {
    margin-top: 1em;
  }

  .line-between {
    width: 2px;
    height: 75vh;
    background-color: var(--cor-rosa);
    margin-top: 5vh;
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

  .activities-ul {
    text-align: center;
  }

  .activity-li {
    font-size: 1.5em;
    color: var(--cor-roxo-escuro);
  }

  .activity-li:hover {
    color: var(--cor-rosa);
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
      padding-top: 12vh;
      border-bottom: 2px dotted var(--cor-rosa);
    }

    p {
      font-size: 1.5em;
      line-height: 1.2em;
      margin-bottom: 0.5em;
    }

    h1 {
      margin: 0 1em 0.5em 1em;
    }

    .modal-text {
      font-size: 1.2em;
    }
  }
`;
