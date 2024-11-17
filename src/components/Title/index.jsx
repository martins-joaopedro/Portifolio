import {
    Container
} from './styles'

export const Title = ({ value }) => {
    return (
        <Container data-aos="fade-left">
            <div data-aos="fade-right">
            {value}

            </div>
        </Container>
    )
}