import styled from "styled-components"

export const Container = styled.div`
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;

    padding-left: 100px;
    background-color: var(--bg-dark);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Section = styled.section`
    border: 1px solid white;
    color: #fff;
    padding: 10px;
    border-radius: 5px;

    &.open #dropdown {
        background-color: red;
        min-height: 300px;
        opacity: 1;
        overflow-y: scroll;
    }
`

export const Toggle = styled.button`
    background: transparent;
    border: none;
    background-color: red;
`

export const SectionDropdown = styled.div`
    width: 100%;
    height: 0px;
    opacity: 0;
    transition: 0.3s all;
`

export const CardsContainer = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const Card = styled.div`
    width: 100%;
    font-size: 0.8rem;
    background-color: #303030af;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    margin: 15px 0;
`

export const Description = styled.p`
    font-size: 1rem;
`

export const Subtitle = styled.h2`
    font-size: 1.2rem;
    margin: 10px 0;
`
