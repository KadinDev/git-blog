import Banner from '../../assets/Cover.png'

import {
    Container
} from './styles'

export function Header () {
    return (
        <Container>
            <img src={Banner} alt="Imagem de Banner" />
        </Container>
    )
}