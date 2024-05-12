import {
    Container,
    Section,
    SectionDropdown,
    Title, 
    Toggle,
    Card,
    Subtitle,
    Description
} from '../styles'

export const Experiences = () => {
    return(
        <Container>
            <Section id="experiencias">
                <Title>Experiências</Title>
                <Toggle onClick={() => toggleSection("experiencias")}>
                ABRIR
                </Toggle>
                
                <SectionDropdown id="dropdown">  
                <Card>
                    <Subtitle>Estagiário</Subtitle>
                    <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non, suscipit ea iste nihil, dolorem temporibus et quo fugit eos sint facilis illo impedit! Ullam repellendus aut animi excepturi sequi.
                    </Description>
                </Card>

                <Subtitle>Desenvolvedor</Subtitle>
                <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non, suscipit ea iste nihil, dolorem temporibus et quo fugit eos sint facilis illo impedit! Ullam repellendus aut animi excepturi sequi.
                </Description>
                
                <Subtitle>Bootcamp Santander 2024</Subtitle>
                <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non, suscipit ea iste nihil, dolorem temporibus et quo fugit eos sint facilis illo impedit! Ullam repellendus aut animi excepturi sequi.
                </Description>
                
                </SectionDropdown>
            </Section>
        </Container>
    )
}