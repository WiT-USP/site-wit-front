import { styled } from "styled-components";

export const Container = styled.div`
  .menu {
    padding: 1em;
    display: flex;
    height: auto;
    width: 343px;
    background: var(--cor-branco);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    flex-direction: column;
  }

  h2 {
    font-size: 1.3em;
    margin-top: 0.5em;
    text-align: center;
  }

  .menu:hover {
    transform: scale(1.02);
  }

  .menu:checked {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  }

  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
  }

  .img-card {
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 700px) {
    .menu {
      width: 300px;
    }
  }
`;
