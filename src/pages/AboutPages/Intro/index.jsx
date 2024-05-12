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
} from '../styles.js'

export const Intro = () => {

  const toggleSection = (id) => {
    const el = document.querySelector(`#${id}`);
    el.classList.toggle("open");
  }

  return (
    <Container id="sobre">
      <Section>
        <Title>Sobre mim</Title>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ab quasi eius totam facilis voluptas eum. Dolores, vitae! Porro molestiae assumenda dignissimos dolorum adipisci? Voluptatibus aliquid fuga tempora nemo dolorem.
        </Description>
      </Section>
    </Container>
  )
}
