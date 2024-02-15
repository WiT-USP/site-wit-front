import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    text-align: center;
    margin-top: 3em;

    .input-search {
        height: 3em;
        border-radius: 20px;
        width: 40%;
        text-indent: 8.5em;
        fext-font: var(--font-family);
    }

    .search-btn {
        position: absolute;
        top: 0.5vh;
        left: 30vw;
        background: transparent;
    }

    .search-btn:active {
        transform: scale(1.05);
    }

    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 6vw; 
        margin: 5vh 5vw;
        padding-bottom: 0.9vh;
        overflow: auto;
        max-height: 80vh;
    }
`;

