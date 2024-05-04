import { 
  Container, 
  Section,
  Card, 
  CardsContainer,
  Title,
  Subtitle,
  Description,
  SectionDropdown,
  Toggle
} from './styles.js'

export const Intro = () => {

  const toggleSection = (id) => {
    const el = document.querySelector(`#${id}`);
    el.classList.toggle("open");
  }

  return (
    <Container>
      <Section>
        <Title>Sobre mim</Title>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ab quasi eius totam facilis voluptas eum. Dolores, vitae! Porro molestiae assumenda dignissimos dolorum adipisci? Voluptatibus aliquid fuga tempora nemo dolorem.
        </Description>
      </Section>

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

      <Section>
        <Title>Habilidades</Title>
        <Description></Description>
        
        <Subtitle></Subtitle>

      </Section>

    </Container>
  )
}
