import { styled } from "styled-components";

export const Container = styled.div`

    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 4vw; 
        padding: 1vh;
        overflow: auto;
        max-height: 49vh;
    }

    @media screen and (max-width: 1344px) {
        .card-list {
        max-height: 43vh;
    }
  }
`;

