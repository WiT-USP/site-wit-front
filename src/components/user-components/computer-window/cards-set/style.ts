import { styled } from "styled-components";

export const Container = styled.div`

    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 4vw; 
        padding: 1vh;
        overflow: auto;
        max-height: 58.9vh;
    }

    @media screen and (max-width: 817px) {
        .card-list {
            justify-content: center;
        }
    }
`;

