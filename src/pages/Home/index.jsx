import { Blob } from '../../components/Blob'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { 
    Container, Information, Text
} from './styles'

export const Home = () => {
  return (
    <Container id="home">
      <Text>
        <p>Olá, me chamo</p>
        <h1>João Pedro</h1>
        <p>sou desenvolvedor front-end</p>
      </Text>

        <Blob /> 

        <Information>
          <p>
            venha saber mais!
          </p>
          <MdKeyboardDoubleArrowDown />
        </Information>
    </Container>
  )
}
