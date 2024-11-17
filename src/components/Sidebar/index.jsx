import {
    Container,
    Wrapper,
    Button,
    LinkButton,
    Icon,
    LinkName
} from './styles.js'

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const Sidebar = ({ links }) => {

    const toggleSidebar = () => {
        document.querySelector("#sidebar").classList.toggle('shrink')
    }

    const navigateTo = (link) => {
        document.querySelector(link).scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <Wrapper>
            <Container id="sidebar" className='shrink'>
                <Button 
                    id="toggleIcon"
                    onClick={toggleSidebar}>
                    <MdKeyboardDoubleArrowRight />
                </Button>
                {
                    links?.map(({value, link, icon}, i) => (
                        <LinkButton
                            onClick={() => navigateTo(link)} 
                            id="link-card"
                            key={i}>
                            <Icon id='icons'>{icon}</Icon>
                            <LinkName id='name'>{value}</LinkName>
                        </LinkButton>
                    ))
                }
            </Container>
        </Wrapper>
    )
}
