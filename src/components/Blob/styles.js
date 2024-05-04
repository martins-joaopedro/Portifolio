import styled, { keyframes } from "styled-components"
 
export const move = keyframes`
    0% {
        transform: translateX(100%) rotate(25deg) scale(0.8);
        background-position: 0%;
        box-shadow: 1px 1px 3rem var(--accent-5);
    }
    
    25% { 
        transform: rotate(25deg) translateY(-40px) scale(0.5);
        background-position: 45%;
        box-shadow: -5px -1px 5rem var(--accent-3), 10px 10px 3rem var(--accent-4);
    }

    50% { 
        background-position: 25%;
        transform: rotate(20deg) translateY(150px) scale(0.7);
        box-shadow: 5px 5px 3rem var(--accent-2);
    }

    75% {   
        background-position: 75%;
        transform: translateX(-40px) rotate(-15deg) scale(1.2); 
        box-shadow: 1px 1px 3rem #6d6d6d5e;
    }

    100% {
        background-position: 95%;
        transform: rotate(0deg) translateX(100%) translateY(100px) scale(0.8);
        box-shadow: -10px -10px 3rem var(--accent-2),10px 10px 3rem var(--accent-1);
    }
`

export const backgroundColors = keyframes`
    0% {
        background-color: #21101085;
    }

    25% {
        background-color: #320c0c83;
    }

    50% {
        background-color: #1a1a1abc;
    }

    75% {
        background-color: #260707ab;
    }
    100% {
        background-color: #4f026286;  
    }
`

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    animation: ${backgroundColors} 10s alternate infinite;
`

export const BlobDiv =  styled.div`
    width: clamp(200px, 35vw, 350px);
    aspect-ratio: 1;
    background: linear-gradient(-45deg, var(--accent-0), var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-4), var(--accent-5));
    background-size: 800%;
    animation: ${move} 10s alternate infinite;
    transition: all 1s;
    border-radius: 35%;
    will-change: auto;
    filter: blur(80px);

    &:hover {
        scale: 1.5;
    }

`