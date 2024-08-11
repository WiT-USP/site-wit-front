import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 5vw;

    .menu {
        display: flex;
        justify-content: right;
        flex-wrap: wrap;
    }

    h1 {
        font-family: var(--font-logo);
        font-weight: 700;
        font-size: 40px;
    
        span {
          font-size: 30px;
        }

    }
    
    a:hover, #selective-header-btn:hover{
        color: var(--cor-roxo-claro);
    }

    #selective-header-btn {
        font-weight: 500;
        background: none;
    }

    li {
        font-weight: 500;
        font-size: 25px;
        display: inline-block;
        margin: 0 5px;
    }
`;