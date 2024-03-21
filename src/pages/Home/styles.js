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
    position: absolute;
    bottom: 15px;
    animation: ${move} 2s ease-in-out infinite reverse;
`