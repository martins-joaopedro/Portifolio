import styled, { keyframes } from "styled-components";

const reveal = keyframes`
    0% {
        opacity: 0;
        transform: translate(-100%);
        border-width: 0;
    }

    100% {
        opacity: 1;
        transform: translate(0);
        border-width: 1px;
    }
`


export const Container = styled.div`
    color: whitesmoke;
    padding-left: 100px;
    font-size: 2.5rem;
    font-weight: bold;

    border-bottom: 1px solid red;


`
