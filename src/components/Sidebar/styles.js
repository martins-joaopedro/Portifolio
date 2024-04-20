import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
`

export const Container = styled.div`
    width: clamp(300px, 45vw, 500px);
    height: 100%;
    pointer-events: all;
    background: var(--bg-medium);
    

    &.shrink {
        width: 90px;
    }

    &.shrink #links {
       display: none;
    }

    #toggleIcon {
        transform: rotateY(180deg);
    }

    &.shrink #toggleIcon {
        transform: rotateY(0deg);
    }


    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Button = styled.button`
    background: transparent;
    border: none;
    width: 100%;
    height: 70px;

    font-size: 2rem;
    color: var(--txt);
    transition: 0.3s ease-in-out;
    
`

export const LinkButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 70px;
    margin: 10px;
    border-radius: 15px;
    gap: 15px;
    
    background-color: #444;
    font-size: 1.5rem;
    color: var(--txt);
`