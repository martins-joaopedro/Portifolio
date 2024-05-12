import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
`

export const Container = styled.div`
    width: clamp(300px, 80vw, 500px);
    height: 100%;
    pointer-events: all;
    background: var(--bg-medium);
    
    &.shrink {
        width: 80px;
        opacity: 0.5;
    }

    &.shrink #name {
        height: 0;
        transform: translateX(-10px);
        opacity: 0;
    }

    #toggleIcon {
        transform: rotateY(180deg);
    }

    &.shrink #toggleIcon {
        transform: rotateY(0deg);
    }

    &:hover {
        opacity: 1;
    }

    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Button = styled.button`
    background: transparent;
    border: none;
    width: 100%;
    height: 10%;
    
    font-size: 2rem;
    color: var(--txt);
    transition: 0.5s ease-in-out; 
`

export const LinkButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    max-height: 60px;

    font-size: 1.2rem;
    color: var(--txt);
    border: 1px solid var(--soft-gray);

    transition: 0.2s ease-in-out;
    
    &:hover {
        background-color: var(--soft-gray);
    }
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1;
    padding: 8px;
    border-radius: 5px;
    font-size: 22px;
`

export const LinkName = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    transition: 0.2s ease-in-out;
`