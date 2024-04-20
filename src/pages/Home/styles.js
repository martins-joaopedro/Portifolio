import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    height: 100vh;
    background-color: var(--bg-dark);
    color: aliceblue !important;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    scroll-snap-align: start;
`

const move = keyframes`
    0% {
        padding: 0;
        opacity: 0;
    }
    50% {
        opacity: 0.8;
        padding: 10px;
    }
    100% {
        padding: 0;
        opacity: 0;
    }
`

export const Information = styled.div`
    text-align: center;
    position: absolute;
    bottom: 15px;
    animation: ${move} 2s ease-in-out infinite reverse;
`

export const Text = styled.div`
    z-index: 1;
    text-align: center;
    opacity: 0.8;

    p {
        font-size: 1.5rem;
    }
    
    h1 {
        font-size: 3rem;
        font-weight: bold;
    }
`