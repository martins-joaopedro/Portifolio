import { Blob } from '../../components/Blob'
import { 
    Container, Information,
} from './styles'

export const Home = () => {
  return (
    <Container>
        <p>Olá, me chamo</p>
        <h1>João Pedro</h1>
        <p>sou desenvolvedor front-end</p>

        <Blob />
        <Blob />

        <Information>
            deslize a tela 
        </Information>
    </Container>
  )
}
