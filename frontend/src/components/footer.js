import logo from "../images/CatwikiLogo.svg"
import { Container } from "react-bootstrap"

const Footer = () => {
    return(
        <footer>
            <Container>
                <img src={logo} alt="logo" />
                <p>&copy; created by Islam Saeed - devChallege.io 2023</p>
            </Container>
        </footer>
    )
}

export default Footer