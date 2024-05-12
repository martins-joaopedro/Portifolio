import {
    Section,
    Title,
    Subtitle,
    Description,
    Card,
    CardsContainer,
    Container
} from '../styles'

export const Academic = () => {
    return(
        <Container>
            <Section>
                <Title>Formação Acadêmica</Title>
                <Description>

                </Description>
                
                <CardsContainer>
                    <Card>
                    <h2>Curso Técnico de Nivel Médio em Informática</h2>
                    <p>CEFET-MG</p>
                    <small>fev 2020 - dez 2022</small>
                    </Card>

                    <Card>
                    <h2>Bacharelado em Ciência da Computação</h2>
                    <p>UFJF</p>
                    <small>mar 2023 - present</small>
                    </Card>
                </CardsContainer>
            </Section>
        </Container>
    )
}