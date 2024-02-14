import { styled } from "styled-components";

export const Container = styled.div`

    .search-bar {
        display: flex;
        justify-content: center;
        margin: 2vw;
    }

    .input-search {
        height: 3em;
        border-radius: 20px;
        width: 40%;
        outline: none;
        text-indent: 8.5em;
        fext-font: var(--font-family);
    }

    .search-btn {
        z-index: 1; 
        position: fixed;
        top: 16.5vh;
        left: 31vw;
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

