import {
    Container,
    Wrapper,
    Button,
    LinkButton
} from './styles.js'

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const Sidebar = ({ links }) => {

    const toggleSidebar = () => {
        document.querySelector("#sidebar").classList.toggle('shrink')
    }

    return (
        <Wrapper>
            <Container id="sidebar">
                <Button 
                    id="toggleIcon"
                    onClick={toggleSidebar}>
                    <MdKeyboardDoubleArrowRight />
                </Button>
                {
                    links?.map(({link, icon}, i) => (
                        <LinkButton key={i}>
                            <div>{icon}</div>
                            <div id='links'>{link}</div>
                        </LinkButton>
                    ))
                }
            </Container>
        </Wrapper>
    )
}
