import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    position: relative;
`

export const Main = styled.main`
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    height: 100vh;
    scroll-behavior: smooth;
`