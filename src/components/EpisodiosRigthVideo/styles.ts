import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 8px;
    background: var(--red);
    padding: 0.25rem 1rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.75rem;
    cursor: pointer;
    img{
        width: 30%;
        height: 30%;
    }
    h2{
        padding-left: 10px;
        margin: auto 0;
        font-size: 1.5rem;
    }
`